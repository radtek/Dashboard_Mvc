//# sourceURL=B9_SMT_LineNum.js

var getSMTLineNumUrl = "../FoxlinkSfc/getSMTLineInfos", modelNO = "B9";
if (timeInterval == "1Week") {
    var B9SMTLineNumChart = new Object();
    B9SMTLineNumChart.RenderTO = 'divProductArea';
    B9SMTLineNumChart.Title = 'B9 SMT近七天包裝線線體數';
    B9SMTLineNumChart.yAxisTitle = 'B9 SMT近七天包裝線線體數';
    B9SMTLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近七天包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "B9 SMT近七天包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    B9SMTLineNumChart.series = chartSeries;
    var B9LineNumChart = setColumnAndTrendCharts(B9SMTLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getSMTLineNumUrl, B9LineNumChart, B9SMTLineNumChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var B9SMTLineNumChart = new Object();
    B9SMTLineNumChart.RenderTO = 'divProductArea';
    B9SMTLineNumChart.Title = 'B9 SMT近兩周線體數';
    B9SMTLineNumChart.yAxisTitle = 'B9 SMT近兩周線體數';
    B9SMTLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近兩周線體數"
    },
                            {
                                type: 'line',
                                name: "B9 SMT近兩周線體數",
                                color: '#89A54E'
                            }
    ];
    B9SMTLineNumChart.series = chartSeries;
    var B9LineNumChart = setColumnAndTrendCharts(B9SMTLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getSMTLineNumUrl, B9LineNumChart, B9SMTLineNumChart.xtext, modelNO, timeInterval);

}
if (timeInterval == "1Month") {
    var B9SMTLineNumChart = new Object();
    B9SMTLineNumChart.RenderTO = 'divProductArea';
    B9SMTLineNumChart.Title = 'B9 SMT近一個月線體數';
    B9SMTLineNumChart.yAxisTitle = 'B9 SMT近一個月線體數';
    B9SMTLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近一個月線體數"
    },
                            {
                                type: 'line',
                                name: "B9 SMT近一個月線體數",
                                color: '#89A54E'
                            }
    ];
    B9SMTLineNumChart.series = chartSeries;
    var B9LineNumChart = setColumnAndTrendCharts(B9SMTLineNumChart);
    //此方法在getReportDataMethod.js文件中
    getLineNum(getSMTLineNumUrl, B9LineNumChart, B9SMTLineNumChart.xtext, modelNO, timeInterval);

}