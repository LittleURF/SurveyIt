using Microsoft.EntityFrameworkCore;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Infrastructure.DbContexts
{
    public class appContext : DbContext
    {
        public appContext(DbContextOptions<appContext> options) : base(options)
        {

        }

        public DbSet<Survey> Surveys { get; set; }
        public DbSet<Completion> Completions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
        }
    }
}
