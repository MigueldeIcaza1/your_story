using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YourStory.API.Services;
using YourStory.API.Models.Contact;

namespace YourStory.API.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _ContactService;
        public ContactController(IContactService ContactService)
        {
            _ContactService = ContactService;
        }

        // POST api/Contact/PostContact
        [HttpPost]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(object), StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<bool>> CreateContact(ContactDetails request)
        {
            var result = await _ContactService.CreateContactAsync(request);
            if (result)
            {
                return Ok(result);
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error saving Contact");
            }
        }

    }
}
