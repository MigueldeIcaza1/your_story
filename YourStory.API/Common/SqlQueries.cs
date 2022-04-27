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

        public const string CreateStory = @"INSERT INTO Story (Title, UserName, TagName, Description, IsAnonymous, CreatedOn)
                                                     VALUES(@Title, @UserName, @TagName, @Description, @IsAnonymous, @CreatedOn)";

        public const string GetStories = @"SELECT Id,CreatedOn,Title,UserName,TagName,Description,IsAnonymous FROM Story
                                                    ORDER BY Id DESC
                                                    OFFSET(@PageNo-1)*@PageSize ROWS
                                                    FETCH NEXT @PageSize ROWS ONLY";

        public const string GetStoriesCount = @"SELECT COUNT(ID) FROM Story";

        public const string GetStory = @"SELECT Id,CreatedOn,Title,UserName,TagName,Description,IsAnonymous FROM Story
                                                    WHERE Id = @Id";


        public const string CreateContact = @"INSERT INTO Contact (FirstName, LastName, EmailAddress, Message, PhoneNo, JobRole, CreatedOn)
                                                     VALUES(@FirstName, @LastName, @EmailAddress, @Message, @PhoneNo, @JobRole, @CreatedOn)";

    }
}
