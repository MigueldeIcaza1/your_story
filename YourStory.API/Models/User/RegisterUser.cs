using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Models
{
    public class RegisterUser
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string MailId { get; set; }
        [Required]
        public string Password { get; set; }

        public string PhoneNo { get; set; }
        public DateTime CreatedOn { get; set; }
    }
}
