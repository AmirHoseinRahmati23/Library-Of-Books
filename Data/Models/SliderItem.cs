using Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data.Models
{
    public class SliderItem: Entity
    {
        public SliderItem(): this(null) { }

        public SliderItem(Guid? bookId) : base()
        {
            BookId = bookId;
        }

        public Guid? BookId { get; set; }

        [ForeignKey(nameof(BookId))]
        public Book? Book { get; set; }

    }
}
