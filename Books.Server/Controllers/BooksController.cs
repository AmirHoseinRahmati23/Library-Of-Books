using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Data;
using Models;
using Microsoft.AspNetCore.Cors;
using ViewModels;

namespace Books.Server.Controllers;

[EnableCors("All")]
[Route("[controller]")]
[ApiController]
public class BooksController : ControllerBase
{
    private readonly BooksDbContext _context;

    public BooksController(BooksDbContext context)
    {
        _context = context;
    }

    // GET: api/Books
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Book>>> GetBooks()
    {
        return await _context.Books.Where(b => !b.IsDeleted).ToListAsync();
    }

    // GET: api/Books/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Book>> GetBook(Guid id)
    {
        var book = await _context.Books.FindAsync(id);

        if (book == null)
        {
            return NotFound();
        }

        return book;
    }


    // POST: api/Books
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPost]
    public async Task<ActionResult<Book>> PostBook(BookViewModel model)
    {
        var book = new Book(model.Name,model.Description,model.Genres,model.ImagePath);
        _context.Books.Add(book);
        await _context.SaveChangesAsync();

        return CreatedAtAction("GetBook", new { id = book.Id }, book);
    }

    // PUT: api/Books/5
    // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
    [HttpPut("{id}")]
    public async Task<IActionResult> PutBook(Guid id, Book book)
    {
        if (id != book.Id)
        {
            return BadRequest();
        }
        var result = await Update(book);
        if(result == false)
        {
            return BadRequest();
        }

        return Ok();
    }
    // DELETE: api/Books/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteBook(Guid id)
    {
        var book = await _context.Books.FindAsync(id);
        if (book == null)
        {
            return NotFound();
        }

        book.IsDeleted = true;
        var result = await Update(book);
        if(result == false)
        {
            return BadRequest();
        }

        return Ok();
    }

    private bool BookExists(Guid id)
    {
        return _context.Books.Any(e => e.Id == id);
    }
    private async Task<bool> Update(Book book) 
    {
        _context.Entry(book).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
            return true;
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!BookExists(book.Id))
            {
                return false;
            }
            else
            {
                return false;
            }
        }
    }
}

