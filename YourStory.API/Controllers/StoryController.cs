﻿using Microsoft.AspNetCore.Http;
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
    [Route("api/[controller]/[action]")]
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
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(typeof(object), StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<IEnumerable<StoryDetails>>> GetStories(int pageNo, int pageSize)
        {
            GetStoriesRequest request = new GetStoriesRequest();
            request.PageNo = pageNo;
            request.PageSize = pageSize;
            
            var result = await _StoryService.GetStories(request);
            return Ok(result);
        }

    }
}
