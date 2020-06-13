using SurveyIt.Domain.Aggregates.UserAggregate;
using SurveyIt.Infrastructure.DbContexts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SurveyIt.Infrastructure.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(appContext appContext)
            : base(appContext)
        {
        }

        public override IEnumerable<User> GetAll()
        {
            return _context.Users.AsEnumerable();
        }

        public override User GetById(object id)
        {
            return _context.Users.SingleOrDefault(s => s.Id == (int)id);
        }
    }
}
