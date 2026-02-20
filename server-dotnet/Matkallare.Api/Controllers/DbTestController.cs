using Microsoft.AspNetCore.Mvc;
using Matkallare.Api.Data;

namespace Matkallare.Api.Controllers;

[ApiController]
[Route("api/db-test")]
public class DbTestController : ControllerBase
{
    private readonly AppDbContext _db;

    public DbTestController(AppDbContext db)
    {
        _db = db;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var canConnect = _db.Database.CanConnect();
        return Ok(new { database = canConnect });
    }
}
