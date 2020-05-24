using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates.SurveyAggregate
{
    public class Answer : Entity
    {
        public int Id { get; private set; }
        public int CompletionId { get; private set; }
        public Completion Completion { get; private set; }
        public int QuestionId { get; private set; }
        public string Value { get; private set; }
    }
}
