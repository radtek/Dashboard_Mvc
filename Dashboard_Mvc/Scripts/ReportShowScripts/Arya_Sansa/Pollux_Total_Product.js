//# sourceURL=Pollux_Total_Product.js

//getNowDate()方法在PagesJS/CommonMethod.js文件中定義
var endDate = getNowDate(), startDate;

var getPackTotalCapacityUrl = "../FoxlinkSfc/getTotalCapacityByDate", modelNO = "Pollux";
if (timeInterval == "1Week") {
    startDate = getOneWeekBeforDate();
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Pollux近七天總產量';
    totalProductChart.yAxisTitle = 'Pollux近七天總產量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Pollux近七天總產量"
    },
                       {
                           type: 'line',
                           name: "Pollux近七天總產量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produtChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Pollux近七天總產量良率';
    productRateChart.yAxisTitle = 'Pollux近七天總產量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Pollux近七天總產量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacityByDate(getPackTotalCapacityUrl, produtChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, startDate, endDate);
}
if (timeInterval == "1Month") {
    startDate = getOneMonBeforDate();

    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Pollux日過站總量';
    totalProductChart.yAxisTitle = 'Pollux日過站總量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Pollux日過站總量"
    },
                       {
                           type: 'line',
                           name: "Pollux日過站總量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produtChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Pollux日過站總量良率';
    productRateChart.yAxisTitle = 'Pollux日過站總量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Pollux日過站總量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    //此方法在getReportDataMethod.js文件中
    getTotalCapacityByDate(getPackTotalCapacityUrl, produtChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, startDate, endDate);


}
