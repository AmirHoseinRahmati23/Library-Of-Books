using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data;
using Data.Models;
using ViewModels;

namespace Books.Server.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class SliderController : ControllerBase
    {
        private readonly BooksDbContext _context;

        public SliderController(BooksDbContext context)
        {
            _context = context;
        }

        // GET: api/Slider
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SliderItem>>> GetSliderItems()
        {
            var reslult = await _context.SliderItems.Include(i => i.Book).ToListAsync();
            return reslult;
        }

        // GET: api/Slider/5
        [HttpGet("{id}")]
        public async Task<ActionResult<SliderItem>> GetSliderItem(Guid id)
        {
            var sliderItem = await _context.SliderItems.Include(i => i.Book).SingleOrDefaultAsync(i => i.Id == id);

            if (sliderItem == null)
            {
                return NotFound();
            }

            return sliderItem;
        }

        

        // POST: api/Slider
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<SliderItem>> PostSliderItem(SliderPostViewModel model)
        {
            var item = new SliderItem(model.BookId);

            _context.SliderItems.Add(item);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSliderItem", new { id = item.Id }, item);
        }
        
        // DELETE: api/Slider/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSliderItem(Guid id)
        {
            var sliderItem = await _context.SliderItems.FindAsync(id);
            if (sliderItem == null)
            {
                return NotFound();
            }

            _context.SliderItems.Remove(sliderItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool SliderItemExists(Guid id)
        {
            return _context.SliderItems.Any(e => e.Id == id);
        }

    }
}
