//# sourceURL=Crete_LineStatus.js

var modelType = "Crete", timeInterval = "1Month";
var getModelOeeUrl = "../FoxlinkSfc/getSMTOEEValue";
var getLineStatusUrl = "../FoxlinkSfc/getSMTLineStatus";
var getOneMonOeeUrl = "../FoxlinkSfc/getSMTOEETrendChart";
var CreteOeeValueChart = new Object();
CreteOeeValueChart.RenderTO = 'modelOEECharts';
CreteOeeValueChart.Title = "Crete SMT工段 近一個月稼動率";
CreteOeeValueChart.yAxisTitle = 'Crete SMT工段 近一個月稼動率';
CreteOeeValueChart.xtext = [];
var chartSeries = [{
    type: 'column',
    name: "Crete SMT工段 近一個月稼動率",
    tooltip: {
        valueSuffix: '%'
    }
},
    {
        type: 'line',
        name: "Crete SMT工段 近一個月稼動率",
        color: '#89A54E',
        tooltip: {
            valueSuffix: '%'
        }
    }
];
CreteOeeValueChart.series = chartSeries;
//setYAxisFormatCharts();getModelOeeAndLineStatus();方法在PagesJS/CommonMethod.js文件中
var CreteChart = setYAxisFormatCharts(CreteOeeValueChart);
getModelOeeAndLineStatus(modelType, getModelOeeUrl, getLineStatusUrl, getOneMonOeeUrl, CreteChart, CreteOeeValueChart.xtext, timeInterval);
