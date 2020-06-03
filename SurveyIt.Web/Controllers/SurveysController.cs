using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using SurveyIt.Infrastructure.Repositories;
using SurveyIt.Web.DTOs;

namespace SurveyIt.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class SurveysController : ControllerBase
    {
        private readonly ILogger<SurveysController> _logger;
        private readonly IMapper _mapper;
        private readonly ISurveyRepository _surveyRepository;

        public SurveysController(ILogger<SurveysController> logger, IMapper mapper, ISurveyRepository surveyRepository)
        {
            _logger = logger;
            _mapper = mapper;
            _surveyRepository = surveyRepository;
        }

        // api/v1/surveys
        [HttpGet]
        public ActionResult<List<SurveyDTO>> GetSurveys()
        {
            var surveys = _surveyRepository.GetAll();

            return _mapper.Map<List<SurveyDTO>>(surveys);
        }

        // api/v1/surveys/5
        [HttpGet("{id}")]
        public ActionResult<SurveyDTO> GetSurvey(int id)
        {
            var survey = _surveyRepository.GetById(id);
            if (survey == null)
            {
                return NotFound();
            }

            return _mapper.Map<SurveyDTO>(survey);
        }

    }
}
