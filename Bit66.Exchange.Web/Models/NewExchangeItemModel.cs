using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Bit66.Exchange.Services.Dto;

namespace Bit66.Exchange.Web.Models
{
    public class NewExchangeItemModel
    {
        [RegularExpression(@"\d+(\.\d{1,2})?", ErrorMessage = "Некорректная стоимость")]
        public decimal Amount { get; set; }

        [Range(1, int.MaxValue, ErrorMessage = "Кол-во должно быть больше 0")]
        public int Count { get; set; }

        [DataType(DataType.EmailAddress, ErrorMessage = "Некорректный формат E-mail")]
        public string Email { get; set; }
    }

    public class MainPageModel
    {
        public ExchangeItemsGroupDto[] SalesOrders { get; set; }
        public ExchangeItemsGroupDto[] PurchaseOrders { get; set; }
        public RegistrationGroupDto[] Registrations { get; set; }
    }
}
