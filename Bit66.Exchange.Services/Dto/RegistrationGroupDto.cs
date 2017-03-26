using System;

namespace Bit66.Exchange.Services.Dto
{
    public class RegistrationGroupDto
    {
        public DateTime CreatedAt { get; set; }
        public decimal Amount { get; set; }
        public decimal Count { get; set; }


        public DateTime SaleCreatedAt { get; set; }
        public DateTime PurchaseCreatedAt { get; set; }
        public string SaleEmail { get; set; }
        public string PurchaseEmail { get; set; }
    }
}
