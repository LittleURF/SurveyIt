using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using SurveyIt.Domain.Aggregates.UserAggregate;
using SurveyIt.Web.DTOs;
using SurveyIt.Web.DTOs.CreateDTOs;

namespace SurveyIt.Web.Controllers
{
    [Route("api/v1/surveys/{id}/[controller]")]
    [Route("api/v1/surveys/[controller]")]
    [ApiController]
    public class CompletionsController : ControllerBase
    {

        private readonly ILogger<CompletionsController> _logger;
        private readonly IMapper _mapper;
        private readonly ISurveyRepository _surveyRepository;

        public CompletionsController(ILogger<CompletionsController> logger, IMapper mapper, ISurveyRepository surveyRepository)
        {
            _logger = logger;
            _mapper = mapper;
            _surveyRepository = surveyRepository;
        }


        // api/v1/surveys/5/completions
        [HttpGet]
        public ActionResult<List<CompletionDTO>> GetSurveyCompletions(int id)
        {
            var completions = _surveyRepository.GetCompletionsOfSurvey(id);

            return _mapper.Map<List<CompletionDTO>>(completions);
        }

        // api/v1/surveys/completions/10
        [HttpGet("{completionId}")]
        public ActionResult<CompletionDTO> GetCompletion(int completionId)
        {
            var completion = _surveyRepository.GetCompletion(completionId);
            if (completion == null)
            {
                return NotFound();
            }

            return _mapper.Map<CompletionDTO>(completion);
        }

        // api/v1/surveys/completions
        [HttpPost]
        public ActionResult AddSurveyCompletion(CreateCompletionDTO completion)
        {
            var survey = _surveyRepository.GetById(completion.SurveyId);
            var newCompletion = new Completion
                (
                    survey: survey,
                    answers: _mapper.Map<List<Answer>>(completion.Answers),
                    completingUserId: completion.CompletingUserId
                );

            newCompletion.SetCompletionDateNow();

            survey.AddCompletion(newCompletion);
            _surveyRepository.Update(survey);
            _surveyRepository.Save();

            _surveyRepository.GetById(survey.Id);
            return CreatedAtAction(nameof(GetCompletion), new { completionId = newCompletion.Id }, _mapper.Map<CompletionDTO>(newCompletion));
        }
    }
}