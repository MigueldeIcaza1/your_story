using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Common
{
    public static class SqlExceptionLogger
    {
        public async static Task Log(Exception exception, string connectionString)
        {
            await LogToDB<Exception>(connectionString, SqlQueries.LogException,
                 new { createdOn = DateTime.UtcNow, exception.Source, exception.Message, exception.StackTrace });
        }

        private static async Task<IEnumerable<T>> LogToDB<T>(string connectionString, string sqlCmd, object parameters = null, int? commandTimeOut = null)
        {
            using (IDbConnection connection = new SqlConnection(connectionString))
            {
                return await connection.QueryAsync<T>(sqlCmd, parameters, commandTimeout: commandTimeOut);
            }
        }
    }
}
