using Microsoft.EntityFrameworkCore;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using SurveyIt.Domain.Aggregates.UserAggregate;
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
        public DbSet<User> Users { get; set; }

        // do auto setting of user/date
        // get weird properties out of domain entities?
        // move config files at the end.
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Survey>()
             .HasOne<User>()
             .WithMany()
             .HasForeignKey(s => s.CreatorId);

            modelBuilder.Entity<Completion>()
             .HasOne<User>()
             .WithMany()
             .HasForeignKey(s => s.CompletingUserId)
             .OnDelete(DeleteBehavior.NoAction);
        }
    }
}
