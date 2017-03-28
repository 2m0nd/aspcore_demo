using System;

namespace Bit66.Exchange.Services.Dto
{
    public class RegistrationGroupDto
    {
        public String CreatedAt { get; set; }
        public decimal Amount { get; set; }
        public decimal Count { get; set; }


        public String SaleCreatedAt { get; set; }
        public String PurchaseCreatedAt { get; set; }
        public string SaleEmail { get; set; }
        public string PurchaseEmail { get; set; }
    }
}
