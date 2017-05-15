//# sourceURL=AandS_LineStatus.js
var modelType = "A/S", timeInterval = "1Month";
var getModelOeeUrl = "../FoxlinkSfc/getSMTOEEValue";
var getLineStatusUrl = "../FoxlinkSfc/getSMTLineStatus";
var getOneMonOeeUrl = "../FoxlinkSfc/getSMTOEETrendChart";
var AandSOeeValueChart = new Object();
AandSOeeValueChart.RenderTO = 'modelOEECharts';
AandSOeeValueChart.Title = "A/S & C/P SMT工段 近一個月稼動率";
AandSOeeValueChart.yAxisTitle = 'A/S & C/P SMT工段 近一個月稼動率';
AandSOeeValueChart.xtext = [];
var chartSeries = [{
    type: 'column',
    name: "A/S & C/P SMT工段 近一個月稼動率",
    tooltip: {
        valueSuffix: '%'
    }
},
    {
        type: 'line',
        name: "A/S & C/P SMT工段 近一個月稼動率",
        color: '#89A54E',
        tooltip: {
            valueSuffix: '%'
        }
    }
];
AandSOeeValueChart.series = chartSeries;
//setYAxisFormatCharts();getModelOeeAndLineStatus();方法在PagesJS/CommonMethod.js文件中
var AandSChart = setYAxisFormatCharts(AandSOeeValueChart);
getModelOeeAndLineStatus(modelType, getModelOeeUrl, getLineStatusUrl, getOneMonOeeUrl, AandSChart, AandSOeeValueChart.xtext, timeInterval);
