using SurveyIt.Domain.Aggregates.UserAggregate;
using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates.SurveyAggregate
{
    public class Completion : Entity
    {
        public int Id { get; private set; }
        public int SurveyId { get; private set; }
        public Survey Survey { get; private set; }
        public List<Answer> Answers { get; private set; }
        public int CompletingUserId { get; private set; }
        public User CompletingUser { get; private set; }
        public DateTime CompletionDate { get; private set; }
    }
}
