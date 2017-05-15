using Dashboard_Mvc.Models;
using log4net;
using Newtonsoft.Json;
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
    //public class SMTRepository : Repository<PACK_SECTION_TOTAL_CAPACITY>, ISMTRepository
    public class SMTRepository : Repository, ISMTRepository
    
    {
        readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        #region 构造函数
        public SMTRepository(IUnitOfWork unitOfWork)
       {
           this.dbContext = unitOfWork.Context;
           UnitOfWork = unitOfWork;

       }
        #endregion

        #region SMT 總產能
        public object getSMTTotalCapacity(string modelNO, string timeInterval, bool isTotalCapacity)
        {
            string sSQL = "FOXLINKSFC.get_smt_total_capacity", results = "";
            DataSet ds = new DataSet();
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("TIME_INTERVAL", OracleDbType.Varchar2)).Value = timeInterval;
                            //當isTotalCapacity 為 true，表示取得總產量;反之，則取得檢測站實際產出(不含重工)
                            if (isTotalCapacity)
                                oraCmd.Parameters.Add(new OracleParameter("IS_TOTAL_CAPACITY", OracleDbType.Int32)).Value = 1;
                            else
                                oraCmd.Parameters.Add(new OracleParameter("IS_TOTAL_CAPACITY", OracleDbType.Int32)).Value = 0;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_TOTAL_CAPACITY", OracleDbType.RefCursor));
                            oraCmd.Parameters["TIME_INTERVAL"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["IS_TOTAL_CAPACITY"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_TOTAL_CAPACITY"].Direction = ParameterDirection.Output;
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
                logger.Error("取得SMT 總產能發生錯誤，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region SMT 線體資訊
        public object getSMTLineInfos(string modelNO, string timeInterval)
        {
            string sSQL = "FOXLINKSFC.get_smt_line_infos", results = "";
            DataSet ds = new DataSet();
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("TIME_INTERVAL", OracleDbType.Varchar2)).Value = timeInterval;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_LINE_INFOS", OracleDbType.RefCursor));
                            oraCmd.Parameters["TIME_INTERVAL"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_LINE_INFOS"].Direction = ParameterDirection.Output;
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
                logger.Error("取得SMT工段線體資訊發生錯誤，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region SMT 總過帳量
        public object getSMTTotalProduction(string modelNO, string timeInterval)
        {
            string sSQL = "FOXLINKSFC.get_smt_total_prod_amount", results = "";
            DataSet ds = new DataSet();
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("TIME_INTERVAL", OracleDbType.Varchar2)).Value = timeInterval;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_PRODUCTION_AMOUNTS", OracleDbType.RefCursor));
                            oraCmd.Parameters["TIME_INTERVAL"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_PRODUCTION_AMOUNTS"].Direction = ParameterDirection.Output;
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
                logger.Error("取得 SMT 總過帳量發生錯誤，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region SMT UPH
        public object getSMTUPHByModelNO(string modelNO, string timeInterval)
        {
            throw new NotImplementedException();
        }
        #endregion

        #region SMT 稼動率(前一天)
        public object getSMTOEEValue(string modelNO)
        {
            string sSQL = "FOXLINKSFC.GET_SMT_SECTION_EQUIP_OEE", results = "";
            DataSet ds = new DataSet();
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_OEE_VALUES", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_OEE_VALUES"].Direction = ParameterDirection.Output;
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
                logger.Error("取得SMT 稼動率(前一天)，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 列出該機種所有SMT線的稼動情況(有幾條線、稼動率大於85%、稼動率介於60%至85%、稼動率小於60%)
        public object getSMTLineStatus(string modelNO, string timeInterval)
        {
            string sSQL = "FOXLINKSFC.GET_SMT_SECTION_LINE_STATUS", results = "";
            DataSet ds = new DataSet();
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_LINE_STATUS", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_LINE_STATUS"].Direction = ParameterDirection.Output;
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
                logger.Error("列出該機種所有SMT線的稼動情況發生錯誤，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得對應機種某條SMT線的稼動率 (可依據時間進行搜尋)
        /*
         * 注意，Procedure內不包含一個月的稼動率SQL
         * 若要查詢近一個月的稼動率，請填入起始時間 及 結束時間
         */
        public object getSMTOEEValueByInterval(string modelNO, string lineName, string startDate, string endDate)
        {
            string sSQL = "FOXLINKSFC.get_smt_equip_oee_interval", results = "";
            DataSet ds = new DataSet();
            DateTime starDateTime = DateTime.ParseExact(startDate, "yyyy/MM/dd", null);
            DateTime endDateTime = DateTime.ParseExact(endDate, "yyyy/MM/dd", null);
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("LINE_NAME", OracleDbType.Varchar2)).Value = lineName;
                            oraCmd.Parameters.Add(new OracleParameter("START_DATE", OracleDbType.Date)).Value = starDateTime;
                            oraCmd.Parameters.Add(new OracleParameter("END_DATE", OracleDbType.Date)).Value = endDateTime;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_OEE_VALUES", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["LINE_NAME"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["START_DATE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["END_DATE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_OEE_VALUES"].Direction = ParameterDirection.Output;
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
                logger.Error("取得對應機種某條SMT線的稼動率發生錯誤，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得SMT工段各線體的UPH
        public object getSMTLineUPH(string modelNO, string lineID, string startDate, string endDate)
        {
            string sSQL = "FOXLINKSFC.get_smt_line_uph", results = "";
            DataSet ds = new DataSet();
            DateTime starDateTime = DateTime.ParseExact(startDate, "yyyy/MM/dd", null);
            DateTime endDateTime = DateTime.ParseExact(endDate, "yyyy/MM/dd", null);

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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("LINE_ID", OracleDbType.Varchar2)).Value = lineID;
                            oraCmd.Parameters.Add(new OracleParameter("START_DATE", OracleDbType.Date)).Value = starDateTime;
                            oraCmd.Parameters.Add(new OracleParameter("END_DATE", OracleDbType.Date)).Value = endDateTime;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_LINE_UPH_VALUES", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["LINE_ID"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["START_DATE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["END_DATE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_LINE_UPH_VALUES"].Direction = ParameterDirection.Output;
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
                logger.Error("取得SMT工段各線體的UPH,原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得SMT Line 機台稼動率 及 UPH
        public object getSMTLineOEEandUPH(string modelNO, string lineName, string lineID, string startDate, string endDate)
        {
            string sSQL = "FOXLINKSFC.get_smt_line_oee_uph", results = "";
            DataSet ds = new DataSet();
            DateTime starDateTime = DateTime.ParseExact(startDate, "yyyy/MM/dd", null);
            DateTime endDateTime = DateTime.ParseExact(endDate, "yyyy/MM/dd", null);
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("LINE_NAME", OracleDbType.Varchar2)).Value = lineName;
                            oraCmd.Parameters.Add(new OracleParameter("LINE_ID", OracleDbType.Varchar2)).Value = lineID;
                            oraCmd.Parameters.Add(new OracleParameter("START_DATE", OracleDbType.Date)).Value = starDateTime;
                            oraCmd.Parameters.Add(new OracleParameter("END_DATE", OracleDbType.Date)).Value = endDateTime;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_LINE_OEE_UPH_VALUES", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["LINE_NAME"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["LINE_ID"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["START_DATE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["END_DATE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_LINE_OEE_UPH_VALUES"].Direction = ParameterDirection.Output;
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
                logger.Error("取得SMT Line 機台稼動率 及 UPH，原因:", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得SMT Line 稼動率Trend Chart
        public object getSMTOEETrendChart(string modelNO, string timeInterval, Boolean isIntevalExclude)
        {
            string sSQL = "", results = "";
            if (isIntevalExclude)
            {
                sSQL = "FOXLINKSFC.GET_OVERVIEW_SMT_OEE_EXCLUDE";
            }
            else
            {
                sSQL = "FOXLINKSFC.get_overview_smt_section_oee";
            }
            DataSet ds = new DataSet();
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("TIME_INTERVAL", OracleDbType.Varchar2)).Value = timeInterval;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_OEE_VALUES", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["TIME_INTERVAL"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_OEE_VALUES"].Direction = ParameterDirection.Output;
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
                logger.Error("取得SMT Line 稼動率Trend Chart發生錯誤，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得SMT12内產能資訊(產出、良率)
        public object getSMTCapacity_12HR(string modelNO)
        {
            string sSQL = "", results = "";


            sSQL = "MESD.GET_SMT_CAPA_PAST_12HR";

            DataSet ds = new DataSet();
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_CODE", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_CAPA", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_CAPA"].Direction = ParameterDirection.Output;
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
                logger.Error("取得SMT 12小时内總產量資訊失敗，請檢查Procedure，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得SMT12内UPH
        public object getSMTUPH_12HR(string modelNO)
        {
            string sSQL = "", results = "";


            sSQL = "MESD.GET_SMT_UPH_PAST_12HR";

            DataSet ds = new DataSet();
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_CODE", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_UPH", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_UPH"].Direction = ParameterDirection.Output;
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
                logger.Error("取得SMT 12小时内UPH資訊失敗，請檢查Procedure，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion


        #region 取得SMT當前的OEE
        public object getSMTCurrentOee(string modelNO)
        {
            string sSQL = "", results = "";


            sSQL = "MESD.GET_SMT_CURRENT_UPTIME";

            DataSet ds = new DataSet();
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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_CODE", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_UPTIME", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_UPTIME"].Direction = ParameterDirection.Output;
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
                logger.Error("取得SMT 當前稼動率資訊失敗，請檢查Procedure，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得SMT12个月内產能資訊
        public object getSMTCapacityByYear(string modelNO)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_SMT_MONTHLY_CAPA_OF_YEAR";

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
                            oraCmd.Parameters.Add(new OracleParameter("MODEL_CODE", OracleDbType.Varchar2)).Value = modelNO;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_CAPA", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_CAPA"].Direction = ParameterDirection.Output;
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


        #region 按月份取得SMT每週的產能資訊
        public object getSMTCapacityByMon(string modelNO, string selectTime)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_SMT_WEEKLY_CAPACITY";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_CAPA", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_MONTH"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_CAPA"].Direction = ParameterDirection.Output;
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
                logger.Error("按月份取得PACK每週的產能資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 按周取得SMT每天的產能資訊
        public object getSMTCapacityByWeekly(string modelNO, string selectTime)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_SMT_DAILY_CAPA_OF_WEEK";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SMT_CAPA", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_WEEK"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SMT_CAPA"].Direction = ParameterDirection.Output;
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
                logger.Error("按月份取得PACK每週的產能資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得SMT本年度12个月内稼动率
        public object getSMTUptimeByYear(string modelNO, int isInvalid)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    if (isInvalid == 0)
                    {
                        sSQL = "select A.WORK_DATE,A.AVG_UPTIME " +
                               "from MESD.SMT_YEARLY_UPTIME_W_INVALID A " +
                               "where link_id = " +
                               "(select link_id " +
                               "from mesd.bg_model_link B " +
                               "where model_no=:modelNO)";
                    }
                    else
                    {
                        sSQL = "select A.WORK_DATE,A.AVG_UPTIME " +
                               "from MESD.SMT_YEARLY_UPTIME_WO_INVALID A " +
                               "where link_id = " +
                               "(select link_id " +
                               "from mesd.bg_model_link B " +
                               "where model_no=:modelNO)";
                    }
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


        #region 按月份取得SMT每週稼動率
        public object getSMTUptimeByMon(string modelNO, string selectTime, int isInvalid)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_SMT_WEEKLY_UPTIME";

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
                            oraCmd.Parameters.Add(new OracleParameter("INCLUDE_INVALID_MACHINE", OracleDbType.Int32)).Value = isInvalid;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_UPTIME", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_MONTH"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["INCLUDE_INVALID_MACHINE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_UPTIME"].Direction = ParameterDirection.Output;
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
                logger.Error("按月份取得SMT每週的產能資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 按周取得SMT每天的稼動率
        public object getSMTUptimeByWeek(string modelNO, string selectTime, int isInvalid)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_SMT_DAILY_UPTIME_OF_WEEK";

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
                            oraCmd.Parameters.Add(new OracleParameter("INCLUDE_INVALID_MACHINE", OracleDbType.Int32)).Value = isInvalid;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_UPTIME", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_WEEK"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["INCLUDE_INVALID_MACHINE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_UPTIME"].Direction = ParameterDirection.Output;
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
                logger.Error("按月份取得PACK每週的產能資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion      

    }
}

