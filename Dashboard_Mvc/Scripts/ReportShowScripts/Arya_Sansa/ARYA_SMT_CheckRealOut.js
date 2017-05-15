//@ sourceURL=ARYA_SMT_CheckRealOut.js

var getSMTTotalCapacityUrl = "../FoxlinkSfc/getSMTTotalCapacity", modelNO = "Arya", isTotalCapacity = false;
if (timeInterval == "1Week") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Arya SMT近七天檢測站實際產生';
    totalProductChart.yAxisTitle = 'Arya SMT近七天檢測站實際產生';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Arya SMT近七天檢測站實際產生"
    },
                    {
                        type: 'line',
                        name: "Arya SMT近七天檢測站實際產生",
                        color: '#89A54E'
                    }
    ];
    totalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Arya SMT近七天檢測站實際產生良率';
    productRateChart.yAxisTitle = 'Arya SMT近七天檢測站實際產生良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Arya SMT近七天檢測站實際產生良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var SMTRateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}
if (timeInterval == "2Week") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Arya SMT近兩周檢測站實際產生';
    totalProductChart.yAxisTitle = 'Arya SMT近兩周檢測站實際產生';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Arya SMT近兩周檢測站實際產生"
    },
                    {
                        type: 'line',
                        name: "Arya SMT近兩周檢測站實際產生",
                        color: '#89A54E'
                    }
    ];
    totalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Arya SMT近兩周檢測站實際產生良率';
    productRateChart.yAxisTitle = 'Arya SMT近兩周檢測站實際產生良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Arya SMT近兩周檢測站實際產生良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var SMTRateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);

}
if (timeInterval == "1Month") {
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
                        name: "Arya SMT近一個月檢測站實際產生",
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
        name: "Arya SMT近一個月檢測站實際產生良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var SMTRateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacity(getSMTTotalCapacityUrl, SMTProduChart, SMTRateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);

}
if (timeInterval == "4Month") {
    var isTotalCapacity = true;
    var SMTTotalProductChart = new Object();
    SMTTotalProductChart.RenderTO = 'divProductArea';
    SMTTotalProductChart.Title = 'Arya SMT近四月總產量';
    SMTTotalProductChart.yAxisTitle = 'Arya SMT近四月總產量';
    SMTTotalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Arya SMT近四月總產量"
    },
                    {
                        type: 'line',
                        name: "Arya SMT近四月總產量",
                        color: '#89A54E'
                    }
    ];
    SMTTotalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(SMTTotalProductChart);

    var SMTProductRateChart = new Object();
    SMTProductRateChart.RenderTO = 'divRateArea';
    SMTProductRateChart.Title = 'Arya SMT近四月總產量良率';
    SMTProductRateChart.yAxisTitle = 'Arya SMT近四月總產量良率';
    SMTProductRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Arya SMT近四月總產量良率",
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