using AutoMapper;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using SurveyIt.Web.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyIt.Web.Mappings
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Survey, SurveyDTO>();
        }
    }
}
