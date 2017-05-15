//# sourceURL=Taurus(LK)_Total_Product.js

var getPackTotalCapacityUrl = "../FoxlinkSfc/getPackTotalCapacity", modelNO = "Taurus", isTotalCapacity = true;
if (timeInterval == "1Week") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Taurus(LK)近七天總產量';
    totalProductChart.yAxisTitle = 'Taurus(LK)近七天總產量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近七天總產量"
    },
                       {
                           type: 'line',
                           name: "Taurus(LK)近七天總產量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Taurus(LK)近七天總產量良率';
    productRateChart.yAxisTitle = 'Taurus(LK)近七天總產量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Taurus(LK)近七天總產量良率",
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
    totalProductChart.Title = 'Taurus(LK)近兩周總產量';
    totalProductChart.yAxisTitle = 'Taurus(LK)近兩周總產量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近兩周總產量"
    },
                       {
                           type: 'line',
                           name: "Taurus(LK)近兩周總產量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Taurus(LK)近兩周總產量良率';
    productRateChart.yAxisTitle = 'Taurus(LK)近兩周總產量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Taurus(LK)近兩周總產量良率",
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
    totalProductChart.Title = 'Taurus(LK)日過站總量';
    totalProductChart.yAxisTitle = 'Taurus(LK)日過站總量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)日過站總量"
    },
                       {
                           type: 'line',
                           name: "Taurus(LK)日過站總量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Taurus(LK)日過站總量良率';
    productRateChart.yAxisTitle = 'Taurus(LK)日過站總量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Taurus(LK)日過站總量良率",
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
    totalProductChart.Title = 'Taurus(LK)近四月總產量';
    totalProductChart.yAxisTitle = 'Taurus(LK)近四月總產量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近四月總產量"
    },
                       {
                           type: 'line',
                           name: "Taurus(LK)近四月總產量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Taurus(LK)近四月總產量良率';
    productRateChart.yAxisTitle = 'Taurus(LK)近四月總產量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Taurus(LK)近四月總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}