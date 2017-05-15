//# sourceURL=Excalibur_Packing_PostOut.js

var getModelPostOutUrl = "../FoxlinkSfc/getPackTotalProduction", modelNO = "Excalibur";
if (timeInterval == "1Week") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'Excalibur近七天包裝站總過帳量';
    postOutChart.yAxisTitle = 'Excalibur近七天包裝站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur近七天包裝站總過帳量"
    },
            {
                type: 'line',
                name: "Excalibur近七天包裝站總過帳量",
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
    postOutChart.Title = 'Excalibur近兩周包裝站總過帳量';
    postOutChart.yAxisTitle = 'Excalibur近兩周包裝站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur近兩周包裝站總過帳量"
    },
            {
                type: 'line',
                name: "Excalibur近兩周包裝站總過帳量",
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
    postOutChart.Title = 'Excalibur近一個月包裝站總過帳量';
    postOutChart.yAxisTitle = 'Excalibur近一個月包裝站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur近一個月包裝站總過帳量"
    },
            {
                type: 'line',
                name: "Excalibur近一個月包裝站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var modelPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModelPostOutUrl, modelPostOutChart, postOutChart.xtext, modelNO, timeInterval);

}