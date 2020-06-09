using SurveyIt.Domain.Aggregates.UserAggregate;
using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates.SurveyAggregate
{
    public class Survey : AggregateRoot
    {
        public int Id { get; private set; }
        public int CreatorId { get; private set; }
        public User Creator { get; private set; }
        public string Title { get; private set; }
        public string Description { get; private set; }
        public DateTime CreationDate { get; private set; }
        public List<Question> Questions { get; private set; }
        public List<Completion> Completions { get; private set; }

        public Survey(string title)
        {
            //throw new NotImplementedException();
            Title = title;
        }
    }
}
