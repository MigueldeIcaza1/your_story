using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Models.Story
{
    public class GetStoriesRequest
    {
        public int PageNo { get; set; }
        public int PageSize { get; set; }
    }
}
