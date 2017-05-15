using log4net;
using Newtonsoft.Json;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using Webdiyer.WebControls.Mvc;

namespace Dashboard_Mvc.Repository
{
    //public class Repository<T> : IRepository<T> where T : class
    public class Repository : IRepository
    {
       readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

       public IUnitOfWork UnitOfWork { get; set; }

       public DbContext dbContext;
  //     public DbSet<T> _dbSet;


        #region 构造函数
       public Repository()
       {

       }
       public Repository(IUnitOfWork unitOfWork)
       {
           UnitOfWork = unitOfWork;
           this.dbContext = unitOfWork.Context;
      //     this._dbSet = this.dbContext.Set<T>();
       }
        #endregion

        //#region IRepository 成员
        //public void Add(T item)
        //{
        //    this._dbSet.Add(item);
        //}

        //public void Delete(T item)
        //{
        //    if (dbContext.Entry(item).State == EntityState.Detached)
        //    {
        //        _dbSet.Attach(item);
        //    }
        //    this._dbSet.Remove(item);
        //}

        //public void Modify(T item)
        //{
        //    _dbSet.Attach(item);
        //    this.dbContext.Entry(item).State = EntityState.Modified;
        //}

        //public IEnumerable<T> FindAll(Func<T, bool> exp)
        //{
        //    return this._dbSet.ToList();
        //}

        //#endregion

    }
}