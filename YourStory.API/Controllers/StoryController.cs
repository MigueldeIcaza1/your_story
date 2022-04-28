using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using YourStory.API.Models.Story;
using YourStory.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace YourStory.API.Controllers
{
    //[Route("api/[controller]/[action]")]
    [ApiController]
    public class StoryController : ControllerBase
    {
        private readonly IStoryService _StoryService;
        public StoryController(IStoryService StoryService)
        {
            _StoryService = StoryService;
        }

        // POST api/Story/PostStory
        [HttpPost]
        [Route("/api/Story/PostStory")]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(object), StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<bool>> PostStory(StoryDetails request)
        {
            var result = await _StoryService.PostStoryAsync(request);
            if (result)
            {
                return Ok(result);
            }
            else
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error saving Story");
            }
        }

        // GET api/Story/GetStories
        [HttpGet]
        [Route("/api/Story/GetStories")]
        [ProducesResponseType(typeof(IEnumerable<StoryDetails>), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(object), StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IEnumerable<StoryDetails>>> GetStories(int pageNo, int pageSize)
        {
            GetStoriesRequest request = new GetStoriesRequest
            {
                PageNo = pageNo,
                PageSize = pageSize
            };

            var result = await _StoryService.GetStories(request);
            return Ok(result);
        }

        // GET api/Story/GetStoriesCount
        [HttpGet]
        [Route("/api/Story/GetStoriesCount")]
        [ProducesResponseType(typeof(int), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(object), StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<int>> GetStoriesCount()
        {
            var result = await _StoryService.GetStoriesCount();
            return Ok(result);
        }

        // GET api/Story/GetStory/1
        [HttpGet]
        [Route("/api/Story/GetStory")]
        [ProducesResponseType(typeof(StoryDetails), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(object), StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<StoryDetails>> GetStory(int id)
        {
            var result = await _StoryService.GetStory(id);
            return Ok(result);
        }

    }
}
