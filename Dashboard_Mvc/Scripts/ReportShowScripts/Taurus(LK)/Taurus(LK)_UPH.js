//# sourceURL=Taurus(LK)_UPH.js

var getModeUPHUrl = "../FoxlinkSfc/getPackUPHByModelNO", modelNO = "Taurus";
if (timeInterval == "1Week") {
    var UPHChart = new Object();
    UPHChart.RenderTO = 'divProductArea';
    UPHChart.Title = 'Taurus(LK)近七天的UPH';
    UPHChart.yAxisTitle = 'Taurus(LK)近七天的UPH';
    UPHChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近七天的UPH"
    },
            {
                type: 'line',
                name: "Taurus(LK)近七天的UPH",
                color: '#89A54E'
            }
    ];
    UPHChart.series = chartSeries;
    var modelUPHChart = setColumnAndTrendCharts(UPHChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModeUPHUrl, modelUPHChart, UPHChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var UPHChart = new Object();
    UPHChart.RenderTO = 'divProductArea';
    UPHChart.Title = 'Taurus(LK)近兩周的UPH';
    UPHChart.yAxisTitle = 'Taurus(LK)近兩周的UPH';
    UPHChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近兩周的UPH"
    },
            {
                type: 'line',
                name: "Taurus(LK)近兩周的UPH",
                color: '#89A54E'
            }
    ];
    UPHChart.series = chartSeries;
    var modelUPHChart = setColumnAndTrendCharts(UPHChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModeUPHUrl, modelUPHChart, UPHChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "1Month") {
    var UPHChart = new Object();
    UPHChart.RenderTO = 'divProductArea';
    UPHChart.Title = 'Taurus(LK)近一個月的UPH';
    UPHChart.yAxisTitle = 'Taurus(LK)近一個月的UPH';
    UPHChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Taurus(LK)近一個月的UPH"
    },
            {
                type: 'line',
                name: "Taurus(LK)近一個月的UPH",
                color: '#89A54E'
            }
    ];
    UPHChart.series = chartSeries;
    var modelUPHChart = setColumnAndTrendCharts(UPHChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getModeUPHUrl, modelUPHChart, UPHChart.xtext, modelNO, timeInterval);
}