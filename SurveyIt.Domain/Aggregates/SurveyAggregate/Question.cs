using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates.SurveyAggregate
{
    public class Question : Entity
    {
        public int Id { get; private set; }
        public int SurveyId { get; private set; }
        public Survey Survey { get; private set; }
        public string Text { get; private set; }
        public QuestionType Type { get; private set; }
        public int SpotInSequence { get; private set; }

        public Question(string text, QuestionType type, int spotInSequence)
        {
            if (String.IsNullOrWhiteSpace(text))
                throw new ArgumentException("Argument null or empty", nameof(text));

            if (!Enum.IsDefined(typeof(QuestionType), type))
                throw new ArgumentException("Question type is not specified", nameof(type));

            Text = text;
            Type = type;
            SpotInSequence = spotInSequence;
        }

        private Question() { }
    }
}
