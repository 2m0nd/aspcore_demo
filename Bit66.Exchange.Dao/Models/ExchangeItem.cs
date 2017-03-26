using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Bit66.Exchange.Dao
{
    public class ExchangeItem : BaseModel
    {
        [InverseProperty("SaleItem")]
        public ExchangeRegistration RegistrationAsSale { get; set; }

        [InverseProperty("PurchaseItem")]
        public ExchangeRegistration RegistrationAsPurchase { get; set; }

        [ForeignKey("Group")]
        public Guid GroupId { get; set; }
        public virtual ExchangeGroup Group { get; set; }
    }
}
