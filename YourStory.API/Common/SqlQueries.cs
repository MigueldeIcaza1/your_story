using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Common
{
    public class SqlQueries
    {
        public const string CreateUser = @"INSERT INTO [User] (FirstName, LastName, CreatedOn, MailId, PhoneNo, [Password])
                                                     VALUES(@FirstName, @LastName, @CreatedOn, @MailId, @PhoneNo, @Password)";
        public const string GetUser = @"SELECT FirstName, LastName, CreatedOn, MailId, PhoneNo, [Password]
                                                     FROM [User] WHERE MailId = @MailId AND Password = @Password";

        public const string CreateStory = @"INSERT INTO Story (Title, UserName, TagName, Description, IsAnonymous)
                                                     VALUES(@Title, @UserName, @TagName, @Description, @IsAnonymous)";

        public const string OwnerBooking = @"INSERT INTO OwnerBooking (UserId, AccommodationTypeId, Days, Location)
                                                     VALUES(@UserId, @AccommodationTypeId, @Days, @Location)";

        public const string CreateKeeper = @"INSERT INTO Keeper (UserId, AccommodationTypeId, EstimatedFare, Location, Description, PhotoUrl, StoryId)
                                                     VALUES(@UserId, @AccommodationTypeId, @EstimatedFare, @Location, @Description, @PhotoUrl, @StoryId)";

        public const string GetNearByKeepers = "SELECT TOP 10 * FROM Keeper";
    }
}
