using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using YourStory.API.Models.Contact;

namespace YourStory.API.Services
{
    public interface IContactService
    {
        Task<bool> CreateContactAsync(ContactDetails request);
    }
}
