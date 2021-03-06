﻿using SurveyIt.Domain.Aggregates.SurveyAggregate;
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
        public string CompletingUserId { get; set; }
        public List<AnswerDTO> Answers { get; set; }
    }
}
