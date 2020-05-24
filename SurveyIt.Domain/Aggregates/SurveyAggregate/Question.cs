using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates.SurveyAggregate
{
    public class Question : Entity
    {
        public int Id { get; set; }
        public int SurveyId { get; private set; }
        public Survey Survey { get; private set; }
        public string Text { get; private set; }
        public QuestionType Type { get; private set; }
        public int SpotInSequence { get; private set; }
    }
}
