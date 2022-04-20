using YourStory.API.Models.Story;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Services
{
    public interface IStoryService
    {
        Task<bool> PostStoryAsync(StoryDetails request);
        Task<bool> PostStoryOwnerAsync(StoryOwnerRequest request);
        Task<bool> PostYourStoryAsync(YourStoryDetails request);
        Task<IEnumerable<YourStoryDetails>> GetNearByYourStorysAsync();
    }
}
