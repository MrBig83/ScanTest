using Microsoft.AspNetCore.Mvc;

namespace Matkallare.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HealthController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            status = "ok",
            service = "Matkallare.Api",
            timestamp = DateTime.UtcNow
        });
    }
}
