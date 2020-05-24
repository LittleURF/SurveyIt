﻿using SurveyIt.Domain.Aggregates.SurveyAggregate;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyIt.Web.DTOs
{
    public class UserDTO
    {
        public int Id { get; set; }
        public DateTime CreationDate { get; set; }
        public List<CompletionDTO> Completions { get; set; }
    }
}