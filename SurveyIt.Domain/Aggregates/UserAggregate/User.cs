using SurveyIt.Domain.Aggregates.SurveyAggregate;
using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates.UserAggregate
{
    public class User : AggregateRoot
    {
        public int Id { get; private set; }
        public string Name { get; private set; }
        public DateTime CreationDate { get; private set; }

        public User(string name)
        {
            if (String.IsNullOrWhiteSpace(name))
                throw new ArgumentException("Argument null or empty", nameof(name));

            Name = name;
        }

        private User() { }
    }
}
