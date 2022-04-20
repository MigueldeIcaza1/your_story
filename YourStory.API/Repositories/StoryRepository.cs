using Dapper;
using YourStory.API.Common;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using YourStory.API.Models.Story;

namespace YourStory.API.Repositories
{
    public class StoryRepository : IStoryRepository
    {
        private readonly ISqlHelper _sqlHelper;
        public StoryRepository(ISqlHelper sqlHelper)
        {
            _sqlHelper = sqlHelper;
        }

        public async Task<bool> PostStoryAsync(StoryDetails request)
        {
            int result;
            try
            {
                result = await _sqlHelper.ExecuteAsync(SqlQueries.CreateStory, request);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                throw;
            }
            return (result == 1);
        }

        public async Task<bool> PostStoryOwnerAsync(StoryOwnerRequest request)
        {
            int result;
            try
            {
                result = await _sqlHelper.ExecuteAsync(SqlQueries.OwnerBooking, request);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                throw;
            }
            return (result == 1);
        }

        public async Task<bool> PostYourStoryAsync(YourStoryDetails request)
        {
            int result;
            try
            {
                result = await _sqlHelper.ExecuteAsync(SqlQueries.CreateKeeper, request);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                throw;
            }
            return (result == 1);
        }

        public async Task<IEnumerable<YourStoryDetails>> GetNearByYourStorysAsync()
        {
           return await _sqlHelper.QueryAsync<YourStoryDetails>(SqlQueries.GetNearByKeepers);
        }
    }
}

