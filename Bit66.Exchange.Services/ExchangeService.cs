using Bit66.Exchange.Dao;
using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using AutoMapper.Configuration;
using Bit66.Exchange.Services.Dto;
using Microsoft.EntityFrameworkCore;

namespace Bit66.Exchange.Services
{
    public class ExchangeService : IExchangeService
    {
        private ExchangeEntitiesContext _context;
        private readonly IMapper _mapper;

        public ExchangeService(ExchangeEntitiesContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public void AddExchangeItems(ExchangeItemsGroupDto item, ExchangeType type)
        {
            if (item.Count <= 0)
                return;


            var group = new ExchangeGroup()
            {
                Type = type,
                CreatedAt = DateTime.UtcNow,
                Amount = item.Amount,
                Email = item.Email
            };
            _context.ExchangeGroups.Add(group);
            _context.SaveChanges();
            for (int i = 0; i < item.Count; i++)
            {
                _context.ExchangeItems.Add(new ExchangeItem(){GroupId = group.Id});
            }

            _context.SaveChanges();

            InternalExchangeLogic(group);
        }

        void InternalExchangeLogic(ExchangeGroup group)
        {
            var direction = group.Type;
            var baseExchangeQuery = _context
                .ExchangeItems
                .Include(x=>x.Group)
                .Where(x => x.Group.Type != group.Type)
                .Where(x => x.RegistrationAsSale == null && x.RegistrationAsPurchase == null);
                                               ;

            if (direction == ExchangeType.Sale)
                baseExchangeQuery = baseExchangeQuery
                    .Where(x => x.Group.Amount <= group.Amount) //если покупка то надо купить по дешевле
                    .OrderBy(x => x.Group.Amount) //и выбрать самые дешевые сначала запросы на продажу
                    .AsQueryable();

            if(direction == ExchangeType.Purchase)
                baseExchangeQuery = baseExchangeQuery
                    .Where(x => x.Group.Amount >= group.Amount) //если продажа то надо продать по дороже
                    .OrderByDescending(x => x.Group.Amount) //и выбрать самые дорогие сначала запросы на покупку
                    .AsQueryable();


            var dbItems = baseExchangeQuery.ToList();

            if (dbItems.Any())
            {

                var currentItems =
                    group.Items.Where(x => x.RegistrationAsSale == null && x.RegistrationAsPurchase == null)
                    .ToList();

                if (dbItems.Count > currentItems.Count)
                    dbItems = dbItems.Take(currentItems.Count).ToList();

                if (currentItems.Count > dbItems.Count)
                    currentItems = currentItems.Take(dbItems.Count).ToList();

                int indexExchange = 0;
                foreach (var dbItemsGroup in dbItems.GroupBy(x=>x.Group.Id))
                {
                    var dbGroup = dbItems.First(x => x.Group.Id == dbItemsGroup.Key);

                    var registraionGroup = new ExchangeRegistrationGroup()
                    {
                        FactAmount = dbGroup.Group.Amount,
                        CreatedAt = DateTime.UtcNow,
                    };

                    _context.RegistrationsGroups.Add(registraionGroup);

                    foreach (var dbitem in dbItemsGroup)
                    {
                        var currentItem = currentItems[indexExchange];
                        var cId = currentItem.Id;
                        var dbId = dbitem.Id;
                        var reg = new ExchangeRegistration()
                        {
                            GroupId = registraionGroup.Id,
                            SaleItemId = direction == ExchangeType.Sale ? cId : dbId,
                            PurchaseItemId = direction == ExchangeType.Sale ? dbId : cId,
                        };
                        indexExchange++;
                        _context.Registrations.Add(reg);
                    }
                }
            }
            _context.SaveChanges();
        }

        public RegistrationGroupDto[] GetRegistrations()
        {
            var result = _context.RegistrationsGroups
                .Include(x => x.Items)
                .Include(x => x.Items).ThenInclude(registration => registration.PurchaseItem).ThenInclude(g => g.Group)
                .Include(x => x.Items).ThenInclude(registration => registration.SaleItem).ThenInclude(g => g.Group)
                .ToArray();

            var dtoResult = _mapper.Map<RegistrationGroupDto[]>(result.OrderByDescending(x => x.CreatedAt));
            return dtoResult;
        }

        public ExchangeItemsGroupDto[] GetSalesOrders()
        {
            var result = _context.ExchangeGroups
                .Where(x => x.Type == ExchangeType.Sale)
                .Where(i=>i.Items.Any(x => x.RegistrationAsSale == null && x.RegistrationAsPurchase == null))
                .Include(x => x.Items)
                .ToArray();
            var dtoResult = _mapper.Map<ExchangeItemsGroupDto[]>(result.OrderByDescending(x=>x.CreatedAt));
            return dtoResult;
        }

        public ExchangeItemsGroupDto[] GetPurchaseOrders()
        {
            var result = _context
                .ExchangeGroups
                .Where(i => i.Items.Any(x => x.RegistrationAsSale == null && x.RegistrationAsPurchase == null))
                .Where(x => x.Type == ExchangeType.Purchase)
                .Include(x=>x.Items)
                .ToArray();
            
            var dtoResult = _mapper.Map<ExchangeItemsGroupDto[]>(result.OrderByDescending(x => x.CreatedAt));
            return dtoResult;
        }
    }
}
