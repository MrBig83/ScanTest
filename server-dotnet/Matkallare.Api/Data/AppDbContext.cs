using Microsoft.EntityFrameworkCore;
using Matkallare.Api.Models;

namespace Matkallare.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public DbSet<Vara> Varor => Set<Vara>();
}
