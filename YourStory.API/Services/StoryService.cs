using YourStory.API.Models.Story;
using YourStory.API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Services
{
    public class StoryService: IStoryService
    {
        private readonly IStoryRepository _StoryRepository;
        public StoryService(IStoryRepository StoryRepository)
        {
            _StoryRepository = StoryRepository;
        }


        public async Task<bool> PostStoryAsync(StoryDetails request)
        {
            try
            {
                request.CreatedOn = DateTime.UtcNow;
                return await _StoryRepository.PostStoryAsync(request);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<IEnumerable<StoryDetails>> GetStories(GetStoriesRequest request)
        {
            try
            {
                if (request.PageNo <= 0) request.PageNo = 1;
                if (request.PageSize <= 0) request.PageSize = 5;

                return await _StoryRepository.GetStories(request);
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
