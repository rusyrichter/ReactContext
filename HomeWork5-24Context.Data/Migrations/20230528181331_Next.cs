using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HomeWork5_24Context.Data.Migrations
{
    public partial class Next : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_cheesecakes",
                table: "cheesecakes");

            migrationBuilder.RenameTable(
                name: "cheesecakes",
                newName: "candidates");

            migrationBuilder.AddPrimaryKey(
                name: "PK_candidates",
                table: "candidates",
                column: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_candidates",
                table: "candidates");

            migrationBuilder.RenameTable(
                name: "candidates",
                newName: "cheesecakes");

            migrationBuilder.AddPrimaryKey(
                name: "PK_cheesecakes",
                table: "cheesecakes",
                column: "Id");
        }
    }
}
