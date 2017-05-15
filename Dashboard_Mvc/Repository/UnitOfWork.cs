using Dashboard_Mvc.Models;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Dashboard_Mvc.Repository
{
    public class UnitOfWork : IUnitOfWork, IDisposable   //IDisposable垃圾资源回收机制
    {
        public DbContext Context { get; set; }

        private bool _disposed;

        public UnitOfWork()
        {
            Context = new FoxlinkSfcContext();
        }
        //public Dictionary<Type, object> repositories = new Dictionary<Type, object>();
        //public IRepository<T> Repository<T>() where T : class
        //{
        //    if (repositories.Keys.Contains(typeof(T)) == true)
        //    {
        //        return repositories[typeof(T)] as IRepository<T>;
        //    }
        //    IRepository<T> repo = new Repository<T>(Context);
        //    repositories.Add(typeof(T), repo);
        //    return repo;
        //}

        public bool Save()
        {
          return this.Context.SaveChanges() > 0 ? true : false;
        }

        // Dispose()销毁了对象,是一种垃圾回收机制。
        public virtual void Dispose(bool disposing)
        {
            if (!this._disposed)
                if (disposing )
                    this.Context.Dispose();

            this._disposed = true;
        }

        #region IDisposable 成员
        //Close后连接可以再次打开;而Dispose后连接字串被清空,连接不能再打开
        public void Dispose()
        {
            //必须为true
            Dispose(true);
            //通知垃圾回收机制不再调用终结器（析构器）
            GC.SuppressFinalize(this);
        }
        #endregion
    }
}