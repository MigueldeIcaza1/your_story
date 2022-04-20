using YourStory.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Repositories
{
    public interface IUserRepository
    {
        Task<bool> CreateUserAsync(RegisterUser user);
        Task<User> GetUser(LoginUser user);
    }
}
