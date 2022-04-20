using Dapper;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Common
{
    public class SqlHelper : ISqlHelper
    {
        private readonly string _connectionString;

        public SqlHelper(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("localDB");
        }

        public IEnumerable<T> Query<T>(string sqlCmd, int? commandTimeOut = null)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return connection.Query<T>(sqlCmd, commandTimeout: commandTimeOut);
            }
        }

        public IEnumerable<T> Query<T>(string sqlCmd, object parameters, int? commandTimeOut = null)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return connection.Query<T>(sqlCmd, parameters, commandTimeout: commandTimeOut);
            }
        }

        public async Task<IEnumerable<T>> QueryAsync<T>(string sqlCmd, object parameters = null, int? commandTimeOut = null)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return await connection.QueryAsync<T>(sqlCmd, parameters, commandTimeout: commandTimeOut);
            }
        }

        public async Task<int> ExecuteAsync(string sqlCmd, object parameters, int? commandTimeOut = null)
        {
            using (IDbConnection dbConnection = new SqlConnection(_connectionString))
            {
                return await dbConnection.ExecuteAsync(sqlCmd, parameters, commandTimeout: commandTimeOut);
            }
        }


        public bool ExecuteProc(string procName, DynamicParameters parameters)
        {
            bool status = false;
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                if (connection.Execute(procName, parameters, commandType: CommandType.StoredProcedure) > 0)
                {
                    status = true;
                }
            }
            return status;
        }

        public T ExecuteScalarProc<T>(string procName, DynamicParameters parameters)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return connection.ExecuteScalar<T>(procName, parameters, commandType: CommandType.StoredProcedure);
            }
        }

        public IEnumerable<T> QueryProc<T>(string procName, DynamicParameters parameters, int? commandTimeOut = null)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return connection.Query<T>(procName, param: parameters, commandType: CommandType.StoredProcedure, commandTimeout: commandTimeOut);
            }
        }

        public T QueryProcFirstOrDefault<T>(string procName, DynamicParameters parameters, int? commandTimeOut = null)
        {
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                return connection.QueryFirstOrDefault<T>(procName, parameters, commandType: CommandType.StoredProcedure, commandTimeout: commandTimeOut);
            }
        }
        public Tuple<IEnumerable<T1>> QueryMultipleProc<T1>(string procName, DynamicParameters parameters, int? commandTimeOut = null)
        {
            var objs = new List<object>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                var gridReader = connection.QueryMultiple(procName, parameters, commandType: CommandType.StoredProcedure, commandTimeout: commandTimeOut);
                objs.Add(gridReader.Read<T1>());
            }
            return Tuple.Create(objs[0] as IEnumerable<T1>);
        }
        public Tuple<IEnumerable<T1>, IEnumerable<T2>> QueryMultipleProc<T1, T2>(string procName, DynamicParameters parameters, int? commandTimeOut = null)
        {
            var objs = new List<object>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                var gridReader = connection.QueryMultiple(procName, parameters, commandType: CommandType.StoredProcedure, commandTimeout: commandTimeOut);
                objs.Add(gridReader.Read<T1>());
                objs.Add(gridReader.Read<T2>());
            }
            return Tuple.Create(objs[0] as IEnumerable<T1>, objs[1] as IEnumerable<T2>);
        }

        public Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>> QueryMultipleProc<T1, T2, T3>(string procName, DynamicParameters parameters, int? commandTimeOut = null)
        {
            var objs = new List<object>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                var gridReader = connection.QueryMultiple(procName, parameters, commandType: CommandType.StoredProcedure, commandTimeout: commandTimeOut);
                objs.Add(gridReader.Read<T1>());
                objs.Add(gridReader.Read<T2>());
                objs.Add(gridReader.Read<T3>());
            }
            return Tuple.Create(objs[0] as IEnumerable<T1>, objs[1] as IEnumerable<T2>, objs[2] as IEnumerable<T3>);
        }

        public Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>, IEnumerable<T4>> QueryMultipleProc<T1, T2, T3, T4>(string procName, DynamicParameters parameters, int? commandTimeOut = null)
        {
            var objs = new List<object>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                var gridReader = connection.QueryMultiple(procName, parameters, commandType: CommandType.StoredProcedure, commandTimeout: commandTimeOut);
                objs.Add(gridReader.Read<T1>());
                objs.Add(gridReader.Read<T2>());
                objs.Add(gridReader.Read<T3>());
                objs.Add(gridReader.Read<T4>());
            }
            return Tuple.Create(objs[0] as IEnumerable<T1>, objs[1] as IEnumerable<T2>, objs[2] as IEnumerable<T3>, objs[3] as IEnumerable<T4>);
        }

        public Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>, IEnumerable<T4>, IEnumerable<T5>> QueryMultipleProc<T1, T2, T3, T4, T5>(string procName, DynamicParameters parameters, int? commandTimeOut = null)
        {
            var objs = new List<object>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                var gridReader = connection.QueryMultiple(procName, parameters, commandType: CommandType.StoredProcedure, commandTimeout: commandTimeOut);
                objs.Add(gridReader.Read<T1>());
                objs.Add(gridReader.Read<T2>());
                objs.Add(gridReader.Read<T3>());
                objs.Add(gridReader.Read<T4>());
                objs.Add(gridReader.Read<T5>());
            }
            return Tuple.Create(objs[0] as IEnumerable<T1>, objs[1] as IEnumerable<T2>, objs[2] as IEnumerable<T3>, objs[3] as IEnumerable<T4>, objs[4] as IEnumerable<T5>);
        }

        public Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>, IEnumerable<T4>, IEnumerable<T5>, IEnumerable<T6>> QueryMultipleProc<T1, T2, T3, T4, T5, T6>(string procName, DynamicParameters parameters, int? commandTimeOut = null)
        {
            var objs = new List<object>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                var gridReader = connection.QueryMultiple(procName, parameters, commandType: CommandType.StoredProcedure, commandTimeout: commandTimeOut);
                objs.Add(gridReader.Read<T1>());
                objs.Add(gridReader.Read<T2>());
                objs.Add(gridReader.Read<T3>());
                objs.Add(gridReader.Read<T4>());
                objs.Add(gridReader.Read<T5>());
                objs.Add(gridReader.Read<T6>());
            }
            return Tuple.Create(objs[0] as IEnumerable<T1>, objs[1] as IEnumerable<T2>, objs[2] as IEnumerable<T3>, objs[3] as IEnumerable<T4>, objs[4] as IEnumerable<T5>, objs[5] as IEnumerable<T6>);
        }

        public Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>, IEnumerable<T4>, IEnumerable<T5>, IEnumerable<T6>, IEnumerable<T7>> QueryMultipleProc<T1, T2, T3, T4, T5, T6, T7>(string procName, DynamicParameters parameters, int? commandTimeOut = null)
        {
            var objs = new List<object>();
            using (IDbConnection connection = new SqlConnection(_connectionString))
            {
                var gridReader = connection.QueryMultiple(procName, parameters, commandType: CommandType.StoredProcedure, commandTimeout: commandTimeOut);
                objs.Add(gridReader.Read<T1>());
                objs.Add(gridReader.Read<T2>());
                objs.Add(gridReader.Read<T3>());
                objs.Add(gridReader.Read<T4>());
                objs.Add(gridReader.Read<T5>());
                objs.Add(gridReader.Read<T6>());
                objs.Add(gridReader.Read<T7>());
            }
            return Tuple.Create(objs[0] as IEnumerable<T1>, objs[1] as IEnumerable<T2>, objs[2] as IEnumerable<T3>, objs[3] as IEnumerable<T4>, objs[4] as IEnumerable<T5>, objs[5] as IEnumerable<T6>, objs[6] as IEnumerable<T7>);
        }
    }
}
