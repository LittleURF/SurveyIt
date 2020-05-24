using Microsoft.EntityFrameworkCore;
using SurveyIt.Domain.Aggregates;
using SurveyIt.Infrastructure.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SurveyIt.Infrastructure.Repositories
{
    public abstract class Repository<T> where T : AggregateRoot
    {
        protected readonly SurveyContext _context;
        private readonly DbSet<T> _entities;

        public Repository(SurveyContext surveyContext)
        {
            _context = surveyContext;
            _entities = _context.Set<T>();
        }

        public virtual IEnumerable<T> GetAll()
        {
            return _entities.AsEnumerable();
        }

        public virtual T GetById(object id)
        {
            return _entities.Find(id);
        }

        public virtual void Insert(T obj)
        {
            _entities.Add(obj);
        }

        public virtual void Update(T obj)
        {
            _entities.Update(obj);
        }

        public virtual void Delete(object id)
        {
            T existing = _entities.Find(id);
            _entities.Remove(existing);
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
