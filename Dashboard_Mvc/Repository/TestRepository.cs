using Dashboard_Mvc.Models;
using log4net;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using Oracle.ManagedDataAccess.Client;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Web;
using Webdiyer.WebControls.Mvc;

namespace Dashboard_Mvc.Repository
{
  //  public class TestRepository : Repository<PACK_SECTION_TOTAL_CAPACITY>, ITestRepository
     public class TestRepository : Repository, ITestRepository
    {
        readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        #region 构造函数
        public TestRepository(IUnitOfWork unitOfWork)
       {
           this.dbContext = unitOfWork.Context;
           UnitOfWork = unitOfWork;
       }
        #endregion

        #region 取得测试站12个月内產能資訊
        public object getTestCapacityByYear(string modelNO)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    sSQL = "select A.WORK_DATE WORK_DATE,A.UPH,A.THROUGHOUT PASS_QTY,A.FIRST_PASS_YIELD YIELD_RATE " +
                           "from MESD.TEST_YEARLY_CAPACITY_BY_MONTH A " +
                           "where link_id = " +
                           "(select link_id " +
                           "from mesd.bg_model_link B " +
                           "where model_no=:modelNO)";
                    oraConn.Open();
                    using (OracleDataAdapter oraDA = new OracleDataAdapter())
                    {
                        using (OracleCommand oraCmd = dbContext.Database.Connection.CreateCommand() as OracleCommand)
                        {
                            oraCmd.CommandText = sSQL;
                          
                            oraCmd.Parameters.Add("@modelNO", OracleDbType.Char).Value = modelNO;
                            oraDA.SelectCommand = oraCmd;
                            oraDA.Fill(ds);
                            oraConn.Close();
                        }
                    }
                }
                results = JsonConvert.SerializeObject(ds);
            }
            catch (Exception ex)
            {
                logger.Error("取得TAURUS(KS) 近一个月的線體數量错误，原因", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 按月份取得测试站每週的產能資訊
        public object getTestCapacityByMon(string modelNO, string selectTime)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_TEST_WEEKLY_CAPACITY";

            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    oraConn.Open();
                    using (OracleDataAdapter oraDA = new OracleDataAdapter())
                    {
                        using (OracleCommand oraCmd = dbContext.Database.Connection.CreateCommand() as OracleCommand)
                        {
                            oraCmd.CommandText = sSQL;
                          
                            oraCmd.CommandType = CommandType.StoredProcedure;
                            oraCmd.Parameters.Add(new OracleParameter("SELECT_MONTH", OracleDbType.Varchar2)).Value = selectTime;
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_CODE", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_PACK_CAPA", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_MONTH"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_PACK_CAPA"].Direction = ParameterDirection.Output;
                            oraDA.SelectCommand = oraCmd;
                            oraDA.Fill(ds);
                            oraConn.Close();
                        }
                    }
                }
                results = JsonConvert.SerializeObject(ds);
            }
            catch (Exception ex)
            {
                logger.Error("按月份取得测试站每週的產能資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 按周取得測試站每天的產能資訊
        public object getTestCapacityByWeekly(string modelNO, string selectTime)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_TEST_DAILY_CAPA_OF_WEEK";

            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    oraConn.Open();
                    using (OracleDataAdapter oraDA = new OracleDataAdapter())
                    {
                        using (OracleCommand oraCmd = dbContext.Database.Connection.CreateCommand() as OracleCommand)
                        {
                            oraCmd.CommandText = sSQL;
                          
                            oraCmd.CommandType = CommandType.StoredProcedure;
                            oraCmd.Parameters.Add(new OracleParameter("SELECT_WEEK", OracleDbType.Varchar2)).Value = selectTime;
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_CODE", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_PACK_CAPA", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_WEEK"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_PACK_CAPA"].Direction = ParameterDirection.Output;
                            oraDA.SelectCommand = oraCmd;
                            oraDA.Fill(ds);
                            oraConn.Close();
                        }
                    }
                }
                results = JsonConvert.SerializeObject(ds);
            }
            catch (Exception ex)
            {
                logger.Error("按月份取得测试站每週的產能資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion   
    }
}

