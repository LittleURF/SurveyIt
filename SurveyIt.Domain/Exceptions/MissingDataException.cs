using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Exceptions
{
    public class MissingDataException : Exception
    {
        public MissingDataException() : base() { }
        public MissingDataException(string message) : base(message) { }
        public MissingDataException(string message, Exception innerException)
            : base(message, innerException) { }
    }
}

