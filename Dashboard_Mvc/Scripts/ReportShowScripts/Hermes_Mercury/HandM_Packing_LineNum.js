//# sourceURL=HandM_Packing_LineNum.js

var getPackLineNumUrl = "../FoxlinkSfc/getPackingSectionLineInfos", modelNO = "H/M";
if (timeInterval == "1Week") {
    var packLineNumChart = new Object();
    packLineNumChart.RenderTO = 'divProductArea';
    packLineNumChart.Title = 'H/M近七天包裝線線體數';
    packLineNumChart.yAxisTitle = 'H/M近七天包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "H/M近七天包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "H/M近七天包裝線線體數",
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
    packLineNumChart.Title = 'H/M近兩周線體數';
    packLineNumChart.yAxisTitle = 'H/M近兩周線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "H/M近兩周線體數"
    },
                            {
                                type: 'line',
                                name: "H/M近兩周線體數",
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
    packLineNumChart.Title = 'H/M近一個月包裝線線體數';
    packLineNumChart.yAxisTitle = 'H/M近一個月包裝線線體數';
    packLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "H/M近一個月包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "H/M近一個月包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    packLineNumChart.series = chartSeries;
    var lineNumChart = setColumnAndTrendCharts(packLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, lineNumChart, packLineNumChart.xtext, modelNO, timeInterval);
}