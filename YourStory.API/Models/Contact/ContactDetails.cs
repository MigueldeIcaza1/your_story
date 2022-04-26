using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Models.Contact
{
    public class ContactDetails
    {
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string EmailAddress { get; set; }
        [Required]
        public string Message { get; set; }
        public DateTime CreatedOn { get; set; }
        public string PhoneNo { get; set; }
        public string JobRole { get; set; }

    }
}
