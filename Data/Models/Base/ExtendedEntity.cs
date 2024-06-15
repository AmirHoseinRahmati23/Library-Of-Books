using Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class ExtendedEntity: Entity
    {
        public ExtendedEntity() : base()
        {
            IsDeleted = false;
            UpdateDate = DateTime.Now;
        }
        public bool IsDeleted { get; set; }

        public DateTime UpdateDate { get; set; }
    }
}
