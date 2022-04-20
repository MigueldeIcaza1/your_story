using YourStory.API.Models;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Dapper;
using System.Data;
using System.Data.SqlClient;
using YourStory.API.Common;

namespace YourStory.API.Repositories
{
    public class UserRepository: IUserRepository
    {
        private readonly string _connectionString;
        public UserRepository(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("localDB");
        }
        public async Task<bool> CreateUserAsync(RegisterUser user)
        {
            using (IDbConnection dbConnection = new SqlConnection(_connectionString))
            {
                user.CreatedOn = DateTime.Now;
                          dbConnection.Open();

                var result = await dbConnection.ExecuteAsync(SqlQueries.CreateUser, user);
                return (result == 1);
            }
        }

        public async Task<User> GetUser(LoginUser user)
        {
            using (IDbConnection dbConnection = new SqlConnection(_connectionString))
            {
               
                dbConnection.Open();

                return await dbConnection.QueryFirstOrDefaultAsync<User>(SqlQueries.GetUser, user);
            }
        }
    }
}
