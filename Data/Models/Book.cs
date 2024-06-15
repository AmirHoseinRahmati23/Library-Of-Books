using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Text;
using System.Threading.Tasks;

namespace Models
{
    public class Book : EntityWithImage
    {
        public Book(): this(string.Empty, string.Empty)
        {
            
        }
        public Book(string name, string description) : this(name, description, string.Empty) 
        {
        
        }
        public Book(string name, string description, string genres, string? image = null) : base(image)
        {
            Name = name;
            Description = description;
            Genres = genres;
        }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Genres { get; set; }
    }
}
