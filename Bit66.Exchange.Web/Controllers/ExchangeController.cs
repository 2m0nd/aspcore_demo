using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Bit66.Exchange.Dao;
using Bit66.Exchange.Services;
using Bit66.Exchange.Services.Dto;
using Bit66.Exchange.Web.Models;
using Microsoft.AspNetCore.Mvc;

namespace Bit66.Exchange.Web.Controllers
{
    [Route("/api/v1/[controller]")]
    public class ExchangeController : Controller
    {
        private readonly IExchangeService _service;
        private readonly IMapper _mapper;

        public ExchangeController(IExchangeService service, IMapper mapper)
        {
            _service = service;
            _mapper = mapper;
        }

        [HttpGet("GetModel")]
        public MainPageModel GetModel()
        {
            var regs = _service.GetRegistrations();
            var sales = _service.GetSalesOrders();
            var purchase = _service.GetPurchaseOrders();
            return new MainPageModel()
            {
                Registrations = regs,
                SalesOrders = sales,
                PurchaseOrders = purchase
            };
        }

        [Route("/api/v1/[controller]/AddNewSaleItem")]
        public void AddNewSaleItem(NewExchangeItemModel model)
        {
            _service.AddExchangeItems(_mapper.Map<ExchangeItemsGroupDto>(model), ExchangeType.Sale);
        }

        [HttpPost("AddNewPurchaiseItem")]
        public void AddNewPurchaiseItem(NewExchangeItemModel model)
        {
            _service.AddExchangeItems(_mapper.Map<ExchangeItemsGroupDto>(model), ExchangeType.Purchase);
        }

    }
}
