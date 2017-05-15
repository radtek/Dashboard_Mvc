//@ sourceURL=ARYA_SMT_OneMon_CheckRealOut.js

var getSMTTotalCapacityUrl = "GetSMTWebService.asmx/getSMTTotalCapacity", modelNO = "Arya", timeInterval = "1Month", isTotalCapacity = false;
var totalProductChart = new Object();
totalProductChart.RenderTO = 'divProductArea';
totalProductChart.Title = 'Arya SMT近一個月檢測站實際產生';
totalProductChart.yAxisTitle = 'Arya SMT近一個月檢測站實際產生';
totalProductChart.xtext = [];
var chartSeries = [{
    type: 'column',
    name: "Arya SMT近一個月檢測站實際產生"
},
                {
                    type: 'line',
                    name: "Arya SMT近一個月檢測站實際產生走向",
                    color: '#89A54E'
                }
];
totalProductChart.series = chartSeries;
var SMTProduChart = setColumnAndTrendCharts(totalProductChart);

var productRateChart = new Object();
productRateChart.RenderTO = 'divRateArea';
productRateChart.Title = 'Arya SMT近一個月檢測站實際產生良率';
productRateChart.yAxisTitle = 'Arya SMT近一個月檢測站實際產生良率';
productRateChart.xtext = [];
var chartSeries = [{
    type: 'line',
    name: "Arya SMT近一個月檢測站實際產生良率走向",
    tooltip: {
        valueSuffix: '%'
    }
}
];
productRateChart.series = chartSeries;
var SMTRateChart = setYAxisFormatCharts(productRateChart);
//此方法在getReportDataMethod.js文件中
getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);

