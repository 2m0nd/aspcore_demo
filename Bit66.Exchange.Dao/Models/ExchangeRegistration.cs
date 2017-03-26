using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Bit66.Exchange.Dao
{
    public class ExchangeRegistration : BaseModel
    {
        public Guid GroupId { get; set; }

        [ForeignKey("SaleItem")]
        public Guid? SaleItemId { get; set; }
        public ExchangeItem SaleItem { get; set; }

        [ForeignKey("PurchaseItem")]
        public Guid? PurchaseItemId { get; set; }
        public ExchangeItem PurchaseItem { get; set; }

        public ExchangeRegistrationGroup Group { get; set; }
    }

    public class ExchangeRegistrationGroup : BaseModel
    {
        public DateTime CreatedAt { get; set; }
        public decimal FactAmount { get; set; }
        public List<ExchangeRegistration> Items { get; set; }
    }

}
