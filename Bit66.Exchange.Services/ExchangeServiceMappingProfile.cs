using System.Linq;
using AutoMapper;
using Bit66.Exchange.Dao;
using Bit66.Exchange.Services.Dto;

namespace Bit66.Exchange.Services
{
    public class ExchangeServiceMappingProfile : Profile
    {
        public override string ProfileName { get; } = "ExchangeServiceMappingProfile";

        public ExchangeServiceMappingProfile()
        {
            CreateMap<ExchangeGroup, ExchangeItemsGroupDto>()
                .ForMember(t => t.Amount, o => o.MapFrom(s => s.Amount))
                .ForMember(t => t.Count, o => o.MapFrom(s =>
                    s.Items.Count(x => x.RegistrationAsPurchase == null && x.RegistrationAsSale == null)))
                .ForMember(t => t.Email, o => o.MapFrom(s => s.Email));
            
            CreateMap<ExchangeRegistrationGroup, RegistrationGroupDto>()
                .ForMember(t => t.CreatedAt, o => o.MapFrom(s => s.CreatedAt))
                .ForMember(t => t.PurchaseCreatedAt, o => o.ResolveUsing(s => s.Items.First().PurchaseItem.Group.CreatedAt))
                .ForMember(t => t.SaleCreatedAt, o => o.ResolveUsing(s => s.Items.First().SaleItem.Group.CreatedAt))
                .ForMember(t => t.Amount, o => o.ResolveUsing(s => s.FactAmount))
                .ForMember(t => t.Count, o => o.ResolveUsing(s => s.Items.Count))
                .ForMember(t => t.PurchaseEmail, o => o.ResolveUsing(s => s.Items.First().PurchaseItem.Group.Email))
                .ForMember(t => t.SaleEmail, o => o.ResolveUsing(s => s.Items.First().SaleItem.Group.Email))
                ;
        }
    }
}