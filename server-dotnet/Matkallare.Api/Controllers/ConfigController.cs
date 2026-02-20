using Microsoft.AspNetCore.Mvc;

namespace Matkallare.Api.Controllers;

[ApiController]
[Route("api/config-test")]
public class ConfigController : ControllerBase
{
    private readonly IConfiguration _config;

    public ConfigController(IConfiguration config)
    {
        _config = config;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new
        {
            db = _config.GetConnectionString("Default"),
            foodApi = _config["ExternalApis:FoodApiBaseUrl"]
        });
    }
}
