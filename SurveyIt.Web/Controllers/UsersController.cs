using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SurveyIt.Domain.Aggregates.SurveyAggregate;
using SurveyIt.Domain.Aggregates.UserAggregate;
using SurveyIt.Web.DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SurveyIt.Web.Controllers
{
    [ApiController]
    [Route("api/v1/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly ILogger<UsersController> _logger;
        private readonly IMapper _mapper;
        private readonly IUserRepository _userRepository;

        public UsersController(ILogger<UsersController> logger, IMapper mapper, IUserRepository userRepository)
        {
            _logger = logger;
            _mapper = mapper;
            _userRepository = userRepository;
        }

        // api/v1/users
        [HttpGet]
        public ActionResult<List<UserDTO>> GetUsers()
        {
            var users = _userRepository.GetAll();

            return _mapper.Map<List<UserDTO>>(users);
        }

        // api/v1/users/5
        [HttpGet("{id}")]
        public ActionResult<UserDTO> GetUser(int id)
        {
            var user = _userRepository.GetById(id);
            if (user == null)
            {
                return NotFound();
            }

            return _mapper.Map<UserDTO>(user);
        }
    }
}
