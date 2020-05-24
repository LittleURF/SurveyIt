using Microsoft.EntityFrameworkCore;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Infrastructure.DbContexts
{
    public class SurveyContext : DbContext
    {
        public SurveyContext(DbContextOptions<SurveyContext> options) : base(options)
        {

        }

        public DbSet<Survey> Surveys { get; set; }
        public DbSet<Completion> Completions { get; set; }
        public DbSet<Answer> Answers { get; set; }
        public DbSet<Question> Questions { get; set; }

        // do auto setting of user/date
        // get weird properties out of domain entities?
        // move config files at the end.
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Survey>()
             .HasOne(s => s.Creator)
             .WithMany(c => c.Surveys)
             .HasForeignKey(s => s.CreatorId);

            modelBuilder.Entity<Completion>()
             .HasOne(s => s.CompletingUser)
             .WithMany(c => c.Completions)
             .HasForeignKey(s => s.CompletingUserId)
             .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
