//# sourceURL=B9_Packing_PostNum.js

var getModelPostOutUrl = "../FoxlinkSfc/getPackTotalProduction", modelNO = "B9";
if (timeInterval == "7Day") {
    var B9PostOutChart = new Object();
    B9PostOutChart.RenderTO = 'divProductArea';
    B9PostOutChart.Title = 'B9近七天包裝站總過帳量';
    B9PostOutChart.yAxisTitle = 'B9近七天包裝站總過帳量';
    B9PostOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近七天包裝站總過帳量"
    },
            {
                type: 'line',
                name: "B9近七天包裝站總過帳量",
                color: '#89A54E'
            }
    ];
    B9PostOutChart.series = chartSeries;
    var B9ModelPostOutChart = setColumnAndTrendCharts(B9PostOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModelPostOutUrl, B9ModelPostOutChart, B9PostOutChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var B9PostOutChart = new Object();
    B9PostOutChart.RenderTO = 'divProductArea';
    B9PostOutChart.Title = 'B9近兩周包裝站總過帳量';
    B9PostOutChart.yAxisTitle = 'B9近兩周包裝站總過帳量';
    B9PostOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近兩周包裝站總過帳量"
    },
            {
                type: 'line',
                name: "B9近兩周包裝站總過帳量",
                color: '#89A54E'
            }
    ];
    B9PostOutChart.series = chartSeries;
    var B9ModelPostOutChart = setColumnAndTrendCharts(B9PostOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModelPostOutUrl, B9ModelPostOutChart, B9PostOutChart.xtext, modelNO, timeInterval);

}
if (timeInterval == "1Month") {
    var B9PostOutChart = new Object();
    B9PostOutChart.RenderTO = 'divProductArea';
    B9PostOutChart.Title = 'B9近一個月包裝站總過帳量';
    B9PostOutChart.yAxisTitle = 'B9近一個月包裝站總過帳量';
    B9PostOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近一個月包裝站總過帳量"
    },
            {
                type: 'line',
                name: "B9近一個月包裝站總過帳量",
                color: '#89A54E'
            }
    ];
    B9PostOutChart.series = chartSeries;
    var B9ModelPostOutChart = setColumnAndTrendCharts(B9PostOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModelPostOutUrl, B9ModelPostOutChart, B9PostOutChart.xtext, modelNO, timeInterval);

}