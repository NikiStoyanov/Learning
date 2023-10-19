using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SIS.HTTP
{
    public class HttpServerException : Exception
    {
        public HttpServerException(string message)
            : base(message)
        {
        }
    }
}
