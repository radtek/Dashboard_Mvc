//# sourceURL=Taurus_By_NIStation.js

var getPackTotalCapacityUrl = "../FoxlinkSfc/getKSTaurusInStation", modelNO = "TAURUS(KS)", isTotalCapacity = false;

if (timeInterval == "1Month") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Taurus(KS)近一個月通過各NI站總數量';
    totalProductChart.yAxisTitle = 'Taurus(KS)近一個月通過各NI站總數量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(KS)近一個月通過各NI站總數量"
    },
                       {
                           type: 'line',
                           name: "Taurus(KS)近一個月通過各NI站總數量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Taurus(KS)近一個月通過各NI站';
    productRateChart.yAxisTitle = 'Taurus(KS)近一個月通過各NI站良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Taurus(KS)近一個月通過各NI站良率",
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