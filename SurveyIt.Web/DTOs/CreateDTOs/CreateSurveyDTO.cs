using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SurveyIt.Domain.Aggregates.SurveyAggregate;


namespace SurveyIt.Web.DTOs.CreateDTOs
{
    public class CreateSurveyDTO
    {
        public string CreatorId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public List<CreateQuestionDTO> Questions { get; set; }
    }
}
