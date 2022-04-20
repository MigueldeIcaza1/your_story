using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ERP.API
{
    public class Constants
    {
        public IConfiguration Configuration { get; }

        public static string JWTKey { get; set; }
        public static string JWTIssuer { get; set; }
        public static string ConnectionString { get; set; }

        public Constants(IConfiguration configuration)
        {
            Configuration = configuration;
            JWTIssuer = configuration["Jwt:Issuer"];
            JWTKey = configuration["Jwt:Key"];
        }

    }
}
