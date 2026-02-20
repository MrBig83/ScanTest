using System.ComponentModel.DataAnnotations;

namespace Matkallare.Api.DTOs;

public class CreateItemDto
{
    [Required]
    public string Name { get; set; } = string.Empty;

    public string? Brand { get; set; }
    public string? Barcode { get; set; }
    public string? ImageUrl { get; set; }
    public string? Hylla { get; set; }

    public int Quantity { get; set; }

    public DateTime? ExpirationDate { get; set; }
}
