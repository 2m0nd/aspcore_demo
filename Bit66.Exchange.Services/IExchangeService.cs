using Bit66.Exchange.Dao;
using System;
using Bit66.Exchange.Services.Dto;

namespace Bit66.Exchange.Services
{
    public interface IExchangeService
    {
        void AddExchangeItems(ExchangeItemsGroupDto item, ExchangeType type);

        ExchangeItemsGroupDto[] GetSalesOrders();
        ExchangeItemsGroupDto[] GetPurchaseOrders();

        RegistrationGroupDto[] GetRegistrations();
    }
}
