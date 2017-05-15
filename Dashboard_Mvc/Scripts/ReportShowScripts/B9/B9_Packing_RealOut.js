//# sourceURL=B9_Packing_RealOut.js

var getRealOutUrl = "../FoxlinkSfc/getPackTotalCapacity", modelNO = "B9", isTotalCapacity = false;
if (timeInterval == "1Week") {
    var RealOutChart = new Object();
    RealOutChart.RenderTO = 'divProductArea';
    RealOutChart.Title = 'B9近七天包裝站實際產出';
    RealOutChart.yAxisTitle = 'B9近七天包裝站實際產出';
    RealOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近七天包裝站實際產出"
    },
                       {
                           type: 'line',
                           name: "B9近七天包裝站實際產出",
                           color: '#89A54E'
                       }
    ];
    RealOutChart.series = chartSeries;
    var ModelRealOutChartChart = setColumnAndTrendCharts(RealOutChart);

    var RealOutRateChart = new Object();
    RealOutRateChart.RenderTO = 'divRateArea';
    RealOutRateChart.Title = 'B9近七天包裝站實際產出良率';
    RealOutRateChart.yAxisTitle = 'B9近七天包裝站實際產出良率';
    RealOutRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9近七天包裝站實際產出良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    RealOutRateChart.series = chartSeries;
    var ModelRateChart = setYAxisFormatCharts(RealOutRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getRealOutUrl, ModelRealOutChartChart,ModelRateChart, RealOutChart.xtext, RealOutRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "2Week") {
    var RealOutChart = new Object();
    RealOutChart.RenderTO = 'divProductArea';
    RealOutChart.Title = 'B9近兩周包裝站實際產出';
    RealOutChart.yAxisTitle = 'B9近兩周包裝站實際產出';
    RealOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近兩周包裝站實際產出"
    },
                       {
                           type: 'line',
                           name: "B9近兩周包裝站實際產出",
                           color: '#89A54E'
                       }
    ];
    RealOutChart.series = chartSeries;
    var ModelRealOutChartChart = setColumnAndTrendCharts(RealOutChart);

    var RealOutRateChart = new Object();
    RealOutRateChart.RenderTO = 'divRateArea';
    RealOutRateChart.Title = 'B9近兩周包裝站實際產出良率';
    RealOutRateChart.yAxisTitle = 'B9近兩周包裝站實際產出良率';
    RealOutRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9近兩周包裝站實際產出良率",
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
    RealOutChart.Title = 'B9近一個月包裝站實際產出';
    RealOutChart.yAxisTitle = 'B9近一個月包裝站實際產出';
    RealOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "B9近一個月包裝站實際產出"
    },
                       {
                           type: 'line',
                           name: "B9近一個月包裝站實際產出",
                           color: '#89A54E'
                       }
    ];
    RealOutChart.series = chartSeries;
    var ModelRealOutChartChart = setColumnAndTrendCharts(RealOutChart);

    var RealOutRateChart = new Object();
    RealOutRateChart.RenderTO = 'divRateArea';
    RealOutRateChart.Title = 'B9近一個月包裝站實際產出良率';
    RealOutRateChart.yAxisTitle = 'B9近一個月包裝站實際產出良率';
    RealOutRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "B9近一個月包裝站實際產出良率",
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