using Dashboard_Mvc.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Webdiyer.WebControls.Mvc;

namespace Dashboard_Mvc.Repository
{
    //public interface IPackingRepository : IRepository<PACK_SECTION_TOTAL_CAPACITY>
        public interface IPackingRepository 
        {
        //總產量

        object getPackTotalCapacity(string modelNo, string timeInterval, bool isTotalCapacity);
        //總產量(給定起始與結束時間)
        object getTotalCapacityByDate(string modelNO, string startDate, string endDate);
        //線體數
        object getPackingSectionLineInfos(string modelNO, string timeInterval);
        //包裝站總過賬量
        object getPackTotalProduction(string modelNO, string timeInterval);
        //UPH
        object getPackUPHByModelNO(string modelNO, string timeInterval);
        //出貨資訊
        object getShippingInfos(string modelNO, string startDate, string endDate);
        //取得SMT12内產能資訊(產出、良率)
        object getPackUPH_12HR(string modelNO);

        //Pack近七天產量和良率
        object getPackCapaRate();

        //取得TAURUS(KS) 近一个月的線體數量
        object getKSTaurusLineNum(string modelNO);

        //取得TAURUS(KS) 近一个月的产量和良率
        object getKSTaurusCapaRate(string modelNO);

        //取得TAURUS(KS) 近一个月通过各IN站的产量
        object getKSTaurusInStation(string modelNO);

        //取得TAURUS(KS) 近一个月UPH
        object getKSTaurusUPH(string modelNO);
    
        //取得機種包裝站本年度12个月出貨量
        object getPackShipmentByYear(string modelNO);

        //按月取得PACK周出貨量
        object getPackShipmentByMon(string modelNO, string selectTime);

        //按周取得PACK每天的出貨量
        object getPackShipmentByWeekly(string modelNO, string selectTime);

        //取得機種包裝站本年度12个月開線線體數
        object getPackLineNumByYear(string modelNO);

        //按月取得PACK周開線線體數
        object getPackLineNumByMon(string modelNO, string selectTime);

        //按周取得PACK每天的開線線體數
        object getPackLineNumByWeekly(string modelNO, string selectTime);

        //Pack近七天產量(HeatMap测试用)
        object getPackCapaAsHeatmapData();

        // 取得報表類型
        string getReportTypeOptions(string modelNO, bool isSMTReport);
    }
}
