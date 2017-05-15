//# sourceURL=ARYA_Packing_RealOut.js

var getRealOutUrl = "../FoxlinkSfc/getPackTotalCapacity", modelNO = "Arya", isTotalCapacity = false;
if (timeInterval == "1Week") {
    var RealOutChart = new Object();
    RealOutChart.RenderTO = 'divProductArea';
    RealOutChart.Title = 'Arya近七天包裝站實際產出';
    RealOutChart.yAxisTitle = 'Arya近七天包裝站實際產出';
    RealOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Arya近七天包裝站實際產出"
    },
                       {
                           type: 'line',
                           name: "Arya近七天包裝站實際產出",
                           color: '#89A54E'
                       }
    ];
    RealOutChart.series = chartSeries;
    var ModelRealOutChartChart = setColumnAndTrendCharts(RealOutChart);

    var RealOutRateChart = new Object();
    RealOutRateChart.RenderTO = 'divRateArea';
    RealOutRateChart.Title = 'Arya近七天包裝站實際產出良率';
    RealOutRateChart.yAxisTitle = 'Arya近七天包裝站實際產出良率';
    RealOutRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Arya近七天包裝站實際產出良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    RealOutRateChart.series = chartSeries;
    var ModelRateChart = setYAxisFormatCharts(RealOutRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getRealOutUrl, ModelRealOutChartChart, ModelRateChart, RealOutChart.xtext, RealOutRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "2Week") {
    var RealOutChart = new Object();
    RealOutChart.RenderTO = 'divProductArea';
    RealOutChart.Title = 'Arya近兩周包裝站實際產出';
    RealOutChart.yAxisTitle = 'Arya近兩周包裝站實際產出';
    RealOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Arya近兩周包裝站實際產出"
    },
                       {
                           type: 'line',
                           name: "Arya近兩周包裝站實際產出",
                           color: '#89A54E'
                       }
    ];
    RealOutChart.series = chartSeries;
    var ModelRealOutChartChart = setColumnAndTrendCharts(RealOutChart);

    var RealOutRateChart = new Object();
    RealOutRateChart.RenderTO = 'divRateArea';
    RealOutRateChart.Title = 'Arya近兩周包裝站實際產出良率';
    RealOutRateChart.yAxisTitle = 'Arya近兩周包裝站實際產出良率';
    RealOutRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Arya近兩周包裝站實際產出良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    RealOutRateChart.series = chartSeries;
    var ModelRateChart = setYAxisFormatCharts(RealOutRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getRealOutUrl, ModelRealOutChartChart, ModelRateChart, RealOutChart.xtext, RealOutRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "1Month") {
    var RealOutChart = new Object();
    RealOutChart.RenderTO = 'divProductArea';
    RealOutChart.Title = 'Arya近一個月包裝站實際產出';
    RealOutChart.yAxisTitle = 'Arya近一個月包裝站實際產出';
    RealOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Arya近一個月包裝站實際產出"
    },
                       {
                           type: 'line',
                           name: "Arya近一個月包裝站實際產出",
                           color: '#89A54E'
                       }
    ];
    RealOutChart.series = chartSeries;
    var ModelRealOutChartChart = setColumnAndTrendCharts(RealOutChart);

    var RealOutRateChart = new Object();
    RealOutRateChart.RenderTO = 'divRateArea';
    RealOutRateChart.Title = 'Arya近一個月包裝站實際產出良率';
    RealOutRateChart.yAxisTitle = 'Arya近一個月包裝站實際產出良率';
    RealOutRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Arya近一個月包裝站實際產出良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    RealOutRateChart.series = chartSeries;
    var ModelRateChart = setYAxisFormatCharts(RealOutRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getRealOutUrl, ModelRealOutChartChart, ModelRateChart, RealOutChart.xtext, RealOutRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "4Month") {
    isTotalCapacity = true;
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
                           name: "Arya近四月總產量",
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
        name: "Arya近四月總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getRealOutUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}