//# sourceURL=AandS_Packing_LineNum.js

var getPackLineNumUrl = "../FoxlinkSfc/getPackingSectionLineInfos", modelNO = "A/S";
if (timeInterval == "1Week") {
    var packLineNumChart = new Object();
    packLineNumChart.RenderTO = 'divProductArea';
    packLineNumChart.Title = 'A/S & C/P近七天包裝線線體數';
    packLineNumChart.yAxisTitle = 'A/S & C/P近七天包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P近七天包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "A/S & C/P近七天包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    packLineNumChart.series = chartSeries;
    var lineNumChart = setColumnAndTrendCharts(packLineNumChart);
    getLineNum(getPackLineNumUrl, lineNumChart, packLineNumChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var packLineNumChart = new Object();
    packLineNumChart.RenderTO = 'divProductArea';
    packLineNumChart.Title = 'A/S & C/P近兩周線體數';
    packLineNumChart.yAxisTitle = 'A/S & C/P近兩周線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P近兩周線體數"
    },
                            {
                                type: 'line',
                                name: "A/S & C/P近兩周線體數",
                                color: '#89A54E'
                            }
    ];
    packLineNumChart.series = chartSeries;
    var lineNumChart = setColumnAndTrendCharts(packLineNumChart);
    getLineNum(getPackLineNumUrl, lineNumChart, packLineNumChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "1Month") {
    var packLineNumChart = new Object();
    packLineNumChart.RenderTO = 'divProductArea';
    packLineNumChart.Title = 'A/S & C/P近一個月包裝線線體數';
    packLineNumChart.yAxisTitle = 'A/S & C/P近一個月包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P近一個月包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "A/S & C/P近一個月包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    packLineNumChart.series = chartSeries;
    var lineNumChart = setColumnAndTrendCharts(packLineNumChart);
    //此方法在ReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, lineNumChart, packLineNumChart.xtext, modelNO, timeInterval);
}