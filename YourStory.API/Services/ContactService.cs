using System;
using System.Threading.Tasks;
using YourStory.API.Models.Contact;
using YourStory.API.Repositories;
using YourStory.API.Services;

namespace YourStory.API.Services
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _ContactRepository;
        public ContactService(IContactRepository ContactRepository)
        {
            _ContactRepository = ContactRepository;
        }


        public async Task<bool> CreateContactAsync(ContactDetails request)
        {
            try
            {
                request.CreatedOn = DateTime.UtcNow;
                return await _ContactRepository.CreateContactAsync(request);
            }
            catch (Exception)
            {
                throw;
            }
        }

    }
}
