using Dashboard_Mvc.Models;
using Dashboard_Mvc.Repository;
using System.Web.Mvc;

namespace IdentitySample.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        string results = "";
        private TestService testService;
        private SMTService smtService;
        private PackingService packingService;
        public HomeController()
        {
            var unitOfWork = new UnitOfWork();
            testService = new TestService(unitOfWork);
            smtService = new SMTService(unitOfWork);
            packingService = new PackingService(unitOfWork);
        }

        public ActionResult Index()
        {
            return View();
        }

        public string getTestCapacityByYear(string modelNO)
        {
            results = testService.getTestCapacityByYear(modelNO);
            return results;
        }

        public string getSMTCapacityByYear(string modelNO)
        {
            results = smtService.getSMTCapacityByYear(modelNO);
            return results;
        }

        public string getPackShipmentByYear(string modelNO)
        {
            results = packingService.getPackShipmentByYear(modelNO);
            return results;
        }

        public string getPackLineNumByYear(string modelNO)
        {
            results = packingService.getPackLineNumByYear(modelNO);
            return results;
        }

        public string getSMTUptimeInvalidByYear(string modelNO)
        {
            results = smtService.getSMTUptimeInvalidByYear(modelNO);
            return results;
        }
        public string getSMTUptimeByYear(string modelNO)
        {
            results = smtService.getSMTUptimeByYear(modelNO);
            return results;
        }

        public ActionResult ModelRealTimeByMonOrWeek()
        {
            return View();
        }

        public string getTestCapacityByMon(string modelNO, string selectTime)
        {
            results =testService.getTestCapacityByMon(modelNO,selectTime);
            return results;
        }
        public string getTestCapacityByWeekly(string modelNO, string selectTime)
        {
            results = testService.getTestCapacityByWeekly(modelNO, selectTime);
            return results;
        }

        public string getSMTCapacityByMon(string modelNO, string selectTime)
        {
            results = smtService.getSMTCapacityByMon(modelNO, selectTime);
            return results;
        }

        public string getSMTCapacityByWeekly(string modelNO, string selectTime)
        {
            results = smtService.getSMTCapacityByWeekly(modelNO, selectTime);
            return results;
        }

        public string getPackShipmentByMon(string modelNO, string selectTime)
        {
            results = packingService.getPackShipmentByMon(modelNO, selectTime);
            return results;
        }

        public string getPackShipmentByWeekly(string modelNO, string selectTime)
        {
            results = packingService.getPackShipmentByWeekly(modelNO, selectTime);
            return results;
        }

        public string getPackLineNumByMon(string modelNO, string selectTime)
        {
            results = packingService.getPackLineNumByMon(modelNO, selectTime);
            return results;
        }

        public string getPackLineNumByWeekly(string modelNO, string selectTime)
        {
            results = packingService.getPackLineNumByWeekly(modelNO, selectTime);
            return results;
        }

        [Authorize]
        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
