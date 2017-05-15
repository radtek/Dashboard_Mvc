﻿using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using Dashboard_Mvc.Models;

namespace Dashboard_Mvc.Repository
{
    /// <summary>
    /// 工作单元
    /// 提供一个保存方法，它可以对调用层公开，为了减少连库次数
    /// </summary>
    public interface IUnitOfWork : IDisposable
    {
        DbContext Context { get; set; }
        bool Save();
    }
}