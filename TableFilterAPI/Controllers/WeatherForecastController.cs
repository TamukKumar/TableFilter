using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TableFilterAPI.Entities;
using TableFilterAPI.Data;
using Microsoft.AspNetCore.Authorization;
using System.Security.Principal;

namespace TableFilterAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private static readonly string[] Summaries = new[]
        {
            "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        };

        private readonly ILogger<WeatherForecastController> _logger;
        private readonly TableFilterDataContext _context;

        public WeatherForecastController(ILogger<WeatherForecastController> logger, TableFilterDataContext context)
        {
            _logger = logger;
            _context = context;
        }

        [Authorize]
        [HttpPost]
        public IEnumerable<UserDetail> Get(GridDetails details)
        {
            if(!string.IsNullOrEmpty(details.Filter1) || !string.IsNullOrEmpty(details.Filter2))
            {
                return (from r in _context.UserDetails where r.UserName == details.Filter1
                select r).Take(details.EndRecord ?? 25).ToList();
            }
            else
            {
                return (from r in _context.UserDetails select r).OrderBy(x => x.Id).Skip(details.StartRecord ?? 0).Take(details.EndRecord ?? 25).ToList();
            }
        }

        [Authorize]
        [HttpGet]
        [Route("[action]")]
        public string GetUser()
        {
            if(HttpContext.User.Identity.IsAuthenticated){
            IPrincipal p = HttpContext.User;
            return p.Identity.Name;
            }
            else{
                return "Unauthenticated User";
            }
        }
    }
}
