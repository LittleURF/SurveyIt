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

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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

        [HttpGet]
        // api/v1/surveys
        public ActionResult<List<SurveyDTO>> GetSurveys()
        {
            var surveys = _surveyRepository.GetAll();
            return _mapper.Map<List<SurveyDTO>>(surveys);
        }

    }
}
