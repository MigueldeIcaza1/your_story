using YourStory.API.Models;
using YourStory.API.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        public async Task<bool> CreateUser(RegisterUser user)
        {
            var result = await _userRepository.CreateUserAsync(user);
            return result;
        }

        public async Task<User> GetUser(LoginUser user)
        {
            var result = await _userRepository.GetUser(user);
            return result;
        }
    }
}
