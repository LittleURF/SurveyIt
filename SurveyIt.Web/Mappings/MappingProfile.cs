using AutoMapper;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using SurveyIt.Domain.Aggregates.UserAggregate;
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
            CreateMap<User, UserDTO>();
            CreateMap<Survey, SurveyDTO>();
            CreateMap<Question, QuestionDTO>();
            CreateMap<Completion, CompletionDTO>();
            CreateMap<Answer, AnswerDTO>();
        }
    }
}
