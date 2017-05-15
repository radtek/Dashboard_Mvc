//# sourceURL=HandM_Packing_PostNum.js

var getModelPostOutUrl = "../FoxlinkSfc/getPackTotalProduction", modelNO = "H/M";
if (timeInterval == "1Week") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'H/M近七天包裝站總過帳量';
    postOutChart.yAxisTitle = 'H/M近七天包裝站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "H/M近七天包裝站總過帳量"
    },
            {
                type: 'line',
                name: "H/M近七天包裝站總過帳量",
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
    postOutChart.Title = 'H/M近兩周包裝站總過帳量';
    postOutChart.yAxisTitle = 'H/M近兩周包裝站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "H/M近兩周包裝站總過帳量"
    },
            {
                type: 'line',
                name: "H/M近兩周包裝站總過帳量",
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
    postOutChart.Title = 'H/M近一個月包裝站總過帳量';
    postOutChart.yAxisTitle = 'H/M近一個月包裝站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "H/M近一個月包裝站總過帳量"
    },
            {
                type: 'line',
                name: "H/M近一個月包裝站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var modelPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModelPostOutUrl, modelPostOutChart, postOutChart.xtext, modelNO, timeInterval);

}