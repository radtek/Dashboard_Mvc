//# sourceURL=Taurus(LK)_Packing_LineNum.js

var getPackLineNumUrl = "../FoxlinkSfc/getPackingSectionLineInfos", modelNO = "Taurus";
if (timeInterval == "1Week") {
    var packLineNumChart = new Object();
    packLineNumChart.RenderTO = 'divProductArea';
    packLineNumChart.Title = 'Taurus(LK)近七天包裝線線體數';
    packLineNumChart.yAxisTitle = 'Taurus(LK)近七天包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近七天包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "Taurus(LK)近七天包裝線線體數",
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
    packLineNumChart.Title = 'Taurus(LK)近兩周包裝線線體數';
    packLineNumChart.yAxisTitle = 'Taurus(LK)近兩周包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近兩周包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "Taurus(LK)近兩周包裝線線體數",
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
    packLineNumChart.Title = 'Taurus(LK)近一個月包裝線線體數';
    packLineNumChart.yAxisTitle = 'Taurus(LK)近一個月包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近一個月包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "Taurus(LK)近一個月包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    packLineNumChart.series = chartSeries;
    var lineNumChart = setColumnAndTrendCharts(packLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, lineNumChart, packLineNumChart.xtext, modelNO, timeInterval);
}