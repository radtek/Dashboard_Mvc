using Dashboard_Mvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webdiyer.WebControls.Mvc;

namespace Dashboard_Mvc.Repository
{
    //public interface ISMTRepository : IRepository<PACK_SECTION_TOTAL_CAPACITY>
    public interface ISMTRepository : IRepository
    {
        //總產量
        object getSMTTotalCapacity(string modelNO, string timeInterval, bool isTotalCapacity);
        //線體數
        object getSMTLineInfos(string modelNO, string timeInterval);
        //檢測站實際產出
        object getSMTTotalProduction(string modelNO, string timeInterval);
        //UPH
        object getSMTUPHByModelNO(string modelNO, string timeInterval);
        //OEE
        object getSMTOEEValue(string modelNO);
        //Line Status
        object getSMTLineStatus(string modelNO, string timeInterval);
        //OEE(Time Interavl)
        object getSMTOEEValueByInterval(string modelNO, string lineName, string startDate, string endDate);
        //SMT UPH By Line
        object getSMTLineUPH(string modelNO, string lineID, string startDate, string endDate);
        //SMT Line UPH AND OEE
        object getSMTLineOEEandUPH(string modelNO, string lineName, string lineID, string startDate, string endDate);
        //SMT OEE Trend Chart
        object getSMTOEETrendChart(string modelNO, string timeInterval, Boolean isIntevalExclude);

        //取得SMT12内產能資訊(產出、良率)
        object getSMTCapacity_12HR(string modelNO);

        //取得SMT12内UPH
        object getSMTUPH_12HR(string modelNO);

        //取得SMT當前的OEE
        object getSMTCurrentOee(string modelNO);

        //取得SMT12个月内產能資訊
        object getSMTCapacityByYear(string modelNO);

        //按月份取得SMT每週的產能資訊
        object getSMTCapacityByMon(string modelNO, string selectTime);

        //按周取得SMT每天的產能資訊
        object getSMTCapacityByWeekly(string modelNO, string selectTime);

        //取得SMT本年度12个月内稼动率
        object getSMTUptimeByYear(string modelNO, int isInvalid);

        //按月份取得SMT每週稼動率
        object getSMTUptimeByMon(string modelNO, string selectTime, int isInvalid);

        //按周取得SMT每天的稼動率
        object getSMTUptimeByWeek(string modelNO, string selectTime, int isInvalid);
    }
}
