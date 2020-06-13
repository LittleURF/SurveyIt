using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Exceptions
{
    public class IdMismatchedException : Exception
    {
        public IdMismatchedException() : base() { }
        public IdMismatchedException(string message) : base(message) { }
        public IdMismatchedException(string message, Exception innerException)
            : base(message, innerException) { }
    }
}

