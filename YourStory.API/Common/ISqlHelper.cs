using Dapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace YourStory.API.Common
{
    public interface ISqlHelper
    {
        IEnumerable<T> Query<T>(string sqlCmd, int? commandTimeOut = null);
        IEnumerable<T> Query<T>(string sqlCmd, object parameters, int? commandTimeOut = null);
        Task<IEnumerable<T>> QueryAsync<T>(string sqlCmd, object parameters = null, int? commandTimeOut = null);
        Task<T> QuerySingleOrDefaultAsync<T>(string sqlCmd, object parameters = null, int? commandTimeOut = null);
        Task<int> ExecuteAsync(string sqlCmd, object parameters, int? commandTimeOut = null);
        bool ExecuteProc(string procName, DynamicParameters parameters);
        T ExecuteScalarProc<T>(string procName, DynamicParameters parameters);
        IEnumerable<T> QueryProc<T>(string procName, DynamicParameters parameters, int? commandTimeOut = null);
        T QueryProcFirstOrDefault<T>(string procName, DynamicParameters parameters, int? commandTimeOut = null);
        Tuple<IEnumerable<T1>> QueryMultipleProc<T1>(string procName, DynamicParameters parameters, int? commandTimeOut = null);
        Tuple<IEnumerable<T1>, IEnumerable<T2>> QueryMultipleProc<T1, T2>(string procName, DynamicParameters parameters, int? commandTimeOut = null);
        Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>> QueryMultipleProc<T1, T2, T3>(string procName, DynamicParameters parameters, int? commandTimeOut = null);
        Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>, IEnumerable<T4>> QueryMultipleProc<T1, T2, T3, T4>(string procName, DynamicParameters parameters, int? commandTimeOut = null);
        Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>, IEnumerable<T4>, IEnumerable<T5>> QueryMultipleProc<T1, T2, T3, T4, T5>(string procName, DynamicParameters parameters, int? commandTimeOut = null);
        Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>, IEnumerable<T4>, IEnumerable<T5>, IEnumerable<T6>> QueryMultipleProc<T1, T2, T3, T4, T5, T6>(string procName, DynamicParameters parameters, int? commandTimeOut = null);
        Tuple<IEnumerable<T1>, IEnumerable<T2>, IEnumerable<T3>, IEnumerable<T4>, IEnumerable<T5>, IEnumerable<T6>, IEnumerable<T7>> QueryMultipleProc<T1, T2, T3, T4, T5, T6, T7>(string procName, DynamicParameters parameters, int? commandTimeOut = null);
    }
}
