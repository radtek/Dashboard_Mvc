using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webdiyer.WebControls.Mvc;

namespace Dashboard_Mvc.Repository
{
    //public interface IRepository<T> where T:class
    public interface IRepository
    {
        IUnitOfWork UnitOfWork { get; set; }
        //IEnumerable<T> FindAll(Func<T, bool> exp);
        //void Add(T entity);
        //void Modify(T entity);
        //void Delete(T entity);    
    }
}
