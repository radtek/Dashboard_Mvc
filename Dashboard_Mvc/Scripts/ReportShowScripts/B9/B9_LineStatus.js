//# sourceURL=B9_LineStatus.js

var modelType = "B9", timeInterval = "1Month";
var getModelOeeUrl = "../FoxlinkSfc/getSMTOEEValue";
var getLineStatusUrl = "../FoxlinkSfc/getSMTLineStatus";
var getOneMonOeeUrl = "../FoxlinkSfc/getSMTOEETrendChart";
var B9OeeValueChart = new Object();
B9OeeValueChart.RenderTO = 'modelOEECharts';
B9OeeValueChart.Title = "B9 SMT工段 近一個月稼動率";
B9OeeValueChart.yAxisTitle = 'B9 SMT工段 近一個月稼動率';
B9OeeValueChart.xtext = [];
var chartSeries = [{
    type: 'column',
    name: "B9 SMT工段 近一個月稼動率",
    tooltip: {
        valueSuffix: '%'
    }
},
    {
        type: 'line',
        name: "B9 SMT工段 近一個月稼動率",
        color: '#89A54E',
        tooltip: {
            valueSuffix: '%'
        }
    }
];
B9OeeValueChart.series = chartSeries;
//setYAxisFormatCharts();getModelOeeAndLineStatus();方法在PagesJS/CommonMethod.js文件中
var B9Chart = setYAxisFormatCharts(B9OeeValueChart);
getModelOeeAndLineStatus(modelType, getModelOeeUrl, getLineStatusUrl, getOneMonOeeUrl, B9Chart, B9OeeValueChart.xtext, timeInterval);
