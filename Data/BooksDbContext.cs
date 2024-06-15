using Data.Models;
using Data.Tools;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Data
{
    public class BooksDbContext: DbContext
    {
        public BooksDbContext()
        {
        }


        public DbSet<Book> Books { get; set; }
        public DbSet<SliderItem> SliderItems { get; set; }


        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);


            optionsBuilder.UseSqlServer(Statics.ConnectionString);
        }
    }
}
