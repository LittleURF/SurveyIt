using System;
using System.Collections.Generic;
using System.Text;

namespace SurveyIt.Domain.Aggregates
{
    public interface IRepository<T> where T : AggregateRoot
    {
        void Delete(object id);
        IEnumerable<T> GetAll();
        T GetById(object id);
        void Insert(T obj);
        void Save();
        void Update(T obj);
    }
}
