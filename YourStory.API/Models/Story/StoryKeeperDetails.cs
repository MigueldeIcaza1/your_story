using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Models.Story
{
    public class YourStoryDetails
    {
        public int UserId { get; set; }
        public int UserName { get; set; }
        public string AccommodationType { get; set; }
        public string Location { get; set; }
        public string EstimatedFare { get; set; }
        public string Description { get; set; }
        public string PhotoUrl { get; set; }

    }
}
