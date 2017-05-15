using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Dashboard_Mvc.Repository;
using Dashboard_Mvc.Models;

namespace Dashboard_Mvc.Models
{
    public class TestService
    {
        private ITestRepository testRepository;
        private IUnitOfWork _unitWork;

        public TestService(IUnitOfWork unitOfWork)
        {
            _unitWork = unitOfWork;
            testRepository = new TestRepository(unitOfWork);
        }

        public string getTestCapacityByYear(string modelNO)
        {
            return testRepository.getTestCapacityByYear(modelNO).ToString();
        }

        public string getTestCapacityByMon(string modelNO, string selectTime)
        {
            return testRepository.getTestCapacityByMon(modelNO, selectTime).ToString();
        }

        public string getTestCapacityByWeekly(string modelNO, string selectTime)
        {
            return testRepository.getTestCapacityByWeekly(modelNO, selectTime).ToString();
        }
    }
}