using SurveyIt.Domain.Aggregates.SurveyAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyIt.Web.DTOs.CreateDTOs
{
    public class CreateAnswerDTO
    {
        public int QuestionId { get; set; }
        public string Value { get; set; }
    }
}
