using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
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

        public SurveysController(ILogger<SurveysController> logger, IMapper mapper)
        {
            _logger = logger;
            _mapper = mapper;
        }

        [HttpGet]
        // api/v1/surveys
        public ActionResult<SurveyDTO> GetSurveys()
        {
            var survey = new Survey() { Title = "This is the survey" };
            return _mapper.Map<SurveyDTO>(survey);
        }

    }
}
