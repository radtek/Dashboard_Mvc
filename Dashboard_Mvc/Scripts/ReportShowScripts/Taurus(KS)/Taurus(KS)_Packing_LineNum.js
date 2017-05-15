//# sourceURL=Taurus(KS)_Packing_LineNum.js

var getPackLineNumUrl = "../FoxlinkSfc/getKSTaurusLineNum", modelNO = "TAURUS(KS)";

if (timeInterval == "1Month") {
    var packLineNumChart = new Object();
    packLineNumChart.RenderTO = 'divProductArea';
    packLineNumChart.Title = 'Taurus(KS)近一個月包裝線線體數';
    packLineNumChart.yAxisTitle = 'Taurus(KS)近一個月包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(KS)近一個月包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "Taurus(KS)近一個月包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    packLineNumChart.series = chartSeries;
    var lineNumChart = setColumnAndTrendCharts(packLineNumChart);
    //此方法在ReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, lineNumChart, packLineNumChart.xtext, modelNO, timeInterval);
}