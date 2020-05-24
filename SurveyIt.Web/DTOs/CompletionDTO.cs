using SurveyIt.Domain.Aggregates.SurveyAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyIt.Web.DTOs
{
    public class CompletionDTO
    {
        public int Id { get; set; }
        public DateTime CompletionDate { get; set; }
        public List<Answer> Answers { get; set; }
    }
}
