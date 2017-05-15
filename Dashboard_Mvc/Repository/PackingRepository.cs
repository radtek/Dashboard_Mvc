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
    //public class PackingRepository : Repository<PACK_SECTION_TOTAL_CAPACITY>, IPackingRepository
    public class PackingRepository : Repository, IPackingRepository
    {
        readonly ILog logger = LogManager.GetLogger(System.Reflection.MethodBase.GetCurrentMethod().DeclaringType);

        #region 构造函数
        public PackingRepository(IUnitOfWork unitOfWork)
       {
           this.dbContext = unitOfWork.Context;
           UnitOfWork = unitOfWork;
       }
        #endregion

        #region 總產量
        public object getPackTotalCapacity(string modelNO, string timeInterval, bool isTotalCapacity)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            switch (modelNO)
            {
                case "A/S":
                case "Arya":
                case "Sansa":
                    sSQL = "foxlinksfc.get_as_total_pack_capacity";
                    break;

                case "H/M":
                case "Hermes":
                case "Mercury":
                    sSQL = "foxlinksfc.get_hm_new_pack_capacity";
                    break;
                case "Excalibur":
                    sSQL = "foxlinksfc.get_exca_total_pack_capacity";
                    break;
                case "Taurus":
                    sSQL = "foxlinksfc.get_taurus_pack_capacity";
                    break;
                default:
                    sSQL = "foxlinksfc.get_b9_total_pack_capacity";
                    break;
            }

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
                            if (modelNO.Equals("Excalibur") || modelNO.Equals("Taurus") || modelNO.Equals("B9"))
                            {
                                oraCmd.Parameters.Add(new OracleParameter("TIME_INTERVAL", OracleDbType.Varchar2)).Value = timeInterval;
                                //isTotalCapacity 為 1 表示取得總產量 ; isTotalCapacity為 0 表示取得包裝產實際產出
                                if (isTotalCapacity)
                                    oraCmd.Parameters.Add(new OracleParameter("IS_TOTAL_CAPACITY", OracleDbType.Int32)).Value = 1;
                                else
                                    oraCmd.Parameters.Add(new OracleParameter("IS_TOTAL_CAPACITY", OracleDbType.Int32)).Value = 0;
                                oraCmd.Parameters.Add(new OracleParameter("CUR_CAPACITY_RESULTS", OracleDbType.RefCursor));
                                oraCmd.Parameters["TIME_INTERVAL"].Direction = ParameterDirection.Input;
                                oraCmd.Parameters["IS_TOTAL_CAPACITY"].Direction = ParameterDirection.Input;
                                oraCmd.Parameters["CUR_CAPACITY_RESULTS"].Direction = ParameterDirection.Output;
                            }
                            else if (modelNO.Equals("H/M") || modelNO.Equals("Hermes") || modelNO.Equals("Mercury"))
                            {
                                oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                                oraCmd.Parameters.Add(new OracleParameter("TIME_INTERVAL", OracleDbType.Varchar2)).Value = timeInterval;
                                oraCmd.Parameters.Add(new OracleParameter("CUR_CAPACITY_RESULTS", OracleDbType.RefCursor));
                                oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                                oraCmd.Parameters["TIME_INTERVAL"].Direction = ParameterDirection.Input;
                                oraCmd.Parameters["CUR_CAPACITY_RESULTS"].Direction = ParameterDirection.Output;
                            }
                            else
                            {
                                //A/S  Arya Sansa
                                oraCmd.Parameters.Add(new OracleParameter("TIME_INTERVAL", OracleDbType.Varchar2)).Value = timeInterval;
                                oraCmd.Parameters.Add(new OracleParameter("MODEL_NO", OracleDbType.Varchar2)).Value = modelNO;
                                oraCmd.Parameters.Add(new OracleParameter("CUR_CAPACITY_RESULTS", OracleDbType.RefCursor));
                                oraCmd.Parameters["TIME_INTERVAL"].Direction = ParameterDirection.Input;
                                oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                                oraCmd.Parameters["CUR_CAPACITY_RESULTS"].Direction = ParameterDirection.Output;
                            }

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
                logger.Error("取得總產量資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 線體數
        public object getPackingSectionLineInfos(string modelNO, string timeInterval)
        {
            string sSQL = "foxlinksfc.get_pack_section_line_infos";
            DataSet ds = new DataSet();
            string results = "";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_PACK_SECTION_LINE_INFOS", OracleDbType.RefCursor));
                            oraCmd.Parameters["TIME_INTERVAL"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_PACK_SECTION_LINE_INFOS"].Direction = ParameterDirection.Output;
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
                logger.Error("取得包裝線體數發生錯誤，原因:", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 包裝站總過賬量
        public object getPackTotalProduction(string modelNO, string timeInterval)
        {
            string sSQL = "FOXLINKSFC.GET_PACK_TOTAL_PRODUCTION", results = "";
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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_PRODUCTION_AMOUNTS", OracleDbType.RefCursor));
                            oraCmd.Parameters["TIME_INTERVAL"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_NO"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_PRODUCTION_AMOUNTS"].Direction = ParameterDirection.Output;
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
                logger.Error("取得包裝站總過站量發生錯誤，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region UPH
        /*
           由於目前包裝站的UPH只有Taurus有做，因此只列出Taurus包裝站的UPH
         * 若之後其他機種要導入，後續再增加即可
         */
        public object getPackUPHByModelNO(string modelNO, string timeInterval)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();

            switch (timeInterval)
            {
                case "2Week":
                    sSQL = "select b.data_time work_date, nvl(a.pack_qty,0) packing_qty from (select work_date, ROUND(SUM (pass_qty)/24,0) pack_qty  from SAJET.G_SN_COUNT@TAURUS where work_date between TO_CHAR ( (SYSDATE - 14), 'yyyymmdd') and to_char(sysdate,'yyyymmdd') and process_id=100025  group by work_date order by 1)a right join (select to_char(sysdate-rownum+1,'yyyymmdd') data_time from dual connect by level<=14) b on a.work_date=b.data_time order by b.data_time";
                    break;
                case "1Month":
                    sSQL = "select b.data_time work_date, nvl(a.pack_qty,0) packing_qty from (select work_date, ROUND(SUM (pass_qty)/24,0) pack_qty  from SAJET.G_SN_COUNT@TAURUS where work_date between TO_CHAR ( (SYSDATE - 30), 'yyyymmdd') and to_char(sysdate,'yyyymmdd') and process_id=100025  group by work_date order by 1)a right join (select to_char(sysdate-rownum+1,'yyyymmdd') data_time from dual connect by level<=30) b on a.work_date=b.data_time order by b.data_time";
                    break;
                default:
                    //1Week
                    sSQL = "select b.data_time work_date, nvl(a.pack_qty,0) packing_qty from (select work_date, ROUND(SUM (pass_qty)/24,0) pack_qty  from SAJET.G_SN_COUNT@TAURUS where work_date between TO_CHAR ( (SYSDATE - 7), 'yyyymmdd') and to_char(sysdate,'yyyymmdd') and process_id=100025  group by work_date order by 1)a right join (select to_char(sysdate-rownum+1,'yyyymmdd') data_time from dual connect by level<=7) b on a.work_date=b.data_time order by b.data_time";
                    break;
            }

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
                logger.Error("取得包裝站UPH發生錯誤，原因: ", ex);
            }

            return results.ToString();
        }
        #endregion

        #region 出貨
        public object getShippingInfos(string modelNO, string startDate, string endDate)
        {
            System.Environment.SetEnvironmentVariable("NLS_LANG", "AMERICAN_AMERICA.ZHT16BIG5");
            string cmdText = "", results = "";
            DataSet ds = new DataSet();
            switch (modelNO)
            {
                case "A/S":
                    cmdText = "FOXLINKSFC.GET_AS_NEW_SHIPPING_INFOS";
                    break;
                case "H/M":
                    cmdText = "FOXLINKSFC.GET_HM_NEW_SHIPPING_INFOS";
                    break;
                case "Excalibur":
                    cmdText = "FOXLINKSFC.GET_Excalibur_SHIPPING_INFOS";
                    break;
                case "Taurus":
                    cmdText = "FOXLINKSFC.GET_TAURUS_NEW_SHIPPING_INFOS";
                    break;
                case "Austin":
                    cmdText = "FOXLINKSFC.GET_AUSTIN_SHIPPING_INFOS";
                    break;
                default:
                    //B9
                    cmdText = "FOXLINKSFC.GET_B9_NEW_SHIPPING_INFOS";
                    break;
            }
            try
            {
                using (var con = dbContext.Database.Connection)
                {
                    DateTime starDateTime = DateTime.ParseExact(startDate, "yyyy/MM/dd", null);
                    DateTime endDateTime = DateTime.ParseExact(endDate, "yyyy/MM/dd", null);
                    con.Open();
                    /*OracleGlobalization info = con.GetSessionInfo();
                    info.Language = ".ZHT16BIG5";*/
                    OracleDataAdapter da = new OracleDataAdapter();
                    OracleCommand cmd = dbContext.Database.Connection.CreateCommand() as OracleCommand;
                    cmd.CommandText = cmdText;
                    cmd.CommandType = CommandType.StoredProcedure;
                    cmd.Parameters.Add(new OracleParameter("START_DATE", OracleDbType.Date)).Value = starDateTime;
                    cmd.Parameters.Add(new OracleParameter("END_DATE", OracleDbType.Date)).Value = endDateTime;
                    cmd.Parameters.Add(new OracleParameter("CUR_SHIP_RESULTS", OracleDbType.RefCursor));
                    cmd.Parameters["START_DATE"].Direction = ParameterDirection.Input;
                    cmd.Parameters["END_DATE"].Direction = ParameterDirection.Input;
                    cmd.Parameters["CUR_SHIP_RESULTS"].Direction = ParameterDirection.Output;
                    da.SelectCommand = cmd;
                    da.Fill(ds);
                }
                results = JsonConvert.SerializeObject(ds);
            }
            catch (Exception ex)
            {
                logger.Error("取得機種出貨資訊發生錯誤，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 總產量(給定起始與結束時間)
        public object getTotalCapacityByDate(string modelNO, string startDate, string endDate)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            DateTime starDateTime = DateTime.ParseExact(startDate, "yyyy/MM/dd", null);
            DateTime endDateTime = DateTime.ParseExact(endDate, "yyyy/MM/dd", null);
            switch (modelNO)
            {
                case "A/S":
                case "Arya":
                case "Sansa":
                    break;
                case "H/M":
                case "Hermes":
                case "Mercury":
                    break;
                case "Excalibur":
                    break;
                case "Taurus":
                    break;
                case "Castor":
                    sSQL = "foxlinksfc.get_castor_capacity";
                    break;
                case "Pollux":
                    sSQL = "foxlinksfc.get_pollux_capacity";
                    break;
                default:
                    break;
            }

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
                            oraCmd.Parameters.Add(new OracleParameter("START_DATE", OracleDbType.Date)).Value = starDateTime;
                            oraCmd.Parameters.Add(new OracleParameter("END_DATE", OracleDbType.Date)).Value = endDateTime;
                            oraCmd.Parameters.Add(new OracleParameter("CUR_CAPACITY_RESULTS", OracleDbType.RefCursor));
                            oraCmd.Parameters["START_DATE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["END_DATE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_CAPACITY_RESULTS"].Direction = ParameterDirection.Output;
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
                logger.Error("取得總產量資訊失敗(起始時間 及 結束時間)，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得SMT12内產能資訊(產出、良率)
        public object getPackUPH_12HR(string modelNO)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_PACK_UPH_PAST_12HR";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_PACK_UPH", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_PACK_UPH"].Direction = ParameterDirection.Output;
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
                logger.Error("取得Pack 12小时内UPH資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region Pack近七天產量和良率
        public object getPackCapaRate()
        {
            string capaSQL = "", rateSQL = "", yieldRate = "", capacity = "";
            JObject RateAndCapa = new JObject();
            DataSet capaDs = new DataSet();
            DataSet rateDs = new DataSet();

            capaSQL = "SELECT * " +
                      "FROM TABLE( " +
                      "PIVOT( " +
                      "'select  B.LINE_NAME,TO_CHAR (a.work_date, ''yyyy/mm/dd'')  CURRENT_TIME,sum(A.PASS_QTY) PASS_QTY FROM MESD.MES_PRODUCTION_LOG A " +
                      "JOIN EMESC.TC_WS_LINE_DESC@AAS B ON A.LINE_ID = B.LINE_CODE " +
                      "WHERE     A.WORK_DATE >= SYSDATE - 7 " +
                      "AND A.WORK_DATE < SYSDATE " +
                      "AND a.link_id = ''LINK20161206141611'' " +
                      "AND process_id = 14 group by B.LINE_NAME, TO_CHAR (a.work_date, ''yyyy/mm/dd'') ') " +
                      ") " +
                      "ORDER BY 1 ";

            rateSQL = "SELECT * " +
                      "FROM TABLE( " +
                      "PIVOT( " +
                      " 'select B.LINE_NAME,TO_CHAR (a.work_date, ''yyyy/mm/dd'') CURRENT_TIME, " +
                      "ROUND(decode(SUM(A.pass_qty + A.fail_qty),0,0,SUM(A.pass_qty)/SUM(A.pass_qty+ A.FAIL_QTY)),4)*100 YIELD_RATE " +
                      "FROM MESD.MES_PRODUCTION_LOG A " +
                      "JOIN EMESC.TC_WS_LINE_DESC@AAS B ON A.LINE_ID = B.LINE_CODE " +
                      "WHERE     A.WORK_DATE >= SYSDATE - 7 " +
                      "AND A.WORK_DATE < SYSDATE " +
                      "AND a.link_id = ''LINK20161206141611'' " +
                      "AND process_id = 14 group by B.LINE_NAME, TO_CHAR (a.work_date, ''yyyy/mm/dd'') ') " +
                      ")" +
                      "ORDER BY 1";
            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    oraConn.Open();
                    using (OracleDataAdapter capaDa = new OracleDataAdapter())
                    {
                        using (OracleCommand oraCmd = dbContext.Database.Connection.CreateCommand() as OracleCommand)
                        {
                            oraCmd.CommandText = capaSQL;
                            capaDa.SelectCommand = oraCmd;
                            capaDa.Fill(capaDs);
                            oraConn.Close();
                        }
                    }
                    using (OracleDataAdapter rateDa = new OracleDataAdapter())
                    {
                        using (OracleCommand oraCmd = dbContext.Database.Connection.CreateCommand() as OracleCommand)
                        {
                            oraCmd.CommandText = rateSQL;
                            rateDa.SelectCommand = oraCmd;
                            rateDa.Fill(rateDs);
                            oraConn.Close();
                        }
                    }
                    oraConn.Close();
                }
                capacity = JsonConvert.SerializeObject(capaDs);
                yieldRate = JsonConvert.SerializeObject(rateDs);

                JObject capaJson = (JObject)JsonConvert.DeserializeObject(capacity);
                JObject rateJson = (JObject)JsonConvert.DeserializeObject(yieldRate);

                RateAndCapa.Add("Capacity", capaJson["Table"]);
                RateAndCapa.Add("YieldRate", rateJson["Table"]);
            }
            catch (Exception ex)
            {
                logger.Error("取得Pack產量和良率發生錯誤，原因: ", ex);
            }
            return RateAndCapa.ToString();
        }
        #endregion

        #region 取得TAURUS(KS) 近一个月的線體數量
        public object getKSTaurusLineNum(string modelNO)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    sSQL = "select WORK_DATE,A.NUM_OF_LINE LINE_NUM from MESD.MES2ERP_LINE_LOG A where link_id = " +
                         "(select link_id from mesd.bg_model_link B where model_no=:modelNO) and  A.WORK_DATE >= TO_CHAR ((SYSDATE - 30), 'yyyymmdd')";
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

        #region 取得TAURUS(KS) 近一个月的产量和良率
        public object getKSTaurusCapaRate(string modelNO)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    sSQL = "select A.WORK_DATE WORK_DATE,A.THROUGHOUT PACKING_QTY,A.FIRST_PASS_YIELD FIRSTPASS_RATE " +
                          "from MESD.PACK_CAPACITY_30DAYS A " +
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

        #region 取得TAURUS(KS) 近一个月通过各IN站的产量
        public object getKSTaurusInStation(string modelNO)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    sSQL = "select A.WORK_DATE WORK_DATE,A.THROUGHOUT PACKING_QTY,A.FIRST_PASS_YIELD FIRSTPASS_RATE " +
                          "from MESD.KS_TAURUS_NI_CAPACITY_30DAYS A " +
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

        #region 取得TAURUS(KS) 近一个月UPH
        public object getKSTaurusUPH(string modelNO)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    sSQL = "select A.WORK_DATE WORK_DATE,A.THROUGHOUT PACKING_QTY " +
                          "from MESD.KS_TAURUS_UPH A " +
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

        #region 取得機種包裝站本年度12个月出貨量
        public object getPackShipmentByYear(string modelNO)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_YEARLY_SHIPPING_BY_MODEL";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SHIPPING", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SHIPPING"].Direction = ParameterDirection.Output;
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
                logger.Error("取得機種包裝站本年度12个月出貨量，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 按月取得PACK周出貨量
        public object getPackShipmentByMon(string modelNO, string selectTime)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_MONTHLY_SHIPPING_BY_MODEL";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SHIPPING", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_MONTH"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SHIPPING"].Direction = ParameterDirection.Output;
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
                logger.Error("按月份取得PACK每週的出貨量資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 按周取得PACK每天的出貨量
        public object getPackShipmentByWeekly(string modelNO, string selectTime)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_WEEKLY_SHIPPING_BY_MODEL";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_SHIPPING", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_WEEK"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_SHIPPING"].Direction = ParameterDirection.Output;
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
                logger.Error("按周取得PACK每天的出貨量資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 取得機種包裝站本年度12个月開線線體數
        public object getPackLineNumByYear(string modelNO)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_YEARLY_PDLINES_BY_MODEL";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_NUM_OF_LINES", OracleDbType.RefCursor));
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_NUM_OF_LINES"].Direction = ParameterDirection.Output;
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
                logger.Error("取得機種包裝站本年度12个月開線線體數，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 按月取得PACK周開線線體數
        public object getPackLineNumByMon(string modelNO, string selectTime)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_MONTHLY_PDLINES_BY_MODEL";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_NUM_OF_LINES", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_MONTH"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_NUM_OF_LINES"].Direction = ParameterDirection.Output;
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
                logger.Error("按月份取得PACK每週的開線線體數資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region 按周取得PACK每天的開線線體數
        public object getPackLineNumByWeekly(string modelNO, string selectTime)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            sSQL = "MESD.GET_WEEKLY_PDLINES_BY_MODEL";

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
                            oraCmd.Parameters.Add(new OracleParameter("CUR_NUM_OF_LINES", OracleDbType.RefCursor));
                            oraCmd.Parameters["SELECT_WEEK"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["MODEL_CODE"].Direction = ParameterDirection.Input;
                            oraCmd.Parameters["CUR_NUM_OF_LINES"].Direction = ParameterDirection.Output;
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
                logger.Error("按周取得PACK每天的開線線體數資訊失敗，請檢查Procedure", ex);
            }
            return results.ToString();
        }
        #endregion

        #region Pack近七天產量(HeatMap测试用)
        public object getPackCapaAsHeatmapData()
        {
            string capaSQL = "", capacity = "";
            JObject RateAndCapa = new JObject();
            DataSet capaDs = new DataSet();
            DataSet rateDs = new DataSet();

            capaSQL = "SELECT * " +
                      "FROM TABLE( " +
                      "PIVOT( " +
                      "'select  B.LINE_NAME,TO_CHAR (a.work_date, ''yyyy/mm/dd'')  CURRENT_TIME,sum(A.PASS_QTY) PASS_QTY FROM MESD.MES_PRODUCTION_LOG A " +
                      "JOIN EMESC.TC_WS_LINE_DESC@AAS B ON A.LINE_ID = B.LINE_CODE " +
                      "WHERE     A.WORK_DATE >= SYSDATE - 7 " +
                      "AND A.WORK_DATE < SYSDATE " +
                      "AND a.link_id = ''LINK20161206141611'' " +
                      "AND process_id = 14 group by B.LINE_NAME, TO_CHAR (a.work_date, ''yyyy/mm/dd'') ') " +
                      ") " +
                      "ORDER BY 1 ";

            try
            {
                using (var oraConn = dbContext.Database.Connection)
                {
                    oraConn.Open();
                    using (OracleDataAdapter capaDa = new OracleDataAdapter())
                    {                      
                        using (OracleCommand oraCmd = dbContext.Database.Connection.CreateCommand() as OracleCommand)
                        {
                            oraCmd.CommandText = capaSQL;                      
                            capaDa.SelectCommand = oraCmd;
                            capaDa.Fill(capaDs);
                            oraConn.Close();
                        }
                        oraConn.Close();
                    }
                }
                capacity = JsonConvert.SerializeObject(capaDs);
            }
            catch (Exception ex)
            {
                logger.Error("取得Pack產量和良率發生錯誤，原因: ", ex);
            }
            return capacity.ToString();
        }
        #endregion

        #region 取得報表類型
        public string getReportTypeOptions(string modelNO, bool isSMTReport)
        {
            string sSQL = "", results = "";
            DataSet ds = new DataSet();
            if (isSMTReport)
            {
                switch (modelNO)
                {
                    case "A/S":
                        sSQL = "select report_id,report_name,case report_name when 'A/S '||chr(38)||' C/P SMT 線體狀態' then 0 else 1 end as firstRow from " +
                               "FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='A/S '||chr(38)||' C/P' and report_name not like '%(不含重工)%' and report_name like '%SMT%' " +
                               "and report_name like '%近一個月%' or report_name like 'A/S '||chr(38)||' C/P SMT 線體狀態' and report_enable=1 order by firstRow";
                        break;
                    case "H/M":
                        sSQL = "select report_id,report_name,case report_name when 'H/M SMT 線體狀態' then 0 else 1 end as firstRow from " +
                               "FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='H/M' and report_name not like '%(不含重工)%' and report_name like '%SMT%' " +
                               "and report_name like '%近一個月%' or report_name like 'H/M SMT 線體狀態' and report_enable=1 order by firstRow";
                        break;
                    case "Excalibur":
                        sSQL = "select report_id,report_name,case report_name when 'EXCALIBUR SMT 線體狀態' then 0 else 1 end as firstRow from " +
                               "FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='EXCALIBUR' and report_name not like '%(不含重工)%' and report_name like '%SMT%' " +
                               "and report_name like '%近一個月%' or report_name like 'EXCALIBUR SMT 線體狀態' and report_enable=1 order by firstRow";
                        break;
                    default:
                        //B9
                        sSQL = "select report_id,report_name,case report_name when 'B9 SMT 線體狀態' then 0 else 1 end as firstRow from " +
                               "FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='B9'and report_name not like '%(不含重工)%' and report_name like '%SMT%' " +
                               "and report_name like '%近一個月%' or report_name like 'B9 SMT 線體狀態' and report_enable=1 order by firstRow";
                        break;
                }
            }
            else
            {
                switch (modelNO)
                {
                    case "A/S":
                        sSQL = "select report_id,report_name from FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='A/S '||chr(38)||' C/P' and " +
                               "report_name not like '%(不含重工)%' and report_name not like '%SMT%' and report_name like '%近一個月%' and report_enable=1";
                        break;
                    case "H/M":
                        sSQL = "select report_id,report_name from FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='H/M' and report_name not like '%(不含重工)%' " +
                               "and report_name not like '%SMT%' and report_name like '%近一個月%' and report_enable=1";
                        break;
                    case "Excalibur":
                        sSQL = "select report_id,report_name from FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='EXCALIBUR' and report_name not like '%(不含重工)%' " +
                               "and report_name not like '%SMT%' and report_name like '%近一個月%' and report_enable=1";
                        break;
                    case "TAURUS(LK)":
                        sSQL = "select report_id,report_name from FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='TAURUS(LK)' and report_name like '%近一個月%' and report_enable=1";
                        break;
                    case "TAURUS(KS)":
                        sSQL = "select report_id,report_name from FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='TAURUS(KS)' and report_name like '%近一個月%' and report_enable=1";
                        break;
                    default:
                        //B9
                        sSQL = "select report_id,report_name from FOXLINKSFC.FL_DASHBOARD_REPORT_TYPE where model_name='B9' and report_name not like '%(不含重工)%' " +
                               "and report_name not like '%SMT%' and report_name like '%近一個月%' and report_enable=1";
                        break;
                }
            }

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
                logger.Error("取得報表選項發生錯誤，原因: ", ex);
            }
            return results.ToString();
        }
        #endregion

    }
}

