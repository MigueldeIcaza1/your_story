﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Models
{
    public class LoginUser
    {
        [Required(ErrorMessage = "MailId is required")]
        public string MailId { get; set; }
        [Required(ErrorMessage = "Password is required")]
        public string Password { get; set; }
    }
}
