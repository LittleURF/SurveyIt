using Microsoft.EntityFrameworkCore.Migrations;

namespace SurveyIt.Infrastructure.Migrations
{
    public partial class AddSurveyDescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Surveys",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Surveys");
        }
    }
}
