using Dashboard_Mvc.Models;
using Dashboard_Mvc.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Dashboard_Mvc.Controllers
{
     [Authorize]
    public class FoxlinkSfcController : Controller
    {
        string results = "";
        private PackingService packService;
        private SMTService smtService;
        private TestService testService;
        public FoxlinkSfcController()
        {
            var unitOfWork = new UnitOfWork();
            packService = new PackingService(unitOfWork);
            smtService = new SMTService(unitOfWork);
            testService = new TestService(unitOfWork);

        }
        // GET: FoxlinkSfc
        public ActionResult Index()
        {
            return View();
        }
     
        public ActionResult ModelReport()
        {
            return View();
        }

        public ActionResult ModelLineStatus()
        {
            return View();
        }

        public ActionResult Shipment()
        {
            return View();
        }

        public ActionResult SolidGaugeOee()
        {
            return View();
        }

        public ActionResult LineOeeValue()
        {
            return View();
        }

        public ActionResult AllModelYearOEEValue()
        {
            return View();
        }

        public string getPackTotalCapacity(string modelNO, string timeInterval, bool isTotalCapacity)
        {
            results = packService.getPackTotalCapacity(modelNO, timeInterval, isTotalCapacity);
            return results;
        }

        public string getTotalCapacityByDate(string modelNO, string startDate, string endDate)
        {
            results = packService.getTotalCapacityByDate(modelNO, startDate, endDate);
            return results;
        }


        public string getReportTypeOptions(string modelNO, bool isSMTReport)
        {
            results = packService.getReportTypeOptions(modelNO, isSMTReport);
            return results;
        }

        public string getPackingSectionLineInfos(string modelNO, string timeInterval)
        {
            results = packService.getPackingSectionLineInfos(modelNO, timeInterval);
            return results;
        }

        public string getPackTotalProduction(string modelNO, string timeInterval)
        {
            results = packService.getPackTotalProduction(modelNO, timeInterval);
            return results;
        }


        public string getPackUPHByModelNO(string modelNO, string timeInterval)
        {
            results = packService.getPackUPHByModelNO(modelNO, timeInterval);
            return results;
        }

        public string getKSTaurusInStation(string modelNO)
        {
            results = packService.getKSTaurusInStation(modelNO);
            return results;
        }

        public string getKSTaurusLineNum(string modelNO)
        {
            results = packService.getKSTaurusLineNum(modelNO);
            return results;
        }

        public string getKSTaurusUPH(string modelNO)
        {
            results = packService.getKSTaurusUPH(modelNO);
            return results;
        }

        public string getShippingInfos(string modelNO, string startDate, string endDate)
        {
            results = packService.getShippingInfos(modelNO, startDate, endDate);
            return results;
        }

        public string getSMTOEEValue(string modelNO)
        {
            results = smtService.getSMTOEEValue(modelNO);
            return results;
        }

        public string getSMTLineStatus(string modelNO, string timeInterval)
        {
            results = smtService.getSMTLineStatus(modelNO, timeInterval);
            return results;
        }
        public string getSMTOEETrendChart(string modelNO, string timeInterval, bool isIntevalExclude)
        {
            results = smtService.getSMTOEETrendChart(modelNO, timeInterval, isIntevalExclude);
            return results;
        }

        public string getSMTTotalProduction(string modelNO, string timeInterval)
        {
            results = smtService.getSMTProduction(modelNO, timeInterval);
            return results;
        }

        public string getSMTTotalCapacity(string modelNO, string timeInterval, bool isTotalCapacity)
        {
            results = smtService.getSMTTotalCapacity(modelNO, timeInterval, isTotalCapacity);
            return results;
        }

        public string getSMTLineInfos(string modelNO, string timeInterval)
        {
            results = smtService.getSMTLineInfos(modelNO, timeInterval);
            return results;
        }

        public string getSMTOEEValueByInterval(string modelNO, string lineName, string startDate, string endDate)
        {
            results = smtService.getSMTOEEValueByInterval(modelNO, lineName, startDate, endDate);
            return results;
        }

        public string getSMTLineUPH(string modelNO, string lineID, string startDate, string endDate)
        {
            results = smtService.getSMTLineUPH(modelNO, lineID, startDate, endDate);
            return results;
        }

        public string getSMTLineOEEandUPH(string modelNO, string lineName, string lineID, string startDate, string endDate)
        {
            results = smtService.getSMTLineOEEandUPH(modelNO, lineName, lineID, startDate, endDate);
            return results;
        }

        public string getSMTUptimeByYear(string modelNO)
        {
            results = smtService.getSMTUptimeByYear(modelNO);
            return results;
        }

        public string getSMTUptimeByMon(string modelNO, string selectTime)
        {
            results = smtService.getSMTUptimeByMon(modelNO, selectTime);
            return results;
        }

        public string getSMTUptimeByWeek(string modelNO, string selectTime)
        {
            results = smtService.getSMTUptimeByWeek(modelNO, selectTime);
            return results;
        }
    }
}