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

                var resp = await _StoryRepository.GetStories(request);
                foreach (var item in resp)
                {
                    item.FormatedCreatedOn = item.CreatedOn.ToString("dddd, dd MMMM yyyy");
                }
                return resp;
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<int> GetStoriesCount()
        {
            try
            {
                return await _StoryRepository.GetStoriesCount();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<StoryDetails> GetStory(int id)
        {
            try
            {
                var resp = await _StoryRepository.GetStory(id);
                resp.FormatedCreatedOn = resp.CreatedOn.ToString("dddd, dd MMMM yyyy");
                return resp;
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
