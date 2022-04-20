using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Models
{
    public class User
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MailId { get; set; }
        public string Password { get; set; }
        public string PhoneNo { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
