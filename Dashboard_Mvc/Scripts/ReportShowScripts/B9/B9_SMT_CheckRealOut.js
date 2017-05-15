//# sourceURL=B9_SMT_CheckRealOut.js

var getSMTTotalCapacityUrl = "../FoxlinkSfc/getSMTTotalCapacity", modelNO = "B9", isTotalCapacity = false;
if (timeInterval = "1Week") {
    var B9TotalProductChart = new Object();
    B9TotalProductChart.RenderTO = 'divProductArea';
    B9TotalProductChart.Title = 'B9 SMT近七天檢測站實際產生';
    B9TotalProductChart.yAxisTitle = 'B9 SMT近七天檢測站實際產生';
    B9TotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近七天檢測站實際產生"
    },
                    {
                        type: 'line',
                        name: "B9 SMT近七天檢測站實際產生",
                        color: '#89A54E'
                    }
    ];
    B9TotalProductChart.series = chartSeries;
    var B9ProduChart = setColumnAndTrendCharts(B9TotalProductChart);

    var B9ProductRateChart = new Object();
    B9ProductRateChart.RenderTO = 'divRateArea';
    B9ProductRateChart.Title = 'B9 SMT近七天檢測站實際產生良率';
    B9ProductRateChart.yAxisTitle = 'B9 SMT近七天檢測站實際產生良率';
    B9ProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9 SMT近七天檢測站實際產生良率",
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
if (timeInterval = "2Week") {
    var B9TotalProductChart = new Object();
    B9TotalProductChart.RenderTO = 'divProductArea';
    B9TotalProductChart.Title = 'B9 SMT近兩周檢測站實際產生';
    B9TotalProductChart.yAxisTitle = 'B9 SMT近兩周檢測站實際產生';
    B9TotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近兩周檢測站實際產生"
    },
                    {
                        type: 'line',
                        name: "B9 SMT近兩周檢測站實際產生",
                        color: '#89A54E'
                    }
    ];
    B9TotalProductChart.series = chartSeries;
    var B9ProduChart = setColumnAndTrendCharts(B9TotalProductChart);

    var B9ProductRateChart = new Object();
    B9ProductRateChart.RenderTO = 'divRateArea';
    B9ProductRateChart.Title = 'B9 SMT近兩周檢測站實際產生良率';
    B9ProductRateChart.yAxisTitle = 'B9 SMT近兩周檢測站實際產生良率';
    B9ProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9 SMT近兩周檢測站實際產生良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    B9ProductRateChart.series = chartSeries;
    var B9RateChart = setYAxisFormatCharts(B9ProductRateChart);
    getTotalCapacity(getSMTTotalCapacityUrl, B9ProduChart, B9RateChart, B9TotalProductChart.xtext, B9ProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);

}
if (timeInterval = "1Month") {
    var B9TotalProductChart = new Object();
    B9TotalProductChart.RenderTO = 'divProductArea';
    B9TotalProductChart.Title = 'B9 SMT近一個月檢測站實際產生';
    B9TotalProductChart.yAxisTitle = 'B9 SMT近一個月檢測站實際產生';
    B9TotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9 SMT近一個月檢測站實際產生"
    },
                    {
                        type: 'line',
                        name: "B9 SMT近一個月檢測站實際產生",
                        color: '#89A54E'
                    }
    ];
    B9TotalProductChart.series = chartSeries;
    var B9ProduChart = setColumnAndTrendCharts(B9TotalProductChart);

    var B9ProductRateChart = new Object();
    B9ProductRateChart.RenderTO = 'divRateArea';
    B9ProductRateChart.Title = 'B9 SMT近一個月檢測站實際產生良率';
    B9ProductRateChart.yAxisTitle = 'B9 SMT近一個月檢測站實際產生良率';
    B9ProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9 SMT近一個月檢測站實際產生良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    B9ProductRateChart.series = chartSeries;
    var B9RateChart = setYAxisFormatCharts(B9ProductRateChart);
    getTotalCapacity(getSMTTotalCapacityUrl, B9ProduChart, B9RateChart, B9TotalProductChart.xtext, B9ProductRateChart.xtext, modelNO, timeInterval, isTotalCapacity);

}