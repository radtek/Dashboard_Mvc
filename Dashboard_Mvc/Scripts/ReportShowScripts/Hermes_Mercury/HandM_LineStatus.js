//# sourceURL=HandM_LineStatus.js

var modelType = "H/M", timeInterval = "1Month";
var getModelOeeUrl = "../FoxlinkSfc/getSMTOEEValue";
var getLineStatusUrl = "../FoxlinkSfc/getSMTLineStatus";
var getOneMonOeeUrl = "../FoxlinkSfc/getSMTOEETrendChart";
var HandMOeeValueChart = new Object();
HandMOeeValueChart.RenderTO = 'modelOEECharts';
HandMOeeValueChart.Title = "H/M SMT工段 近一個月稼動率";
HandMOeeValueChart.yAxisTitle = 'H/M SMT工段 近一個月稼動率';
HandMOeeValueChart.xtext = [];
var chartSeries = [{
    type: 'column',
    name: "H/M SMT工段 近一個月稼動率",
    tooltip: {
        valueSuffix: '%'
    }
},
    {
        type: 'line',
        name: "H/M SMT工段 近一個月稼動率",
        color: '#89A54E',
        tooltip: {
            valueSuffix: '%'
        }
    }
];
HandMOeeValueChart.series = chartSeries;
//setYAxisFormatCharts();getModelOeeAndLineStatus();方法在PagesJS/CommonMethod.js文件中
var HandMChart = setYAxisFormatCharts(HandMOeeValueChart);
getModelOeeAndLineStatus(modelType, getModelOeeUrl, getLineStatusUrl, getOneMonOeeUrl, HandMChart, HandMOeeValueChart.xtext, timeInterval);
