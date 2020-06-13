using SurveyIt.Domain.Aggregates.SurveyAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyIt.Web.DTOs.CreateDTOs
{
    public class CreateQuestionDTO
    {
        public string Text { get; set; }
        public QuestionType Type { get; set; }
        public int SpotInSequence { get; set; }
    }
}
