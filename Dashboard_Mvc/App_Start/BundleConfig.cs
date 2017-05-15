using System.Web.Optimization;

namespace IdentitySample
{
    public class BundleConfig
    {
        // For more information on bundling, visit http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js",
                        "~/Scripts/holder.min.js",
                        "~/Scripts/jquery-ui-1.9.2.custom.min.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new ScriptBundle("~/bundles/highCharts").Include(
                     "~/Scripts/HighCharts/highcharts.js",
                     "~/Scripts/HighCharts/highcharts-more.js",
                     "~/Scripts/HighCharts/heatmap.js",
                     "~/Scripts/HighCharts/solid-gauge.js"));

            bundles.Add(new ScriptBundle("~/bundles/CommonScript").Include(
                     "~/Scripts/jquery-ui-1.9.2.custom.min.js",
                     "~/Scripts/ReportShowScripts/CommonMethod.js"));

            bundles.Add(new ScriptBundle("~/bundles/ModelRealTimeByYear").Include(
                    "~/Scripts/ReportShowScripts/ModelRealTimeByYear.js"));

            bundles.Add(new ScriptBundle("~/bundles/ModelRealTimeByMonOrWeek").Include(
                   "~/Scripts/ReportShowScripts/ModelRealTimeByMonOrWeek.js"));

            bundles.Add(new ScriptBundle("~/bundles/FoxlinkSfcIndex").Include(
                "~/Scripts/ReportShowScripts/FoxlinkSfcIndex.js"));

            bundles.Add(new ScriptBundle("~/bundles/ReportDataMethod").Include(
               "~/Scripts/ReportShowScripts/ReportDataMethod.js"));

            bundles.Add(new ScriptBundle("~/bundles/ModelReport").Include(
               "~/Scripts/ReportShowScripts/ModelReport.js"));

            bundles.Add(new ScriptBundle("~/bundles/ModelLineStatus").Include(
               "~/Scripts/ReportShowScripts/ModelLineStatus.js"));

            bundles.Add(new ScriptBundle("~/bundles/Shipment").Include(
             "~/Scripts/ReportShowScripts/Shipment.js"));

            bundles.Add(new ScriptBundle("~/bundles/SolidGaugeOee").Include(
            "~/Scripts/ReportShowScripts/SolidGaugeOee.js"));

            bundles.Add(new ScriptBundle("~/bundles/LineOeeValue").Include(
            "~/Scripts/ReportShowScripts/LineOeeValue.js"));

            bundles.Add(new ScriptBundle("~/bundles/AllModelOEEValue").Include(
                     "~/Scripts/ReportShowScripts/AllModelYearOEEValue.js",
                     "~/Scripts/ReportShowScripts/AllModelMonOrDayOEE.js"));
            
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/dashboard.css",
                      "~/Content/jquery-ui-1.10.0.custom.css",
                      "~/Content/site.css"));
        }
    }
}
