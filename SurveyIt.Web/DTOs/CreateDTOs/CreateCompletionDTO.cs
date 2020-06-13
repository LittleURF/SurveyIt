using SurveyIt.Domain.Aggregates.SurveyAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyIt.Web.DTOs.CreateDTOs
{
    public class CreateCompletionDTO
    {
        public int SurveyId { get; set; }
        public int CompletingUserId { get; set; }
        public List<CreateAnswerDTO> Answers { get; set; }
    }
}
