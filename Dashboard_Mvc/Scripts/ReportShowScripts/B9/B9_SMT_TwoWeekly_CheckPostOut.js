//# sourceURL=B9_SMT_TwoWeekly_CheckPostOut.js

var getModelPostOutUrl = "GetSMTWebService.asmx/getSMTTotalProduction", modelNO = "B9", timeInterval = "2Week";
var B9PostOutChart = new Object();
B9PostOutChart.RenderTO = 'divProductArea';
B9PostOutChart.Title = 'B9 SMT近兩周檢測站總過帳量';
B9PostOutChart.yAxisTitle = 'B9 SMT近兩周檢測站總過帳量';
B9PostOutChart.xtext = [];
var chartSeries = [{
    type: 'column',
    name: "B9 SMT近兩周檢測站總過帳量"
},
        {
            type: 'line',
            name: "B9 SMT近兩周檢測站總過帳量走向",
            color: '#89A54E'
        }
];
B9PostOutChart.series = chartSeries;
var B9ModelPostOutChart = setColumnAndTrendCharts(B9PostOutChart);
//此方法在getReportDataMethod.js文件中
getModelPostOut(getModelPostOutUrl, B9ModelPostOutChart, B9PostOutChart.xtext, modelNO, timeInterval);
