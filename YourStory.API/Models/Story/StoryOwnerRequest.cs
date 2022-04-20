using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Models.Story
{
    public class StoryOwnerRequest
    {
        [Required]
        public int UserId { get; set; }
        [Required]
        public int StoryId { get; set; }
        [Required]
        public string AccommodationTypeId { get; set; }
        [Required]
        public string Location { get; set; }
        public string EstimatedFare { get; set; }
        public string Description { get; set; }
        public string PhotoUrl { get; set; }

    }
}
