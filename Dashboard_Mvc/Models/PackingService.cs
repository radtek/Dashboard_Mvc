using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Dashboard_Mvc.Repository;
using Dashboard_Mvc.Models;

namespace Dashboard_Mvc.Models
{
    public class PackingService
    {
        private IPackingRepository packRepository;
        private IUnitOfWork _unitWork;

        public PackingService(IUnitOfWork unitOfWork)
        {
            _unitWork = unitOfWork;
            packRepository = new PackingRepository(unitOfWork);
        }

        public string getPackTotalCapacity(string modelNO, string timeInterval, bool isTotalCapacity)
        {
            return packRepository.getPackTotalCapacity(modelNO, timeInterval, isTotalCapacity).ToString();
        }

        public string getTotalCapacityByDate(string modelNO, string startDate, string endDate)
        {
            return packRepository.getTotalCapacityByDate(modelNO, startDate, endDate).ToString();
        }

        public string getPackingSectionLineInfos(string modelNO, string timeInterval)
        {
            return packRepository.getPackingSectionLineInfos(modelNO, timeInterval).ToString();
        }

        public string getPackTotalProduction(string modelNO, string timeInterval)
        {
            return packRepository.getPackTotalProduction(modelNO, timeInterval).ToString();
        }

        public string getPackUPHByModelNO(string modelNO, string timeInterval)
        {
            return packRepository.getPackUPHByModelNO(modelNO, timeInterval).ToString();
        }

        public string getShippingInfos(string modelNO, string startDate, string endDate)
        {
            return packRepository.getShippingInfos(modelNO, startDate, endDate).ToString();
        }

        public string getPackUPH_12HR(string modelNO)
        {
            return packRepository.getPackUPH_12HR(modelNO).ToString();
        }

        public string getPackCapaRate()
        {
            return packRepository.getPackCapaRate().ToString();
        }

        public string getKSTaurusLineNum(string modelNO)
        {
            return packRepository.getKSTaurusLineNum(modelNO).ToString();
        }

        public string getKSTaurusCapaRate(string modelNO)
        {
            return packRepository.getKSTaurusCapaRate(modelNO).ToString();
        }

        public string getKSTaurusInStation(string modelNO)
        {
            return packRepository.getKSTaurusInStation(modelNO).ToString();
        }

        public string getKSTaurusUPH(string modelNO)
        {
            return packRepository.getKSTaurusUPH(modelNO).ToString();
        }

        public string getPackShipmentByYear(string modelNO)
        {
            return packRepository.getPackShipmentByYear(modelNO).ToString();
        }

        public string getPackShipmentByMon(string modelNO, string selectTime)
        {
            return packRepository.getPackShipmentByMon(modelNO, selectTime).ToString();
        }

        public string getPackShipmentByWeekly(string modelNO, string selectTime)
        {
            return packRepository.getPackShipmentByWeekly(modelNO, selectTime).ToString();
        }

        public string getPackLineNumByYear(string modelNO)
        {
            return packRepository.getPackLineNumByYear(modelNO).ToString();
        }

        public string getPackLineNumByMon(string modelNO, string selectTime)
        {
            return packRepository.getPackLineNumByMon(modelNO, selectTime).ToString();
        }

        public string getPackLineNumByWeekly(string modelNO, string selectTime)
        {
            return packRepository.getPackLineNumByWeekly(modelNO, selectTime).ToString();
        }

        public string getPackCapaAsHeatmapData()
        {
            return packRepository.getPackCapaAsHeatmapData().ToString();
        }

        public string getReportTypeOptions(string modelNO, bool isSMTReport)
        {
            return packRepository.getReportTypeOptions(modelNO, isSMTReport).ToString();
        }

    }
}