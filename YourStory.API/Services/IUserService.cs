using YourStory.API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Services
{
    public interface IUserService
    {
        Task<bool> CreateUser(RegisterUser user);
        Task<User> GetUser(LoginUser user);
    }
}
