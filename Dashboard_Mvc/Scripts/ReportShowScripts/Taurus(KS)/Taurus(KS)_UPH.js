//# sourceURL=Taurus(KS)_UPH.js

var getModeUPHUrl = "../FoxlinkSfc/getKSTaurusUPH", modelNO = "TAURUS(KS)";

if (timeInterval == "1Month") {
    var UPHChart = new Object();
    UPHChart.RenderTO = 'divProductArea';
    UPHChart.Title = 'Taurus(KS)近一個月的UPH';
    UPHChart.yAxisTitle = 'Taurus(KS)近一個月的UPH';
    UPHChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(KS)近一個月的UPH"
    },
            {
                type: 'line',
                name: "Taurus(KS)近一個月的UPH",
                color: '#89A54E'
            }
    ];
    UPHChart.series = chartSeries;
    var modelUPHChart = setColumnAndTrendCharts(UPHChart);
    //此方法在ReportDataMethod.js文件中
    getModelPostOut(getModeUPHUrl, modelUPHChart, UPHChart.xtext, modelNO, timeInterval);
}