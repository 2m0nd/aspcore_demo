using System;
using System.Collections.Generic;

namespace Bit66.Exchange.Dao
{
    public class ExchangeGroup : BaseModel
    {
        public String Email { get; set; }
        public DateTime CreatedAt { get; set; }
        public decimal Amount { get; set; }
        public virtual List<ExchangeItem> Items { get; set; }
        public ExchangeType Type { get; set; }
    }

}
