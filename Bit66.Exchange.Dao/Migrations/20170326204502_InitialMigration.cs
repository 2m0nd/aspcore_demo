using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Bit66.Exchange.Dao.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "ExchangeGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    Amount = table.Column<decimal>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    Email = table.Column<string>(nullable: true),
                    Type = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExchangeGroups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "RegistrationsGroups",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    FactAmount = table.Column<decimal>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RegistrationsGroups", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ExchangeItems",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    GroupId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ExchangeItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ExchangeItems_ExchangeGroups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "ExchangeGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Registrations",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    GroupId = table.Column<Guid>(nullable: false),
                    PurchaseItemId = table.Column<Guid>(nullable: true),
                    SaleItemId = table.Column<Guid>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Registrations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Registrations_RegistrationsGroups_GroupId",
                        column: x => x.GroupId,
                        principalTable: "RegistrationsGroups",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Registrations_ExchangeItems_PurchaseItemId",
                        column: x => x.PurchaseItemId,
                        principalTable: "ExchangeItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Registrations_ExchangeItems_SaleItemId",
                        column: x => x.SaleItemId,
                        principalTable: "ExchangeItems",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ExchangeItems_GroupId",
                table: "ExchangeItems",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Registrations_GroupId",
                table: "Registrations",
                column: "GroupId");

            migrationBuilder.CreateIndex(
                name: "IX_Registrations_PurchaseItemId",
                table: "Registrations",
                column: "PurchaseItemId",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Registrations_SaleItemId",
                table: "Registrations",
                column: "SaleItemId",
                unique: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Registrations");

            migrationBuilder.DropTable(
                name: "RegistrationsGroups");

            migrationBuilder.DropTable(
                name: "ExchangeItems");

            migrationBuilder.DropTable(
                name: "ExchangeGroups");
        }
    }
}
