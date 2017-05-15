$(document).ready(function () {

    $("#AllOeeTitle,#SMTul,#PACKul").empty();
    document.getElementById("AllOeeTitle").innerHTML += "<H3>SMT 工段近一年稼動率</h3>";

    showInitPage();

    function showInitPage() {
        var getOeeValueUrl = '../FoxlinkSfc/getSMTUptimeByYear', modelNO = "", includeInvalidMachine = ""; // IncludeInvalidMachine = 0:包含無效機台
        var timeInterval = '1Month';
        var isIntevalExclude = false;       

        //機種碼為:EXCALIBUR(包含無效機台)

        var EXCALIBUROeeValueChart = new Object();
        EXCALIBUROeeValueChart.RenderTO = 'EXCALIBUROEEIncludeInvalidMachine';
        //EXCALIBUROeeValueChart.Title = "<a id ='EXCALIBURIncludeInvalidMachineLineOee' style='cursor:pointer'>EXCALIBUR SMT工段(包含無效機台)</a>";
        EXCALIBUROeeValueChart.Title = "EXCALIBUR SMT工段 (包含無效機台)";
        EXCALIBUROeeValueChart.yAxisTitle = 'EXCALIBUR SMT工段 近一年稼動率';
        EXCALIBUROeeValueChart.xtext = [];        

        var chartSeries = [{
            type: 'column',
            name: "EXCALIBUR SMT工段 近一年稼動率",
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            type: 'line',
            name: "EXCALIBUR SMT工段 近一年稼動率",
            color: '#89A54E',
            tooltip: {
                valueSuffix: '%'
            } 
        }
        ];      

        includeInvalidMachine = 0;
        //EXCALIBUROeeValueChart.plotOptions = chartplotOptions;
        EXCALIBUROeeValueChart.series = chartSeries;
        //setYAxisFormatChartsYear();方法在CommonMethod.js文件中
        var EXCALIBURChart = setYAxisFormatChartsYear(EXCALIBUROeeValueChart, "EXCALIBUR", includeInvalidMachine);
        getModelOeeValue("EXCALIBUR", EXCALIBURChart, EXCALIBUROeeValueChart.xtext, includeInvalidMachine);

        //機種碼為:EXCALIBUR(不包含無效機台)
        var EXCALIBUROeeValueChartNoIncluse = new Object();
        EXCALIBUROeeValueChartNoIncluse.RenderTO = 'EXCALIBUROEE';
        EXCALIBUROeeValueChartNoIncluse.Title = "EXCALIBUR SMT工段(不包含無效機台)";
        EXCALIBUROeeValueChartNoIncluse.yAxisTitle = 'EXCALIBUR SMT工段 近一年稼動率';
        EXCALIBUROeeValueChartNoIncluse.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "EXCALIBUR SMT工段 近一年稼動率",
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            type: 'line',
            name: "EXCALIBUR SMT工段 近一年稼動率",
            color: '#89A54E',
            tooltip: {
                valueSuffix: '%'
            }
        }
        ];
        includeInvalidMachine = 1;
        EXCALIBUROeeValueChartNoIncluse.series = chartSeries;
        //setYAxisFormatChartsYear();方法在CommonMethod.js文件中
        var EXCALIBURChartNoInclude =setYAxisFormatChartsYear(EXCALIBUROeeValueChartNoIncluse, "EXCALIBUR", includeInvalidMachine);
        getModelOeeValue("EXCALIBUR", EXCALIBURChartNoInclude, EXCALIBUROeeValueChartNoIncluse.xtext, includeInvalidMachine);// IncludeInvalidMachine = 1:不包含無效機台
        
        //機種碼為:AS(包含無效機台)
        var ASOeeValueChart = new Object();
        ASOeeValueChart.RenderTO = 'ASOEEIncludeInvalidMachine';
        ASOeeValueChart.Title = "AS SMT工段(包含無效機台)";
        ASOeeValueChart.yAxisTitle = 'AS SMT工段 近一年稼動率';
        ASOeeValueChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "AS SMT工段 近一年稼動率",
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            type: 'line',
            name: "AS SMT工段 近一年稼動率",
            color: '#89A54E',
            tooltip: {
                valueSuffix: '%'
            }
        }
        ];
        includeInvalidMachine = 0;
        ASOeeValueChart.series = chartSeries;
        //setYAxisFormatChartsYear();方法在CommonMethod.js文件中
        var ASChart = setYAxisFormatChartsYear(ASOeeValueChart, "AS", includeInvalidMachine);
        getModelOeeValue("AS", ASChart, ASOeeValueChart.xtext, includeInvalidMachine);

        //機種碼為:AS(不包含無效機台)
        var ASOeeValueChartNoIncluse= new Object();
        ASOeeValueChartNoIncluse.RenderTO = 'ASOEE';
        ASOeeValueChartNoIncluse.Title = "AS SMT工段(不包含無效機台)";
        ASOeeValueChartNoIncluse.yAxisTitle = 'AS SMT工段 近一年稼動率';
        ASOeeValueChartNoIncluse.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "AS SMT工段 近一年稼動率",
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            type: 'line',
            name: "AS SMT工段 近一年稼動率",
            color: '#89A54E',
            tooltip: {
                valueSuffix: '%'
            }
        }
        ];
        includeInvalidMachine = 1
        ASOeeValueChartNoIncluse.series = chartSeries;
        //setYAxisFormatChartsYear();方法在CommonMethod.js文件中
        var ASChartNoInclude = setYAxisFormatChartsYear(ASOeeValueChartNoIncluse, "AS", includeInvalidMachine);
        getModelOeeValue("AS", ASChartNoInclude, ASOeeValueChartNoIncluse.xtext, includeInvalidMachine);// IncludeInvalidMachine = 1:不包含無效機台

        //機種碼為:HM(包含無效機台)
        var HMOeeValueChart = new Object();
        HMOeeValueChart.RenderTO = 'HMOEEIncludeInvalidMachine';
        HMOeeValueChart.Title = "HM SMT工段(包含無效機台)";
        HMOeeValueChart.yAxisTitle = 'HM SMT工段 近一年稼動率';
        HMOeeValueChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "HM SMT工段 近一年稼動率",
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            type: 'line',
            name: "HM SMT工段 近一年稼動率",
            color: '#89A54E',
            tooltip: {
                valueSuffix: '%'
            }
        }
        ];
        includeInvalidMachine = 0;
        HMOeeValueChart.series = chartSeries;
        //setYAxisFormatChartsYear();方法在CommonMethod.js文件中
        var HMChart = setYAxisFormatChartsYear(HMOeeValueChart, "HM", includeInvalidMachine);
        getModelOeeValue("HM", HMChart, HMOeeValueChart.xtext, includeInvalidMachine);
        //機種碼為:HM(不包含無效機台)
        var HMOeeValueChartNoIncluse = new Object();
        HMOeeValueChartNoIncluse.RenderTO = 'HMOEE';
        HMOeeValueChartNoIncluse.Title = "HM SMT工段(不包含無效機台)";
        HMOeeValueChartNoIncluse.yAxisTitle = 'HM SMT工段 近一年稼動率';
        HMOeeValueChartNoIncluse.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "HM SMT工段 近一年稼動率",
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            type: 'line',
            name: "HM SMT工段 近一年稼動率",
            color: '#89A54E',
            tooltip: {
                valueSuffix: '%'
            }
        }
        ];
        includeInvalidMachine = 1
        HMOeeValueChartNoIncluse.series = chartSeries;
        //setYAxisFormatChartsYear();方法在CommonMethod.js文件中
        var HMChartNoInclude = setYAxisFormatChartsYear(HMOeeValueChartNoIncluse, "HM", includeInvalidMachine);
        getModelOeeValue("HM", HMChartNoInclude, HMOeeValueChartNoIncluse.xtext, includeInvalidMachine);// IncludeInvalidMachine = 1:不包含無效機台

        //機種碼為:B9(包含無效機台)
        var B9OeeValueChart = new Object();
        B9OeeValueChart.RenderTO = 'B9OEEIncludeInvalidMachine';
        B9OeeValueChart.Title = "B9 SMT工段(包含無效機台)";
        B9OeeValueChart.yAxisTitle = 'B9 SMT工段 近一年稼動率';
        B9OeeValueChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "B9 SMT工段 近一年稼動率",
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            type: 'line',
            name: "B9 SMT工段 近一年稼動率",
            color: '#89A54E',
            tooltip: {
                valueSuffix: '%'
            }
        }
        ];
        includeInvalidMachine = 0;
        B9OeeValueChart.series = chartSeries;
        //setYAxisFormatChartsYear();方法在CommonMethod.js文件中
        var B9Chart = setYAxisFormatChartsYear(B9OeeValueChart, "B9", includeInvalidMachine);
        getModelOeeValue("B9", B9Chart, B9OeeValueChart.xtext, includeInvalidMachine);
        //機種碼為:B9(不包含無效機台)
        var B9OeeValueChartNoIncluse = new Object();
        B9OeeValueChartNoIncluse.RenderTO = 'B9OEE';
        B9OeeValueChartNoIncluse.Title = "B9 SMT工段(不包含無效機台)";
        B9OeeValueChartNoIncluse.yAxisTitle = 'B9 SMT工段 近一年稼動率';
        B9OeeValueChartNoIncluse.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "B9 SMT工段 近一年稼動率",
            tooltip: {
                valueSuffix: '%'
            }
        }, {
            type: 'line',
            name: "B9 SMT工段 近一年稼動率",
            color: '#89A54E',
            tooltip: {
                valueSuffix: '%'
            }
        }
        ];
        includeInvalidMachine = 1
        B9OeeValueChartNoIncluse.series = chartSeries;
        //setYAxisFormatChartsYear();方法在CommonMethod.js文件中
        var B9ChartNoInclude = setYAxisFormatChartsYear(B9OeeValueChartNoIncluse, "B9", includeInvalidMachine);
        getModelOeeValue("B9", B9ChartNoInclude, B9OeeValueChartNoIncluse.xtext, includeInvalidMachine);// IncludeInvalidMachine = 1:不包含無效機台

        function getModelOeeValue(modelNO, chart, xtext, includeInvalidMachine) {//IncludeInvalidMachine=0  包含無效機台
            $.ajax({
                type: 'POST',
                url: getOeeValueUrl,
                dataType: "json",
                data: "{'modelNO':'" + modelNO + "','includeInvalidMachine':'" + includeInvalidMachine + "'}",
                beforeSend: function (x) {
                    x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                },
                success: function (json) {
                    for (var key in json.Table) {
                        var yValue = json.Table[key].AVG_UPTIME;
                        //var showYValue = parseFloat((yValue * 100).toFixed(3));
                        var showYValue = parseFloat((yValue * 1).toFixed(3));
                        json.Table[key].y = showYValue;
                        xtext.push(json.Table[key].WORK_DATE);
                    }
                    chart.series[0].setData(json.Table);
                    chart.series[1].setData(json.Table);       
                    
                },
                error: function (x, e) {
                    alert(x.responseText);
                }
            });
        }
    }    
});

