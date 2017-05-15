//# sourceURL=Excalibur_LineStatus.js

var modelType = "Excalibur", timeInterval = "1Month";
var getModelOeeUrl = "../FoxlinkSfc/getSMTOEEValue";
var getLineStatusUrl = "../FoxlinkSfc/getSMTLineStatus";
var getOneMonOeeUrl = "../FoxlinkSfc/getSMTOEETrendChart";

var ExcaliburOeeValueChart = new Object();
ExcaliburOeeValueChart.RenderTO = 'modelOEECharts';
ExcaliburOeeValueChart.Title = "Excalibur SMT工段 近一個月稼動率";
ExcaliburOeeValueChart.yAxisTitle = 'Excalibur SMT工段 近一個月稼動率';
ExcaliburOeeValueChart.xtext = [];
var chartSeries = [{
    type: 'column',
    name: "Excalibur SMT工段 近一個月稼動率",
    tooltip: {
        valueSuffix: '%'
    }
},
    {
        type: 'line',
        name: "Excalibur SMT工段 近一個月稼動率",
        color: '#89A54E',
        tooltip: {
            valueSuffix: '%'
        }
    }
];
ExcaliburOeeValueChart.series = chartSeries;
//setYAxisFormatCharts();getModelOeeAndLineStatus();方法在PagesJS/CommonMethod.js文件中
var ExcaliburChart = setYAxisFormatCharts(ExcaliburOeeValueChart);
getModelOeeAndLineStatus(modelType, getModelOeeUrl, getLineStatusUrl, getOneMonOeeUrl, ExcaliburChart, ExcaliburOeeValueChart.xtext, timeInterval);