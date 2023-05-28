using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HomeWork5_24Context.Data.Migrations
{
    public partial class AddedNotesCollumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Notes",
                table: "candidates",
                type: "nvarchar(max)",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Notes",
                table: "candidates");
        }
    }
}
