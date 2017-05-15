//# sourceURL=AandS_Packing_PostNum.js

var getModelPostOutUrl = "../FoxlinkSfc/getPackTotalProduction", modelNO = "A/S";
if (timeInterval == "1Week") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'A/S & C/P近七天包裝站總過帳量';
    postOutChart.yAxisTitle = 'A/S & C/P近七天包裝站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P近七天包裝站總過帳量"
    },
            {
                type: 'line',
                name: "A/S & C/P近七天包裝站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var modelPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModelPostOutUrl, modelPostOutChart, postOutChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'A/S & C/P近兩周包裝站總過帳量';
    postOutChart.yAxisTitle = 'A/S & C/P近兩周包裝站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P近兩周包裝站總過帳量"
    },
            {
                type: 'line',
                name: "A/S & C/P近兩周包裝站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var modelPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModelPostOutUrl, modelPostOutChart, postOutChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "1Month") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'A/S & C/P近一個月包裝站總過帳量';
    postOutChart.yAxisTitle = 'A/S & C/P近一個月包裝站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P近一個月包裝站總過帳量"
    },
            {
                type: 'line',
                name: "A/S & C/P近一個月包裝站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var modelPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModelPostOutUrl, modelPostOutChart, postOutChart.xtext, modelNO, timeInterval);
}