//# sourceURL=Excalibur_Packing_LineNum.js

var getPackLineNumUrl = "../FoxlinkSfc/getPackingSectionLineInfos", modelNO = "Excalibur";
if (timeInterval == "1Week") {
    var packLineNumChart = new Object();
    packLineNumChart.RenderTO = 'divProductArea';
    packLineNumChart.Title = 'Excalibur近七天包裝線線體數';
    packLineNumChart.yAxisTitle = 'Excalibur近七天包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur近七天包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "Excalibur近七天包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    packLineNumChart.series = chartSeries;
    var lineNumChart = setColumnAndTrendCharts(packLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, lineNumChart, packLineNumChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var packLineNumChart = new Object();
    packLineNumChart.RenderTO = 'divProductArea';
    packLineNumChart.Title = 'Excalibur近兩周包裝線線體數';
    packLineNumChart.yAxisTitle = 'Excalibur近兩周包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur近兩周包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "Excalibur近兩周包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    packLineNumChart.series = chartSeries;
    var lineNumChart = setColumnAndTrendCharts(packLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, lineNumChart, packLineNumChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "1Month") {
    var packLineNumChart = new Object();
    packLineNumChart.RenderTO = 'divProductArea';
    packLineNumChart.Title = 'Excalibur近一個月包裝線線體數';
    packLineNumChart.yAxisTitle = 'Excalibur近一個月包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur近一個月包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "Excalibur近一個月包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    packLineNumChart.series = chartSeries;
    var lineNumChart = setColumnAndTrendCharts(packLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, lineNumChart, packLineNumChart.xtext, modelNO, timeInterval);

}