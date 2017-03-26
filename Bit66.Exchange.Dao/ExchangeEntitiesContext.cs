using System;
using System.Linq.Expressions;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace Bit66.Exchange.Dao
{
    public sealed class ExchangeEntitiesContext : DbContext
    {
        private static readonly bool[] _migrated = { false };

        public ExchangeEntitiesContext(DbContextOptions<ExchangeEntitiesContext> options) : base(options)
        {
            if (!_migrated[0])
                lock (_migrated)
                    if (!_migrated[0])
                    {
                        Database.Migrate(); // применение всех миграций
                        _migrated[0] = true;
                    }
        }

        public DbSet<ExchangeGroup> ExchangeGroups { get; set; }
        public DbSet<ExchangeItem> ExchangeItems { get; set; }
        public DbSet<ExchangeRegistration> Registrations { get; set; }
        public DbSet<ExchangeRegistrationGroup> RegistrationsGroups { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            
            //modelBuilder.Entity<ExchangeItem>()
            //    .HasOne(x => x.Group)
            //    .WithMany(x => x.Items)
            //    .HasForeignKey(x => x.GroupId)
            //    .OnDelete(DeleteBehavior.Restrict)
            //    ;

        }

        public override void Dispose()
        {
            base.Dispose();
        }
    }
}