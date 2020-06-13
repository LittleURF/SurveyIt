using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates.SurveyAggregate
{
    public interface ISurveyRepository : IRepository<Survey>
    {
        Completion GetCompletion(int completionId);
        List<Completion> GetCompletionsOfSurvey(int surveyId);
    }
}
