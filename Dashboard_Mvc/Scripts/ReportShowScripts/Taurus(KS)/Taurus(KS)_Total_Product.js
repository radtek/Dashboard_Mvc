//# sourceURL=Taurus(KS)_Total_Product.js

var getPackTotalCapacityUrl = "../FoxlinkSfc/getKSTaurusInStation", modelNO = "TAURUS(KS)", isTotalCapacity = true;

if (timeInterval == "1Month") {
    var totalProductChart = new Object();
    totalProductChart.RenderTO = 'divProductArea';
    totalProductChart.Title = 'Taurus(KS)日過站總量';
    totalProductChart.yAxisTitle = 'Taurus(LK)日過站總量';
    totalProductChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(KS)日過站總量"
    },
                       {
                           type: 'line',
                           name: "Taurus(KS)日過站總量",
                           color: '#89A54E'
                       }
    ];
    totalProductChart.series = chartSeries;
    var produChart = setColumnAndTrendCharts(totalProductChart);

    var productRateChart = new Object();
    productRateChart.RenderTO = 'divRateArea';
    productRateChart.Title = 'Taurus(KS)日過站總量良率';
    productRateChart.yAxisTitle = 'Taurus(KS)日過站總量良率';
    productRateChart.xtext = [];
    var chartSeries = [{
        type: 'line',
        name: "Taurus(KS)日過站總量良率",
        tooltip: {
            valueSuffix: '%'
        }
    }
    ];
    productRateChart.series = chartSeries;
    var rateChart = setYAxisFormatCharts(productRateChart);
    getTotalCapacity(getPackTotalCapacityUrl, produChart, rateChart, totalProductChart.xtext, productRateChart.xtext, modelNO, timeInterval, isTotalCapacity);
}