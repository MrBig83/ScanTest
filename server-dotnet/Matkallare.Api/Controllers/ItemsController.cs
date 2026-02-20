using Microsoft.AspNetCore.Mvc;
using Matkallare.Api.Data;
using Matkallare.Api.Models;
using Matkallare.Api.DTOs;

namespace Matkallare.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class VarorController : ControllerBase
{
    private readonly AppDbContext _db;

    public VarorController(AppDbContext db)
    {
        _db = db;
    }

    [HttpPost]
    public async Task<IActionResult> Create(CreateItemDto dto)
    {
        var vara = new Vara
        {
            Namn = dto.Name,
            Brand = dto.Brand,
            ImageUrl = dto.ImageUrl,
            Ean = dto.Barcode,
            Antal = dto.Quantity,
            Plats = dto.Hylla
        };

        _db.Varor.Add(vara);
        await _db.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetById),
            new { id = vara.Id },
            vara
        );
    }

    // temporär – behövs för CreatedAtAction
    [HttpGet("{id}")]
    public IActionResult GetById(int id)
    {
        var vara = _db.Varor.Find(id);
        if (vara == null) return NotFound();
        return Ok(vara);
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var varor = _db.Varor
                    .Where(i => i.Antal > 0)
                    .ToList();

        return Ok(varor);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateQuantity(int id, UpdateQuantityDto dto)
    {
        var vara = _db.Varor.Find(id);
        if (vara == null)
            return NotFound();

        vara.Antal = dto.Quantity;
        await _db.SaveChangesAsync();

        return NoContent();
    }

 
 
}
