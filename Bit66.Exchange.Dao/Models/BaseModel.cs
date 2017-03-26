using System;

namespace Bit66.Exchange.Dao
{
    public class BaseModel
    {
        public BaseModel()
        {
            Id = Guid.NewGuid();
        }
        public Guid Id { get; set; }
    }
}