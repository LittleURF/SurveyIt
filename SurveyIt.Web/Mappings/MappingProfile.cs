using AutoMapper;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using SurveyIt.Web.DTOs;
using SurveyIt.Web.DTOs.CreateDTOs;
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
            CreateMap<Question, QuestionDTO>();
            CreateMap<Completion, CompletionDTO>();
            CreateMap<Answer, AnswerDTO>();

            CreateMap<CreateSurveyDTO, Survey>();
            CreateMap<CreateQuestionDTO, Question>();
            CreateMap<CreateCompletionDTO, Completion>();
            CreateMap<CreateAnswerDTO, Answer>();
        }
    }
}
