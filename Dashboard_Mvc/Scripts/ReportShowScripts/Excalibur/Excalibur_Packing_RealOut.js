//# sourceURL=Excalibur_Packing_RealOut.js

var getRealOutUrl = "../FoxlinkSfc/getPackTotalCapacity", modelNO = "Excalibur", isTotalCapacity = false;
if (timeInterval == "1Week") {
    var RealOutChart = new Object();
    RealOutChart.RenderTO = 'divProductArea';
    RealOutChart.Title = 'Excalibur近七天包裝站實際產出';
    RealOutChart.yAxisTitle = 'Excalibur近七天包裝站實際產出';
    RealOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur近七天包裝站實際產出"
    },
                       {
                           type: 'line',
                           name: "Excalibur近七天包裝站實際產出",
                           color: '#89A54E'
                       }
    ];
    RealOutChart.series = chartSeries;
    var ModelRealOutChartChart = setColumnAndTrendCharts(RealOutChart);

    var RealOutRateChart = new Object();
    RealOutRateChart.RenderTO = 'divRateArea';
    RealOutRateChart.Title = 'Excalibur近七天包裝站實際產出良率';
    RealOutRateChart.yAxisTitle = 'Excalibur近七天包裝站實際產出良率';
    RealOutRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur近七天包裝站實際產出良率",
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
    RealOutChart.Title = 'Excalibur近兩周包裝站實際產出';
    RealOutChart.yAxisTitle = 'Excalibur近兩周包裝站實際產出';
    RealOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur近兩周包裝站實際產出"
    },
                       {
                           type: 'line',
                           name: "Excalibur近兩周包裝站實際產出",
                           color: '#89A54E'
                       }
    ];
    RealOutChart.series = chartSeries;
    var ModelRealOutChartChart = setColumnAndTrendCharts(RealOutChart);

    var RealOutRateChart = new Object();
    RealOutRateChart.RenderTO = 'divRateArea';
    RealOutRateChart.Title = 'Excalibur近兩周包裝站實際產出良率';
    RealOutRateChart.yAxisTitle = 'Excalibur近兩周包裝站實際產出良率';
    RealOutRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur近兩周包裝站實際產出良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    RealOutRateChart.series = chartSeries;
    var ModelRateChart = setYAxisFormatCharts(RealOutRateChart);
    getTotalCapacity(getRealOutUrl, ModelRealOutChartChart, ModelRateChart, RealOutChart.xtext, RealOutRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "1Month") {
    var RealOutChart = new Object();
    RealOutChart.RenderTO = 'divProductArea';
    RealOutChart.Title = 'Excalibur近一個月包裝站實際產出';
    RealOutChart.yAxisTitle = 'Excalibur近一個月包裝站實際產出';
    RealOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur近一個月包裝站實際產出"
    },
                       {
                           type: 'line',
                           name: "Excalibur近一個月包裝站實際產出",
                           color: '#89A54E'
                       }
    ];
    RealOutChart.series = chartSeries;
    var ModelRealOutChartChart = setColumnAndTrendCharts(RealOutChart);

    var RealOutRateChart = new Object();
    RealOutRateChart.RenderTO = 'divRateArea';
    RealOutRateChart.Title = 'Excalibur近一個月包裝站實際產出良率';
    RealOutRateChart.yAxisTitle = 'Excalibur近一個月包裝站實際產出良率';
    RealOutRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur近一個月包裝站實際產出良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    RealOutRateChart.series = chartSeries;
    var ModelRateChart = setYAxisFormatCharts(RealOutRateChart);
    getTotalCapacity(getRealOutUrl, ModelRealOutChartChart, ModelRateChart, RealOutChart.xtext, RealOutRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}