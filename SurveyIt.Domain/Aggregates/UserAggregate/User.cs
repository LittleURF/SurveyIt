using SurveyIt.Domain.Aggregates.SurveyAggregate;
using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates.UserAggregate
{
    public class User : AggregateRoot
    {
        public int Id { get; private set; }
        public DateTime CreationDate { get; private set; }
        public List<Survey> Surveys { get; private set; }
        public List<Completion> Completions { get; private set; }
    }
}
