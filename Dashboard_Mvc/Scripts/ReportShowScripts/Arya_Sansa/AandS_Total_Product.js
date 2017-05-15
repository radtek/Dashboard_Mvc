//# sourceURL=AandS_Total_Product.js

var getPackTotalCapacityUrl = "../FoxlinkSfc/getPackTotalCapacity", modelNO = "A/S", isTotalCapacity = true;
if (timeInterval == "1Week") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'A/S & C/P近七天總產量';
    totalProductChart.yAxisTitle = 'A/S & C/P近七天總產量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P近七天總產量"
    },
                       {
                           type: 'line',
                           name: "A/S & C/P近七天總產量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'A/S & C/P近七天總產量良率';
    productRateChart.yAxisTitle = 'A/S & C/P近七天總產量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "A/S & C/P近七天總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "2Week") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'A/S & C/P近兩周總產量';
    totalProductChart.yAxisTitle = 'A/S & C/P近兩周總產量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P近兩周總產量"
    },
                       {
                           type: 'line',
                           name: "A/S & C/P近兩周總產量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'A/S & C/P近兩周總產量良率';
    productRateChart.yAxisTitle = 'A/S & C/P近兩周總產量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "A/S & C/P近兩周總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "1Month") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'A/S & C/P日過站總量';
    totalProductChart.yAxisTitle = 'A/S & C/P日過站總量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P日過站總量"
    },
                       {
                           type: 'line',
                           name: "A/S & C/P日過站總量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'A/S & C/P日過站總量良率';
    productRateChart.yAxisTitle = 'A/S & C/P日過站總量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "A/S & C/P日過站總量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "4Month") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'A/S & C/P近四月總產量';
    totalProductChart.yAxisTitle = 'A/S & C/P近四月總產量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "A/S & C/P近四月總產量"
    },
                       {
                           type: 'line',
                           name: "A/S & C/P近四月總產量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'A/S & C/P近四月總產量良率';
    productRateChart.yAxisTitle = 'A/S & C/P近四月總產量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "A/S & C/P近四月總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}