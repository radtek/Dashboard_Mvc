//# sourceURL=Castor_Total_Product.js

var endDate = getNowDate(), startDate;

var getPackTotalCapacityUrl = "../FoxlinkSfc/getTotalCapacityByDate", modelNO = "Castor";
if (timeInterval == "1Week") {
    startDate = getOneWeekBeforDate();
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Castor近七天總產量';
    totalProductChart.yAxisTitle = 'Castor近七天總產量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Castor近一個月總產量"
    },
                       {
                           type: 'line',
                           name: "Castor近七天總產量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produtChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Castor近七天總產量良率';
    productRateChart.yAxisTitle = 'Castor近七天總產量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Castor近七天總產量良率",
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
    totalProductChart.Title = 'Castor日過站總量';
    totalProductChart.yAxisTitle = 'Castor日過站總量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Castor日過站總量"
    },
                       {
                           type: 'line',
                           name: "Castor日過站總量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produtChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Castor日過站總量良率';
    productRateChart.yAxisTitle = 'Castor日過站總量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Castor日過站總量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    getTotalCapacityByDate(getPackTotalCapacityUrl, produtChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, startDate, endDate);



}
