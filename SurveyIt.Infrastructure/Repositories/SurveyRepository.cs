using Microsoft.EntityFrameworkCore;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using SurveyIt.Infrastructure.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SurveyIt.Infrastructure.Repositories
{
    public class SurveyRepository : Repository<Survey>, ISurveyRepository
    {
        public SurveyRepository(SurveyContext surveyContext)
            :base(surveyContext)
        {
        }

        public override IEnumerable<Survey> GetAll()
        {
            return _context.Surveys
                .Include(s => s.Creator)
                .Include(s => s.Questions)
                .Include(s => s.Completions)
                .AsEnumerable();
        }

        public override Survey GetById(object id)
        {
            return _context.Surveys
                .Include(s => s.Creator)
                .Include(s => s.Questions)
                .Include(s => s.Completions).ThenInclude(c => c.Answers)
                .SingleOrDefault(s => s.Id == (int)id);
        }
    }
}
