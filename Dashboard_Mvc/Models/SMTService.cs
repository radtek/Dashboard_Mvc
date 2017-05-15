using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Dashboard_Mvc.Repository;
using Dashboard_Mvc.Models;

namespace Dashboard_Mvc.Models
{
    public class SMTService
    {
        private ISMTRepository smtRepository;
        private IUnitOfWork _unitWork;

        public SMTService(IUnitOfWork unitOfWork)
        {
            _unitWork = unitOfWork;
            smtRepository = new SMTRepository(unitOfWork);
        }

        public string getSMTTotalCapacity(string modelNO, string timeInterval, bool isTotalCapacity)
        {
            return smtRepository.getSMTTotalCapacity(modelNO, timeInterval, isTotalCapacity).ToString();
        }

        public string getSMTLineInfos(string modelNO, string timeInterval)
        {
            return smtRepository.getSMTLineInfos(modelNO, timeInterval).ToString();
        }

        public string getSMTProduction(string modelNO, string timeInterval)
        {
            return smtRepository.getSMTTotalProduction(modelNO, timeInterval).ToString();
        }

        public string getSMTUPHByModelNO(string modelNO, string timeInterval)
        {
            return smtRepository.getSMTUPHByModelNO(modelNO, timeInterval).ToString();
        }

        public string getSMTOEEValue(string modelNO)
        {
            return smtRepository.getSMTOEEValue(modelNO).ToString();
        }

        public string getSMTLineStatus(string modelNO, string timeInterval)
        {
            return smtRepository.getSMTLineStatus(modelNO, timeInterval).ToString();
        }

        public string getSMTOEEValueByInterval(string modelNO, string lineName, string startDate, string endDate)
        {
            return smtRepository.getSMTOEEValueByInterval(modelNO, lineName, startDate, endDate).ToString();
        }

        public string getSMTLineUPH(string modelNO, string lineID, string startDate, string endDate)
        {
            return smtRepository.getSMTLineUPH(modelNO, lineID, startDate, endDate).ToString();
        }

        public string getSMTLineOEEandUPH(string modelNO, string lineName, string lineID, string startDate, string endDate)
        {
            return smtRepository.getSMTLineOEEandUPH(modelNO, lineName, lineID, startDate, endDate).ToString();
        }

        public string getSMTOEETrendChart(string modelNO, string timeInterval, Boolean isIntevalExclude)
        {
            return smtRepository.getSMTOEETrendChart(modelNO, timeInterval, isIntevalExclude).ToString();
        }

        public string getSMTCapacity_12HR(string modelNO)
        {
            return smtRepository.getSMTCapacity_12HR(modelNO).ToString();
        }

        public string getSMTUPH_12HR(string modelNO)
        {
            return smtRepository.getSMTUPH_12HR(modelNO).ToString();
        }

        public string getSMTCurrentOee(string modelNO)
        {
            return smtRepository.getSMTCurrentOee(modelNO).ToString();
        }

        public string getSMTCapacityByYear(string modelNO)
        {
            return smtRepository.getSMTCapacityByYear(modelNO).ToString();
        }

        public string getSMTCapacityByMon(string modelNO, string selectTime)
        {
            return smtRepository.getSMTCapacityByMon(modelNO, selectTime).ToString();
        }

        public string getSMTCapacityByWeekly(string modelNO, string selectTime)
        {
            return smtRepository.getSMTCapacityByWeekly(modelNO, selectTime).ToString();
        }

        #region 獲得機種SMT12个月稼動率(包含無效機台)
        public string getSMTUptimeInvalidByYear(string modelNO)
        {
            int isInvalid = 0;
            return smtRepository.getSMTUptimeByYear(modelNO, isInvalid).ToString();           
        }
        #endregion

        #region 獲得機種SMT12个月稼動率(不包含無效機台)     
        public string getSMTUptimeByYear(string modelNO)
        {
            int isInvalid = 1;
            return smtRepository.getSMTUptimeByYear(modelNO, isInvalid).ToString();
        }
        #endregion

        #region 按月取得機種的周稼動率(不包含無效機台)     
        public string getSMTUptimeByMon(string modelNO, string selectTime)
        {
            int isInvalid = 1;
            return smtRepository.getSMTUptimeByMon(modelNO, selectTime, isInvalid).ToString();
        }
        #endregion

        #region 按月取得機種的周稼動率(包含無效機台)
        public string getSMTUptimeInvalidByMon(string modelNO, string selectTime)
        {
            int isInvalid = 0;
            return smtRepository.getSMTUptimeByMon(modelNO, selectTime, isInvalid).ToString();
        }
        #endregion

        #region 按周取得機種的每天稼動率(不包含無效機台)
        public string getSMTUptimeByWeek(string modelNO, string selectTime)
        {
            int isInvalid = 1;
            return smtRepository.getSMTUptimeByWeek(modelNO, selectTime, isInvalid).ToString();
        }
        #endregion

        #region 按周取得機種的每天稼動率(包含無效機台)    
        public string getSMTUptimeInvalidByWeek(string modelNO, string selectTime)
        {
            int isInvalid = 0;
            return smtRepository.getSMTUptimeByWeek(modelNO, selectTime, isInvalid).ToString();
        }
        #endregion

    }
}