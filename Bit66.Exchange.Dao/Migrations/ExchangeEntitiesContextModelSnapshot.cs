using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Bit66.Exchange.Dao;

namespace Bit66.Exchange.Dao.Migrations
{
    [DbContext(typeof(ExchangeEntitiesContext))]
    partial class ExchangeEntitiesContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
            modelBuilder
                .HasAnnotation("ProductVersion", "1.1.1")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Bit66.Exchange.Dao.ExchangeGroup", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<decimal>("Amount");

                    b.Property<DateTime>("CreatedAt");

                    b.Property<string>("Email");

                    b.Property<int>("Type");

                    b.HasKey("Id");

                    b.ToTable("ExchangeGroups");
                });

            modelBuilder.Entity("Bit66.Exchange.Dao.ExchangeItem", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("GroupId");

                    b.HasKey("Id");

                    b.HasIndex("GroupId");

                    b.ToTable("ExchangeItems");
                });

            modelBuilder.Entity("Bit66.Exchange.Dao.ExchangeRegistration", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<Guid>("GroupId");

                    b.Property<Guid?>("PurchaseItemId");

                    b.Property<Guid?>("SaleItemId");

                    b.HasKey("Id");

                    b.HasIndex("GroupId");

                    b.HasIndex("PurchaseItemId")
                        .IsUnique();

                    b.HasIndex("SaleItemId")
                        .IsUnique();

                    b.ToTable("Registrations");
                });

            modelBuilder.Entity("Bit66.Exchange.Dao.ExchangeRegistrationGroup", b =>
                {
                    b.Property<Guid>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("CreatedAt");

                    b.Property<decimal>("FactAmount");

                    b.HasKey("Id");

                    b.ToTable("RegistrationsGroups");
                });

            modelBuilder.Entity("Bit66.Exchange.Dao.ExchangeItem", b =>
                {
                    b.HasOne("Bit66.Exchange.Dao.ExchangeGroup", "Group")
                        .WithMany("Items")
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Bit66.Exchange.Dao.ExchangeRegistration", b =>
                {
                    b.HasOne("Bit66.Exchange.Dao.ExchangeRegistrationGroup", "Group")
                        .WithMany("Items")
                        .HasForeignKey("GroupId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("Bit66.Exchange.Dao.ExchangeItem", "PurchaseItem")
                        .WithOne("RegistrationAsPurchase")
                        .HasForeignKey("Bit66.Exchange.Dao.ExchangeRegistration", "PurchaseItemId");

                    b.HasOne("Bit66.Exchange.Dao.ExchangeItem", "SaleItem")
                        .WithOne("RegistrationAsSale")
                        .HasForeignKey("Bit66.Exchange.Dao.ExchangeRegistration", "SaleItemId");
                });
        }
    }
}
