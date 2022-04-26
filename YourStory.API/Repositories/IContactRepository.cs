using System.Threading.Tasks;
using YourStory.API.Models.Contact;

namespace YourStory.API.Repositories
{
    public interface IContactRepository
    {
        Task<bool> CreateContactAsync(ContactDetails request);
    }
}
