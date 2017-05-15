using Dashboard_Mvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dashboard_Mvc.Repository
{
   // public interface ITestRepository : IRepository<PACK_SECTION_TOTAL_CAPACITY>
    public interface ITestRepository : IRepository
    {

        //取得测试站12个月内產能資訊
        object getTestCapacityByYear(string modelNO);

        //按月份取得测试站每週的產能資訊
        object getTestCapacityByMon(string modelNO, string selectTime);

        //按周取得測試站每天的產能資訊

        object getTestCapacityByWeekly(string modelNO, string selectTime);

    }
}
