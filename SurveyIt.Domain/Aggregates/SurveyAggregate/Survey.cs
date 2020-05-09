using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates.SurveyAggregate
{
    public class Survey : AggregateRoot
    {
        public string Title { get; set; }
    }
}
