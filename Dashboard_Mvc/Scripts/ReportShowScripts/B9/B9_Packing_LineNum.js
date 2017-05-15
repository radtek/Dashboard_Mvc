//# sourceURL=B9_Packing_LineNum.js

var getPackLineNumUrl = "../FoxlinkSfc/getPackingSectionLineInfos", modelNO = "B9";
if (timeInterval == "7Day") {
    var B9PackLineNumChart = new Object();
    B9PackLineNumChart.RenderTO = 'divProductArea';
    B9PackLineNumChart.Title = 'B9近七天線體數';
    B9PackLineNumChart.yAxisTitle = 'B9近七天線體數';
    B9PackLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近七天線體數"
    },
                            {
                                type: 'line',
                                name: "B9近七天線體數",
                                color: '#89A54E'
                            }
    ];
    B9PackLineNumChart.series = chartSeries;
    var B9LineNumChart = setColumnAndTrendCharts(B9PackLineNumChart);
    //此方法在ReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, B9LineNumChart, B9PackLineNumChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var B9PackLineNumChart = new Object();
    B9PackLineNumChart.RenderTO = 'divProductArea';
    B9PackLineNumChart.Title = 'B9近兩周包裝線線體數';
    B9PackLineNumChart.yAxisTitle = 'B9近兩周包裝線線體數';
    B9PackLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近兩周包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "B9近兩周包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    B9PackLineNumChart.series = chartSeries;
    var B9LineNumChart = setColumnAndTrendCharts(B9PackLineNumChart);
    //此方法在ReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, B9LineNumChart, B9PackLineNumChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "1Month") {
    var B9PackLineNumChart = new Object();
    B9PackLineNumChart.RenderTO = 'divProductArea';
    B9PackLineNumChart.Title = 'B9近一個月包裝線線體數';
    B9PackLineNumChart.yAxisTitle = 'B9近一個月包裝線線體數';
    B9PackLineNumChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近一個月包裝線線體數"
    },
                            {
                                type: 'line',
                                name: "B9近一個月包裝線線體數",
                                color: '#89A54E'
                            }
    ];
    B9PackLineNumChart.series = chartSeries;
    var B9LineNumChart = setColumnAndTrendCharts(B9PackLineNumChart);
    //此方法在ReportDataMethod.js文件中
    getLineNum(getPackLineNumUrl, B9LineNumChart, B9PackLineNumChart.xtext, modelNO, timeInterval);

}