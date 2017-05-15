//# sourceURL=B9_TotalCapacity.js

var getPackTotalCapacityUrl = "../FoxlinkSfc/getPackTotalCapacity", modelNO = "B9", isTotalCapacity = true;
if (timeInterval == "7Day") {
    var B9TotalProductChart = new Object();
    B9TotalProductChart.RenderTO = 'divProductArea';
    B9TotalProductChart.Title = 'B9近七天總產量';
    B9TotalProductChart.yAxisTitle = 'B9近七天總產量';
    B9TotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近七天總產量"
    },
                       {
                           type: 'line',
                           name: "B9近七天總產量",
                           color: '#89A54E'
                       }
    ];
    B9TotalProductChart.series = chartSeries;
    var B9ProduChart = setColumnAndTrendCharts(B9TotalProductChart);

    var B9ProductRateChart = new Object();
    B9ProductRateChart.RenderTO = 'divRateArea';
    B9ProductRateChart.Title = 'B9近七天總產量良率';
    B9ProductRateChart.yAxisTitle = 'B9近七天總產量良率';
    B9ProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9近七天總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    B9ProductRateChart.series = chartSeries;
    var B9RateChart = setYAxisFormatCharts(B9ProductRateChart);
    //此方法在ReportDataMethod.js文件中
    getTotalCapacity(getPackTotalCapacityUrl, B9ProduChart, B9RateChart, B9TotalProductChart.xtext, B9ProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "2Week") {
    var B9TotalProductChart = new Object();
    B9TotalProductChart.RenderTO = 'divProductArea';
    B9TotalProductChart.Title = 'B9近兩周總產量';
    B9TotalProductChart.yAxisTitle = 'B9近兩周總產量';
    B9TotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近兩周總產量"
    },
                       {
                           type: 'line',
                           name: "B9近兩周總產量",
                           color: '#89A54E'
                       }
    ];
    B9TotalProductChart.series = chartSeries;
    var B9ProduChart = setColumnAndTrendCharts(B9TotalProductChart);

    var B9ProductRateChart = new Object();
    B9ProductRateChart.RenderTO = 'divRateArea';
    B9ProductRateChart.Title = 'B9近兩周總產量良率';
    B9ProductRateChart.yAxisTitle = 'B9近兩周總產量良率';
    B9ProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9近兩周總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    B9ProductRateChart.series = chartSeries;
    var B9RateChart = setYAxisFormatCharts(B9ProductRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getPackTotalCapacityUrl, B9ProduChart, B9RateChart, B9TotalProductChart.xtext, B9ProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}

if (timeInterval == "1Month") {
    var B9TotalProductChart = new Object();
    B9TotalProductChart.RenderTO = 'divProductArea';
    B9TotalProductChart.Title = 'B9日過站總量';
    B9TotalProductChart.yAxisTitle = 'B9日過站總量';
    B9TotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9日過站總量"
    },
                       {
                           type: 'line',
                           name: "B9日過站總量",
                           color: '#89A54E'
                       }
    ];
    B9TotalProductChart.series = chartSeries;
    var B9ProduChart = setColumnAndTrendCharts(B9TotalProductChart);

    var B9ProductRateChart = new Object();
    B9ProductRateChart.RenderTO = 'divRateArea';
    B9ProductRateChart.Title = 'B9日過站總量良率';
    B9ProductRateChart.yAxisTitle = 'B9日過站總量良率';
    B9ProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9日過站總量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    B9ProductRateChart.series = chartSeries;
    var B9RateChart = setYAxisFormatCharts(B9ProductRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getPackTotalCapacityUrl, B9ProduChart, B9RateChart, B9TotalProductChart.xtext, B9ProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}

if (timeInterval == "4Month") {
    var B9TotalProductChart = new Object();
    B9TotalProductChart.RenderTO = 'divProductArea';
    B9TotalProductChart.Title = 'B9近四月總產量';
    B9TotalProductChart.yAxisTitle = 'B9近四月總產量';
    B9TotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近四月總產量"
    },
                       {
                           type: 'line',
                           name: "B9近四月總產量",
                           color: '#89A54E'
                       }
    ];
    B9TotalProductChart.series = chartSeries;
    var B9ProduChart = setColumnAndTrendCharts(B9TotalProductChart);

    var B9ProductRateChart = new Object();
    B9ProductRateChart.RenderTO = 'divRateArea';
    B9ProductRateChart.Title = 'B9近四月總產量良率';
    B9ProductRateChart.yAxisTitle = 'B9近四月總產量良率';
    B9ProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9近四月總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    B9ProductRateChart.series = chartSeries;
    var B9RateChart = setYAxisFormatCharts(B9ProductRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getPackTotalCapacityUrl, B9ProduChart, B9RateChart, B9TotalProductChart.xtext, B9ProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);

}