using Microsoft.EntityFrameworkCore;
using TableFilterAPI.Entities;

namespace TableFilterAPI.Data
{
    public class TableFilterDataContext:DbContext
    {
        private DbContextOptions<TableFilterDataContext> _context;

        public TableFilterDataContext(DbContextOptions<TableFilterDataContext> context):base(context)
        {
            _context = context;
        }

        public DbSet<UserDetail> UserDetails {get; set;}
    }
}