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
                return await _StoryRepository.PostStoryAsync(request);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<bool> PostStoryOwnerAsync(StoryOwnerRequest request)
        {
            try
            {
                return await _StoryRepository.PostStoryOwnerAsync(request);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<bool> PostYourStoryAsync(YourStoryDetails request)
        {
            try
            {
                return await _StoryRepository.PostYourStoryAsync(request);
            }
            catch (Exception)
            {
                throw;
            }
        }

        public async Task<IEnumerable<YourStoryDetails>> GetNearByYourStorysAsync()
        {
            try
            {
                return await _StoryRepository.GetNearByYourStorysAsync();
            }
            catch (Exception)
            {
                throw;
            }
        }


    }
}
