//# sourceURL=Excalibur_SMT_CheckRealOut.js

var getSMTTotalCapacityUrl = "../FoxlinkSfc/getSMTTotalCapacity", modelNO = "Excalibur", isTotalCapacity = false;
if (timeInterval == "1Week") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Excalibur SMT近七天檢測站實際產生';
    totalProductChart.yAxisTitle = 'Excalibur SMT近七天檢測站實際產生';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近七天檢測站實際產生"
    },
                    {
                        type: 'line',
                        name: "Excalibur SMT近七天檢測站實際產生",
                        color: '#89A54E'
                    }
    ];
    totalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Excalibur SMT近七天檢測站實際產生良率';
    productRateChart.yAxisTitle = 'Excalibur SMT近七天檢測站實際產生良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur SMT近七天檢測站實際產生良率",
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
    totalProductChart.Title = 'Excalibur SMT近兩周檢測站實際產生';
    totalProductChart.yAxisTitle = 'Excalibur SMT近兩周檢測站實際產生';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近兩周檢測站實際產生"
    },
                    {
                        type: 'line',
                        name: "Excalibur SMT近兩周檢測站實際產生",
                        color: '#89A54E'
                    }
    ];
    totalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Excalibur SMT近兩周檢測站實際產生良率';
    productRateChart.yAxisTitle = 'Excalibur SMT近兩周檢測站實際產生良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur SMT近兩周檢測站實際產生良率",
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
    totalProductChart.Title = 'Excalibur SMT近一個月檢測站實際產生';
    totalProductChart.yAxisTitle = 'Excalibur SMT近一個月檢測站實際產生';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近一個月檢測站實際產生"
    },
                    {
                        type: 'line',
                        name: "Excalibur SMT近一個月檢測站實際產生",
                        color: '#89A54E'
                    }
    ];
    totalProductChart.series = chartSeries;
    var SMTProduChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Excalibur SMT近一個月檢測站實際產生良率';
    productRateChart.yAxisTitle = 'Excalibur SMT近一個月檢測站實際產生良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Excalibur SMT近一個月檢測站實際產生良率",
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
