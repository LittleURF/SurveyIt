using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace SurveyIt.Infrastructure.Migrations
{
    public partial class removedUserRelatedEntities : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Completions_Users_CompletingUserId",
                table: "Completions");

            migrationBuilder.DropForeignKey(
                name: "FK_Surveys_Users_CreatorId",
                table: "Surveys");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropIndex(
                name: "IX_Surveys_CreatorId",
                table: "Surveys");

            migrationBuilder.DropIndex(
                name: "IX_Completions_CompletingUserId",
                table: "Completions");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CreationDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Surveys_CreatorId",
                table: "Surveys",
                column: "CreatorId");

            migrationBuilder.CreateIndex(
                name: "IX_Completions_CompletingUserId",
                table: "Completions",
                column: "CompletingUserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Completions_Users_CompletingUserId",
                table: "Completions",
                column: "CompletingUserId",
                principalTable: "Users",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Surveys_Users_CreatorId",
                table: "Surveys",
                column: "CreatorId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
