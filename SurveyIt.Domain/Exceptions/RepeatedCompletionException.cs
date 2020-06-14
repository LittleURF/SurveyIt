using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Exceptions
{
    public class RepeatedCompletionException : Exception
    {
        public RepeatedCompletionException() : base() { }
        public RepeatedCompletionException(string message) : base(message) { }
        public RepeatedCompletionException(string message, Exception innerException)
            : base(message, innerException) { }
    }
}
