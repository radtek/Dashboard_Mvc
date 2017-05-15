//# sourceURL=B9_SMT_Total_Product.js

var getSMTTotalCapacityUrl = "../FoxlinkSfc/getSMTTotalCapacity", modelNO = "B9", isTotalCapacity = true;
if (timeInterval == "1Week") {
    var SMTTotalProductChart = new Object();
    SMTTotalProductChart.RenderTO = 'divProductArea';
    SMTTotalProductChart.Title = 'B9 SMT近七天總產量';
    SMTTotalProductChart.yAxisTitle = 'B9 SMT近七天總產量';
    SMTTotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近七天總產量"
    },
                    {
                        type: 'line',
                        name: "B9 SMT近七天總產量",
                        color: '#89A54E'
                    }
    ];
    SMTTotalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(SMTTotalProductChart);

    var SMTProductRateChart = new Object();
    SMTProductRateChart.RenderTO = 'divRateArea';
    SMTProductRateChart.Title = 'B9 SMT近七天總產量良率';
    SMTProductRateChart.yAxisTitle = 'B9 SMT近七天總產量良率';
    SMTProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9 SMT近七天總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    SMTProductRateChart.series = chartSeries;
    var SMTRateChart = setYAxisFormatCharts(SMTProductRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, SMTTotalProductChart.xtext, SMTProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "2Week") {
    var SMTTotalProductChart = new Object();
    SMTTotalProductChart.RenderTO = 'divProductArea';
    SMTTotalProductChart.Title = 'B9 SMT近兩周總產量';
    SMTTotalProductChart.yAxisTitle = 'B9 SMT近兩周總產量';
    SMTTotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近兩周總產量"
    },
                    {
                        type: 'line',
                        name: "B9 SMT近兩周總產量",
                        color: '#89A54E'
                    }
    ];
    SMTTotalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(SMTTotalProductChart);

    var SMTProductRateChart = new Object();
    SMTProductRateChart.RenderTO = 'divRateArea';
    SMTProductRateChart.Title = 'B9 SMT近兩周總產量良率';
    SMTProductRateChart.yAxisTitle = 'B9 SMT近兩周總產量良率';
    SMTProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9 SMT近兩周總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    SMTProductRateChart.series = chartSeries;
    var SMTRateChart = setYAxisFormatCharts(SMTProductRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, SMTTotalProductChart.xtext, SMTProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "1Month") {
    var B9TotalProductChart = new Object();
    B9TotalProductChart.RenderTO = 'divProductArea';
    B9TotalProductChart.Title = 'B9 SMT近一個月總產量';
    B9TotalProductChart.yAxisTitle = 'B9 SMT近一個月總產量';
    B9TotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近一個月總產量"
    },
                    {
                        type: 'line',
                        name: "B9 SMT近一個月總產量",
                        color: '#89A54E'
                    }
    ];
    B9TotalProductChart.series = chartSeries;
    var B9ProduChart = setColumnAndTrendCharts(B9TotalProductChart);

    var B9ProductRateChart = new Object();
    B9ProductRateChart.RenderTO = 'divRateArea';
    B9ProductRateChart.Title = 'B9 SMT近一個月總產量良率';
    B9ProductRateChart.yAxisTitle = 'B9 SMT近一個月總產量良率';
    B9ProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9 SMT近一個月總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    B9ProductRateChart.series = chartSeries;
    var B9RateChart = setYAxisFormatCharts(B9ProductRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getSMTTotalCapacityUrl, B9ProduChart, B9RateChart, B9TotalProductChart.xtext, B9ProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "4Month") {
    var B9TotalProductChart = new Object();
    B9TotalProductChart.RenderTO = 'divProductArea';
    B9TotalProductChart.Title = 'B9 SMT近四月總產量';
    B9TotalProductChart.yAxisTitle = 'B9 SMT近四月總產量';
    B9TotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近四月總產量"
    },
                    {
                        type: 'line',
                        name: "B9 SMT近四月總產量",
                        color: '#89A54E'
                    }
    ];
    B9TotalProductChart.series = chartSeries;
    var B9ProduChart = setColumnAndTrendCharts(B9TotalProductChart);

    var B9ProductRateChart = new Object();
    B9ProductRateChart.RenderTO = 'divRateArea';
    B9ProductRateChart.Title = 'B9 SMT近四月總產量良率';
    B9ProductRateChart.yAxisTitle = 'B9 SMT近四月總產量良率';
    B9ProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9 SMT近四月總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    B9ProductRateChart.series = chartSeries;
    var B9RateChart = setYAxisFormatCharts(B9ProductRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getSMTTotalCapacityUrl, B9ProduChart, B9RateChart, B9TotalProductChart.xtext, B9ProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);

}

