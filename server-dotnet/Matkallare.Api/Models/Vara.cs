using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Matkallare.Api.Models;

[Table("varor")] 
public class Vara
{
    [Key]
    [Column("id")]
    public int Id { get; set; }

    [Required]
    [Column("namn")]
    public string Namn { get; set; } = string.Empty;

    [Column("brand")]
    public string? Brand { get; set; }

    [Column("imageurl")]
    public string? ImageUrl { get; set; }

    [Column("antal")]
    public int Antal { get; set; }

    [Column("ean")]
    public string? Ean { get; set; }

    [Column("plats")]
    public string? Plats { get; set; }
}
