//# sourceURL=Excalibur_SMT_CheckPostOut.js

var getSMTPostOutUrl = "../FoxlinkSfc/getSMTTotalProduction", modelNO = "Excalibur";
if (timeInterval == "1Week") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'Excalibur SMT近七天檢測站總過帳量';
    postOutChart.yAxisTitle = 'Excalibur SMT近七天檢測站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近七天檢測站總過帳量"
    },
            {
                type: 'line',
                name: "Excalibur SMT近七天檢測站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var SMTPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getSMTPostOutUrl, SMTPostOutChart, postOutChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "2Week") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'Excalibur SMT近兩周檢測站總過帳量';
    postOutChart.yAxisTitle = 'Excalibur SMT近兩周檢測站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近兩周檢測站總過帳量"
    },
            {
                type: 'line',
                name: "Excalibur SMT近兩周檢測站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var SMTPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getSMTPostOutUrl, SMTPostOutChart, postOutChart.xtext, modelNO, timeInterval);
}
if (timeInterval == "1Month") {
    var postOutChart = new Object();
    postOutChart.RenderTO = 'divProductArea';
    postOutChart.Title = 'Excalibur SMT近一個月檢測站總過帳量';
    postOutChart.yAxisTitle = 'Excalibur SMT近一個月檢測站總過帳量';
    postOutChart.xtext = [];
    var chartSeries = [{
        type: 'column',
        name: "Excalibur SMT近一個月檢測站總過帳量"
    },
            {
                type: 'line',
                name: "Excalibur SMT近一個月檢測站總過帳量",
                color: '#89A54E'
            }
    ];
    postOutChart.series = chartSeries;
    var SMTPostOutChart = setColumnAndTrendCharts(postOutChart);
    //此方法在getReportDataMethod.js文件中
    getModelPostOut(getSMTPostOutUrl, SMTPostOutChart, postOutChart.xtext, modelNO, timeInterval);

}