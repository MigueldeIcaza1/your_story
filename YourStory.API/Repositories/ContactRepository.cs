using System;
using System.Diagnostics;
using System.Threading.Tasks;
using YourStory.API.Common;
using YourStory.API.Models.Contact;
using YourStory.API.Repositories;

namespace YourStory.API.Repositories
{
    public class ContactRepository : IContactRepository
    {
        private readonly ISqlHelper _sqlHelper;
        public ContactRepository(ISqlHelper sqlHelper)
        {
            _sqlHelper = sqlHelper;
        }

        public async Task<bool> CreateContactAsync(ContactDetails request)
        {
            int result;
            try
            {
                result = await _sqlHelper.ExecuteAsync(SqlQueries.CreateContact, request);
            }
            catch (Exception ex)
            {
                Debug.WriteLine(ex);
                throw;
            }
            return (result == 1);
        }

    }
}

