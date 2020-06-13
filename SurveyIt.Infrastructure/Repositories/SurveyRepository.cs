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
        public SurveyRepository(appContext appContext)
            :base(appContext)
        {
        }

        public override IEnumerable<Survey> GetAll()
        {
            return _context.Surveys
                .Include(s => s.Questions)
                .Include(s => s.Completions)
                .AsEnumerable();
        }

        public override Survey GetById(object id)
        {
            return _context.Surveys
                .Include(s => s.Questions)
                .Include(s => s.Completions).ThenInclude(c => c.Answers)
                .SingleOrDefault(s => s.Id == (int)id);
        }

        public Completion GetCompletion(int completionId)
        {
            return _context.Completions
                .Include(s => s.Answers)
                .Include(s => s.Survey)
                .SingleOrDefault(s => s.Id == completionId);
        }

        public List<Completion> GetCompletionsOfSurvey(int surveyId)
        {
            return _context.Completions
                .Where(c => c.SurveyId == surveyId)
                .Include(s => s.Answers)
                .Include(s => s.Survey)
                .ToList();
        }
    }
}
