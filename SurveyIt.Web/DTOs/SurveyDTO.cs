using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using SurveyIt.Domain.Aggregates.UserAggregate;


namespace SurveyIt.Web.DTOs
{
    public class SurveyDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime CreationDate { get; set; }
        public UserDTO Creator { get; set; }
        public List<QuestionDTO> Questions { get; set; }
        public List<CompletionDTO> Completions { get; set; }
    }
}
