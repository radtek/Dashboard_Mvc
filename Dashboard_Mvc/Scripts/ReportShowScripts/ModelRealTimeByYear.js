$(document).ready(function () {

    //為了每個chart圖push進數組的數據不相互影響，所以每個chart圖用不同的數組表示
    var testRatexValue = [];
    var testRateyValue = [];

    var testCapaxValue = [];
    var testCapayValue = [];

    var smtRatexValue = [];
    var smtRateyValue = [];

    var smtCapaxValue = [];
    var smtCapayValue = [];

    var testUPHxValue = [];
    var testUPHyValue = [];

    var smtUPHxValue = [];
    var smtUPHyValue = [];

    var shipmentxValue = [];
    var shipmentyValue = [];

    var lineNumxValue = [];
    var lineNumyValue = [];

    var smtUptimeInvalidxValue = [];
    var smtUptimeInvalidyValue = [];

    var smtUptimexValue = [];
    var smtUptimeyValue = [];

    var xPlotLines = [];

    var modelNo = "AS";//傳到procedure裡的機種名稱，如:AS
    var selectModelType = 'A/S&C/P'; //顯示在頁面上的機種名稱,    如A/S&C/P
    var getUrl = "",showChartType = "",isSMT=false;
    showPage(modelNo);
    $('.selectModelType').click(function () {
        selectModelType = $(this).text();
        modelNo = $(this).attr("id");
        showPage(modelNo);
    });

    //setInterval(function () {
    //    showPage(modelNo);
    //}, 50000);

  
    function showPage(modelNo) {
        testRatexValue.splice(0, testRatexValue.length);
        testRateyValue.splice(0, testRateyValue.length);

        testCapaxValue.splice(0, testCapaxValue.length);
        testCapayValue.splice(0, testCapayValue.length);

        smtRatexValue.splice(0, smtRatexValue.length);
        smtRateyValue.splice(0, smtRateyValue.length);

        smtCapaxValue.splice(0, smtCapaxValue.length);
        smtCapayValue.splice(0, smtCapayValue.length);

        testUPHxValue.splice(0, testUPHxValue.length);
        testUPHyValue.splice(0, testUPHyValue.length);

        smtUPHxValue.splice(0, smtUPHxValue.length);
        smtUPHyValue.splice(0, smtUPHyValue.length);

        shipmentxValue.splice(0,shipmentxValue.length);
        shipmentyValue.splice(0, shipmentyValue.length);
        
        lineNumxValue.splice(0, lineNumxValue.length);
        lineNumyValue.splice(0, lineNumyValue.length);

        smtUptimeInvalidxValue.splice(0, smtUptimeInvalidxValue.length);
        smtUptimeInvalidyValue.splice(0, smtUptimeInvalidyValue.length);

        smtUptimexValue.splice(0, smtUptimexValue.length);
        smtUptimeyValue.splice(0, smtUptimeyValue.length);
        
        xPlotLines.splice(0, xPlotLines.length);

        $("#modelReportTitle").empty();
        document.getElementById("modelReportTitle").innerHTML += "<h3>" + selectModelType + "機種資訊信息</h3>";

        getUrl = 'Home/getTestCapacityByYear';
        showChartType = 'testRateChart';
        var rateChart = new Object();
        rateChart.RenderTO = 'testYieldRate';
        rateChart.Title = selectModelType + "機種測試站良率";
        rateChart.yAxisTitle = selectModelType + '機種測試站良率';
        rateChart.xPlotLines = [{
            color: 'red',
            dashStyle: 'solid',
            value:90,
            width:2,               
            label: {
                text: '達標線90%',     
                align: 'left',              
                x: 0,                        
                style: {
                    //color: '#FFFFFF',
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }];
        getDataTOSeries(modelNo, getUrl, showChartType);
        rateChart.xValue = testRatexValue;
        var chartSeries = [{
            name: selectModelType + '機種測試站良率',
            data: testRateyValue,
            tooltip: {
                valueSuffix: '%'
            },
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'rateChart';
                    isSMT = false;
                  var workMonth = event.point.category; 
                  showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                   // alert(this.data[event.point.category].y); // Y轴值
                }
            }
        }];
        rateChart.series = chartSeries;
        showModelChart(rateChart,showChartType);

        getUrl = 'Home/getTestCapacityByYear';
        showChartType = 'testCapaChart';
        var capacityChart = new Object();
        capacityChart.RenderTO = 'testCapacity';
        capacityChart.Title = selectModelType + "機種測試站產量";
        capacityChart.yAxisTitle = selectModelType + '機種測試站產量';
        capacityChart.xPlotLines = [{
            color: 'red',
            dashStyle: 'solid',
            value: 800,
            width: 2,
            label: {
                text: '達標標準800',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }];
        getDataTOSeries(modelNo, getUrl, showChartType);
        capacityChart.xValue = testCapaxValue;
        var chartSeries = [{
            name: selectModelType + '測試站產量',
            data: testCapayValue,
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'capaChart';
                    isSMT = false;
                    var workMonth = event.point.category; 
                    showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                }
            }
        }];
        capacityChart.series = chartSeries;
        showModelChart(capacityChart,showChartType);

        getUrl = 'Home/getSMTCapacityByYear';
        showChartType = 'smtRateChart';
        var smtRateChart = new Object();
        smtRateChart.RenderTO = 'SMTYieldRate';
        smtRateChart.Title = selectModelType + "機種SMT段良率";
        smtRateChart.yAxisTitle = selectModelType + '機種SMT段良率';
        smtRateChart.xPlotLines = [{
            color: 'red',
            dashStyle: 'solid',
            value: 90,
            width: 2,
            label: {
                text: '達標線90%',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }];
        getDataTOSeries(modelNo, getUrl, showChartType);
        smtRateChart.xValue = smtRatexValue;
        var chartSeries = [{
            name: selectModelType + '機種SMT段良率',
            data: smtRateyValue,
            tooltip: {
                valueSuffix: '%'
            },
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'rateChart';
                    isSMT = true;
                    var workMonth = event.point.category;
                    showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                }
            }
        }];
        smtRateChart.series = chartSeries;
        showModelChart(smtRateChart, showChartType);

        var smtCapacityChart = new Object();
        getUrl = 'Home/getSMTCapacityByYear';
        showChartType = 'smtCapaChart';
        smtCapacityChart.RenderTO = 'SMTCapacity';
        smtCapacityChart.Title = selectModelType + "機種SMT段產量";
        smtCapacityChart.yAxisTitle = selectModelType + '機種SMT段產量';
        smtCapacityChart.xPlotLines = [{
            color: 'red',
            dashStyle: 'solid',
            value: 800,
            width: 2,
            label: {
                text: '達標標準800',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }];
        getDataTOSeries(modelNo, getUrl, showChartType);
        smtCapacityChart.xValue = smtCapaxValue;
        var chartSeries = [{
            name: selectModelType + '機種SMT段產量',
            data: smtCapayValue,
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'capaChart';
                    isSMT = true;
                    var workMonth = event.point.category;
                    showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                }
            }
        }];
        smtCapacityChart.series = chartSeries;
        showModelChart(smtCapacityChart, showChartType);


        getUrl = 'Home/getTestCapacityByYear';
        showChartType = 'testUPHChart';
        var testUPHChart = new Object();
        testUPHChart.RenderTO = 'testUPH';
        testUPHChart.Title = selectModelType + "機種測試段每小時產量(UPH)";
        testUPHChart.yAxisTitle = selectModelType + '工段產量(UPH)';
        testUPHChart.xPlotLines = [{
            color: 'red',
            dashStyle: 'solid',
            value: 800,
            width: 2,
            label: {
                text: '達標標準800',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }];
        getDataTOSeries(modelNo, getUrl, showChartType);
        testUPHChart.xValue = testUPHxValue;
        var chartSeries = [{
            name: selectModelType + '機種測試站工段產量',
            data: testUPHyValue,
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'uphChart';
                    isSMT = false;
                    var workMonth = event.point.category; 
                    showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                }
            }
        }];
        testUPHChart.series = chartSeries;
        showModelChart(testUPHChart, showChartType);


        getUrl = 'Home/getSMTCapacityByYear';
        showChartType = 'smtUPHChart';
        var smtUPHChart = new Object();
        smtUPHChart.RenderTO = 'SMTUPH';
        smtUPHChart.Title = selectModelType + "機種SMT段每小時產量(UPH)";
        smtUPHChart.yAxisTitle = selectModelType + '機種SMT段產量(UPH)';
        smtUPHChart.xPlotLines = [{
            color: 'red',
            dashStyle: 'solid',
            value: 800,
            width: 2,
            label: {
                text: '達標標準800',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }];
        getDataTOSeries(modelNo, getUrl, showChartType);
        smtUPHChart.xValue = smtUPHxValue;
        var chartSeries = [{
            name: selectModelType + '機種SMT段產量',
            data: smtUPHyValue,
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'uphChart';
                    isSMT = true;
                    var workMonth = event.point.category;
                    showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                }
            }
        }];
        smtUPHChart.series = chartSeries;
        showModelChart(smtUPHChart, showChartType);

        getUrl = 'Home/getPackShipmentByYear';
        showChartType = 'shipmentChart';
        var shipmentChart = new Object();
        shipmentChart.RenderTO = 'shipment';
        shipmentChart.Title = selectModelType + "機種出货量";
        shipmentChart.yAxisTitle = selectModelType + '機種出货量';
        shipmentChart.xPlotLines = [{
            color: 'red',
            dashStyle: 'solid',
            value: 800,
            width: 2,
            label: {
                text: '達標標準800',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }];
        getDataTOSeries(modelNo, getUrl, showChartType);
        shipmentChart.xValue = shipmentxValue;
        var chartSeries = [{
            name: selectModelType + '機種出货量',
            data: shipmentyValue,
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'shipmentChart';
                    isSMT = false;
                    var workMonth = event.point.category;
                    showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                }
            }
        }];
        shipmentChart.series = chartSeries;
        showModelChart(shipmentChart, showChartType);

        getUrl = 'Home/getPackLineNumByYear';
        showChartType = 'lineNumChart';
        var lineNumChart = new Object();
        lineNumChart.RenderTO = 'onLineNum';
        lineNumChart.Title = selectModelType + "機種開線線體數";
        lineNumChart.yAxisTitle = selectModelType + '機種開線線體數';
        lineNumChart.xPlotLines = [];
        //    [{
        //    color: 'red',
        //    dashStyle: 'solid',
        //    value: 30,
        //    width: 2,
        //    label: {
        //        text: '達標標準30',
        //        align: 'left',
        //        x: 0,
        //        style: {
        //            fontSize: '14px',
        //            fontWeight: 'bold'
        //        }
        //    }
        //}];
        getDataTOSeries(modelNo, getUrl, showChartType);
        lineNumChart.xValue = lineNumxValue;
        var chartSeries = [{
            name: selectModelType + '機種開線線體數',
            data: lineNumyValue,
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'lineNumChart';
                    isSMT = false;
                    var workMonth = event.point.category;
                    showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                }
            }
        }];
        lineNumChart.series = chartSeries;
        showModelChart(lineNumChart, showChartType);      

        getUrl = 'Home/getSMTUptimeInvalidByYear';
        showChartType = 'smtUptimeInvalidChart';
        var smtUptimeInvalidChart = new Object();
        smtUptimeInvalidChart.RenderTO = 'smtUptimeInvalid';
        smtUptimeInvalidChart.Title = selectModelType + "機種SMT段稼動率(包含無效機種)";
        smtUptimeInvalidChart.yAxisTitle = selectModelType + '機種SMT段稼動率(包含無效機種)';
        smtUptimeInvalidChart.xPlotLines = [{
            color: 'red',
            dashStyle: 'solid',
            value: 85,
            width: 2,
            label: {
                text: '標示線85%',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        },
        {
            color: 'green',
            dashStyle: 'solid',
            value: 65,
            width: 2,
            label: {
                text: '標示線60%',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }
        ];
        getDataTOSeries(modelNo, getUrl, showChartType);
        smtUptimeInvalidChart.xValue = smtUptimeInvalidxValue;
        var chartSeries = [{
            name: selectModelType + '機種SMT段稼動率(包含無效機種)',
            data: smtUptimeInvalidyValue,
            tooltip: {
                valueSuffix: '%'
            },
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'smtUptimeInvalidChart';
                    isSMT = true;
                    var workMonth = event.point.category;
                    showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                }
            }
        }];
        smtUptimeInvalidChart.series = chartSeries;
        showModelChart(smtUptimeInvalidChart, showChartType);

        getUrl = 'Home/getSMTUptimeByYear';
        showChartType = 'smtUptimeChart';
        var smtUptimeChart = new Object();
        smtUptimeChart.RenderTO = 'smtUptime';
        smtUptimeChart.Title = selectModelType + "機種SMT段稼動率(不包含無效機種)";
        smtUptimeChart.yAxisTitle = selectModelType + '機種SMT段稼動率(不包含無效機種)';
        smtUptimeChart.xPlotLines = [{
            color: 'red',
            dashStyle: 'solid',
            value: 85,
            width: 2,
            label: {
                text: '標示線85%',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        },
        {
            color: 'green',
            dashStyle: 'solid',
            value: 65,
            width: 2,
            label: {
                text: '標示線60%',
                align: 'left',
                x: 0,
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }
        ];
        getDataTOSeries(modelNo, getUrl, showChartType);
        smtUptimeChart.xValue = smtUptimexValue;
        var chartSeries = [{
            name: selectModelType + '機種SMT段稼動率(不包含無效機種)',
            data: smtUptimeyValue,
            tooltip: {
                valueSuffix: '%'
            },
            cursor: 'pointer',
            events: {
                click: function (event) {
                    showChartType = 'smtUptimeChart';
                    isSMT = true;
                    var workMonth = event.point.category;
                    showRealtimePage(workMonth, showChartType, modelNo, selectModelType, isSMT);
                }
            }
        }];
        smtUptimeChart.series = chartSeries;
        showModelChart(smtUptimeChart, showChartType);

    }


    function getDataTOSeries(modelNO, getUrl, showChartType) {      
    
        $.ajax({
            type: "POST",
            url: getUrl,
            dataType: "json",
            data: JSON.stringify({ 'modelNO': modelNO}),
            async: false,
            beforeSend: function (x) {
                x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            },
            success: function (json) {
                //var json = eval("(" + result.d + ")");
                for (var key in json.Table) {                   
                    if (showChartType == 'testRateChart') {
                        //var CURRENT_TIME = json.Table[key].CURRENT_TIME.replace(/\//g, "");                    
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var YIELD_RATE = json.Table[key].YIELD_RATE;
                        testRatexValue.push(WORK_DATE);
                        testRateyValue.push(YIELD_RATE);
                    }
                    else if (showChartType == 'testCapaChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var PASS_QTY = json.Table[key].PASS_QTY;
                        testCapaxValue.push(WORK_DATE);
                        testCapayValue.push(PASS_QTY);
                    }
                    else if (showChartType == 'smtRateChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var YIELD_RATE = json.Table[key].FIRST_PASS_YIELD;
                        smtRatexValue.push(WORK_DATE);
                        smtRateyValue.push(YIELD_RATE);
                    }
                    else if (showChartType == 'smtCapaChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var PASS_QTY = json.Table[key].THROUGHOUT;
                        smtCapaxValue.push(WORK_DATE);
                        smtCapayValue.push(PASS_QTY);
                    }
                    else if (showChartType == 'testUPHChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var UPH = json.Table[key].UPH;
                        testUPHxValue.push(WORK_DATE);
                        testUPHyValue.push(UPH);
                    }
                    else if (showChartType == 'smtUPHChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var UPH = json.Table[key].UPH;
                        smtUPHxValue.push(WORK_DATE);
                        smtUPHyValue.push(UPH);
                    }
                    else if (showChartType == 'smtUptimeInvalidChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var smtCurrentOee = parseFloat(json.Table[key].AVG_UPTIME.toFixed(2));
                        smtUptimeInvalidxValue.push(WORK_DATE);
                        smtUptimeInvalidyValue.push(smtCurrentOee);
                    }
                    else if (showChartType == 'smtUptimeChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var smtCurrentOee = parseFloat(json.Table[key].AVG_UPTIME.toFixed(2))  ;
                        smtUptimexValue.push(WORK_DATE);
                        smtUptimeyValue.push(smtCurrentOee);
                    }
                    else if (showChartType == 'shipmentChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var SFC_COM_QTY = json.Table[key].SFC_COMP_QTY;
                        shipmentxValue.push(WORK_DATE);
                        shipmentyValue.push(SFC_COM_QTY);
                    }
                    else if (showChartType == 'lineNumChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var LineNum = json.Table[key].TOTAL_NUM_OF_LINES;
                        lineNumxValue.push(WORK_DATE);
                        lineNumyValue.push(LineNum);
                    }
                }
            },
            error: function (x, e) {
                alert(x.responseText);
            }
        });
    }

    function showModelChart(ModelChart, showChartType) {
        var titleLinkCharts = new Highcharts.Chart({
            chart: {
                renderTo: ModelChart.RenderTO
            },
            title: {
                text: ModelChart.Title
            },
            xAxis: {
                categories: ModelChart.xValue
            },
            yAxis: {
                min: 0,
                title: {
                    text: ModelChart.yAxisTitle
                },
                labels: {                  
                    formatter: function () {
                        if (showChartType == 'testRateChart' || showChartType == 'smtRateChart' || showChartType == 'smtUptimeChart' || showChartType == 'smtUptimeInvalidChart') {
                            return this.value + '%';
                        }
                        else {
                            return this.value;
                        }
                    }
                },
                plotLines: ModelChart.xPlotLines
            },
            series: ModelChart.series
        });
        return titleLinkCharts;
    }

    function showRealtimePage(workMonth,showChartType, modelNo, selectModelType) {
        var iWidth = 640;
        var iHeight = 480;
        var iTop = (window.screen.availHeight - iHeight) / 2;
        var iLeft = (window.screen.availWidth - iWidth) / 2;
        window.open("Home/ModelRealTimeByMonOrWeek?modelNo=" + modelNo + "&work_date=" + workMonth + "&showChartType=" + showChartType + "&showPageModelNo=" + selectModelType + "&isSMT=" + isSMT, '', 'height=' + iHeight + ', width=' + iWidth + ', top=' + iTop + ', left=' + iLeft + ',location=no');       
    }
});

