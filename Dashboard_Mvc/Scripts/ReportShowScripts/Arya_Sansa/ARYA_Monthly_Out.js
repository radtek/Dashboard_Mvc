//@ sourceURL=ARYA_Monthly_Out.js

var getPackTotalCapacityUrl = "/getPackTotalCapacity", modelNO = "Arya", timeInterval = "4Month", isTotalCapacity = true;
var totalProductChart = new Object();
totalProductChart.RenderTO = 'divProductArea';
totalProductChart.Title = 'Arya近四月總產量';
totalProductChart.yAxisTitle = 'Arya近四月總產量';
totalProductChart.xtext = [];
var chartSeries = [{
    type: 'column',
    name: "Arya近四月總產量"
},
                   {
                       type: 'line',
                       name: "Arya近四月總產量走向",
                       color: '#89A54E'
                   }
];
totalProductChart.series = chartSeries;
var produChart = setColumnAndTrendCharts(totalProductChart);

var productRateChart = new Object();
productRateChart.RenderTO = 'divRateArea';
productRateChart.Title = 'Arya近四月總產量良率';
productRateChart.yAxisTitle = 'Arya近四月總產量良率';
productRateChart.xtext = [];
var chartSeries = [{
    type: 'line',
    name: "Arya近四月總產量良率走向",
    tooltip: {
        valueSuffix: '%'
    }
}
];
productRateChart.series = chartSeries;
var rateChart = setYAxisFormatCharts(productRateChart);
//此方法在getReportDataMethod.js文件中
getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
