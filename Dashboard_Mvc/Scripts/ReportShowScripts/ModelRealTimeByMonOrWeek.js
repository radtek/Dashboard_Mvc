$(document).ready(function () {

    var modelNO = getURLParameter('modelNo');    //傳到procedure裡的機種名稱，如:AS
    var showPageModelNo = getURLParameter('showPageModelNo'); //顯示在頁面上的機種名稱,    如A/S&C/P
    if (modelNO == "AS") {
        showPageModelNo = 'A/S&C/P';
    }
    var showChartType = getURLParameter('showChartType');
    var getDataByMonthUrl = 'getTestCapacityByMon',
        getDataByWeekUrl = 'getTestCapacityByWeekly';
    var isSMT = getURLParameter('isSMT');
    var stationType = '测试站';
    if (isSMT == 'true') {
        stationType = 'SMT段';
        getDataByMonthUrl = 'getSMTCapacityByMon',
        getDataByWeekUrl = 'getSMTCapacityByWeekly';
    }
    if (showChartType == 'shipmentChart' && isSMT=='false') {
        getDataByMonthUrl = 'getPackShipmentByMon',
        getDataByWeekUrl = 'getPackShipmentByWeekly';
    }
    if (showChartType == 'lineNumChart' && isSMT == 'false') {
        getDataByMonthUrl = 'getPackLineNumByMon',
        getDataByWeekUrl = 'getPackLineNumByWeekly';
    }
    var workDate = getURLParameter('work_date');


    var xValue = [], yValue = [];

    showPage(getDataByMonthUrl, workDate);

    function showPage(getUrl, workDate) {
        xValue.splice(0, xValue.length);
        yValue.splice(0, yValue.length);

        var showChart = new Object();
        showChart.RenderTO = 'modelChartWeek';
        var chartSeries = '';
        if (showChartType == 'rateChart') {
            showChart.Title = showPageModelNo + "機種" + stationType + workDate + "良率趨勢變化";
            showChart.yAxisTitle = showPageModelNo + "機種" + stationType + "良率";
            showChart.xPlotLines = [{
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
            getDataTOSeries(modelNO, getUrl, showChartType, workDate);
            showChart.xValue = xValue;
            chartSeries = [{
                name: showPageModelNo + '機種' + stationType + '良率',
                data: yValue,
                tooltip: {
                    valueSuffix: '%'
                },
                cursor: 'pointer',
                events: {
                    click: function (event) {
                        var workWeek = event.point.category; // X轴值
                        showPage(getDataByWeekUrl, workWeek);
                    }
                }
            }];
        }
        if (showChartType == 'capaChart') {
            showChart.Title = showPageModelNo + "機種" + stationType + workDate + "產量趨勢變化";
            showChart.yAxisTitle = showPageModelNo + "機種" + stationType + "產量";
            showChart.xPlotLines = [{
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
            getDataTOSeries(modelNO, getUrl, showChartType, workDate);
            showChart.xValue = xValue;
            var chartSeries = [{
                name: showPageModelNo + '機種' + stationType + '產量',
                data: yValue,
                cursor: 'pointer',
                events: {
                    click: function (event) {
                        var workWeek = event.point.category; // X轴值
                        showPage(getDataByWeekUrl, workWeek);
                    }
                }
            }];
        }
        if (showChartType == 'uphChart') {
            showChart.Title = showPageModelNo + "機種" + stationType + workDate + "產量(UPH)趨勢變化";
            showChart.yAxisTitle = showPageModelNo + '機種' + stationType + '產量(UPH)';
            showChart.xPlotLines = [{
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
            getDataTOSeries(modelNO, getUrl, showChartType, workDate);
            showChart.xValue = xValue;
            var chartSeries = [{
                name: showPageModelNo + '機種' + stationType + '產量',
                data: yValue,
                cursor: 'pointer',
                events: {
                    click: function (event) {
                        var workWeek = event.point.category; // X轴值
                        showPage(getDataByWeekUrl, workWeek);
                    }
                }
            }];
        }
        if (showChartType == 'shipmentChart') {
            showChart.Title = showPageModelNo + "機種" + workDate + "出貨量趨勢變化";
            showChart.yAxisTitle = showPageModelNo + '機種出貨量';
            showChart.xPlotLines = [{
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

            getDataTOSeries(modelNO, getUrl, showChartType, workDate);
            showChart.xValue = xValue;
            var chartSeries = [{
                name: showPageModelNo + '機種出貨量',
                data: yValue,
                cursor: 'pointer',
                events: {
                    click: function (event) {
                        var workWeek = event.point.category;
                        showPage(getDataByWeekUrl, workWeek);
                    }
                }
            }];
        }
        if (showChartType == 'lineNumChart') {
            showChart.Title = showPageModelNo + "機種" + workDate + "開線線體數趨勢變化";
            showChart.yAxisTitle = showPageModelNo + '機種開線線體數';
            showChart.xPlotLines = [];
            //    [{
            //    color: 'red',
            //    dashStyle: 'solid',
            //    value: 30,
            //    width: 2,
            //    label: {
            //        text: '達標標準100',
            //        align: 'left',
            //        x: 0,
            //        style: {
            //            fontSize: '14px',
            //            fontWeight: 'bold'
            //        }
            //    }
            //}];

            getDataTOSeries(modelNO, getUrl, showChartType, workDate);
            showChart.xValue = xValue;
            var chartSeries = [{
                name: showPageModelNo + '機種開線線體數',
                data: yValue,
                cursor: 'pointer',
                events: {
                    click: function (event) {
                        var workWeek = event.point.category;
                        showPage(getDataByWeekUrl, workWeek);
                    }
                }
            }];
        }

        showChart.series = chartSeries;
        showModelChart(showChart, showChartType);
    }


    if (showChartType == 'smtUptimeChart') {
        getUrl = 'Home/getSMTUptimeByMon';
        $("#modelChartTitle,#modelChartWeek").empty();
        document.getElementById("modelChartTitle").innerHTML += "<H4 style='color:#3071A9'>" + showPageModelNo + "機種SMT稼動率(不包含無效機台)</4>";
        getDataTOSeries(modelNO, getUrl, showChartType, workDate);
        for (i = 0; i < yValue.length; i++) {
            var smtUptimeChart = new Object();
            var divElement = '';
            var smtUptimeWeek = xValue[i];
            var smtUptimeDiv = "div" + smtUptimeWeek;
            divElement += "<div id='" + smtUptimeDiv + "' class='" + smtUptimeWeek + "' style='float:left;width:300px;height:250px; Margin:10px'></div>";

            $('#modelChart').append(divElement);
            smtUptimeChart.RenderTo = smtUptimeDiv;
            smtUptimeChart.Title = "第" + smtUptimeWeek + "周";
            smtUptimeChart.data = parseFloat(yValue[i]);
            //solidgaugeChart()方法在CommMethod.js文件中
            solidgaugeChart(smtUptimeChart);

            $("#" + smtUptimeDiv).click(function () {
                $("#modelChart,#modelChartTitle").empty();
                var smtUptimeDivId = $(this).attr("id");
                var weekDate = $(this).attr("class");
                getUrl = "Home/getSMTUptimeByWeek";
                var smtUptimeChart = new Object();
                smtUptimeChart.RenderTO = 'modelChartWeek';
                smtUptimeChart.Title = showPageModelNo + "機種SMT稼動率(不包含無效機種)";
                smtUptimeChart.yAxisTitle = showPageModelNo + '機種SMT稼動率(不包含無效機種)';
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
                getDataTOSeries(modelNO, getUrl, showChartType, weekDate);
                smtUptimeChart.xValue = xValue;
                var chartSeries = [{
                    name: showPageModelNo + '機種SMT稼動率(不包含無效機種)',
                    data: yValue,
                    tooltip: {
                        valueSuffix: '%'
                    }
                    // ,
                    //cursor: 'pointer',
                    //events: {
                    //    click: function (event) {
                    //        showChartType = 'smtUptimeChart';
                    //        isSMT = true;
                    //        var workMonth = event.point.category;
                    //        showRealtimePage(workMonth, showChartType, modelNo, showPageModelNo, isSMT);
                    //    }
                    //}
                }];
                smtUptimeChart.series = chartSeries;
                showModelChart(smtUptimeChart, showChartType);
            });
        }
    }
    if (showChartType == 'smtUptimeInvalidChart') {
        getUrl = 'Home/getSMTUptimeInvalidByMon';
        $("#modelChartTitle,#modelChartWeek").empty();
        document.getElementById("modelChartTitle").innerHTML += "<H4 style='color:#3071A9'>" + showPageModelNo + "機種SMT稼動率(包含無效機台)</4>";
        getDataTOSeries(modelNO, getUrl, showChartType, workDate);
        for (i = 0; i < yValue.length; i++) {
            var smtUptimeInvalidChart = new Object();
            var divElement = '';
            var smtUptimeInvalidWeek = xValue[i];
            var smtUptimeDiv = "div" + smtUptimeInvalidWeek;
            divElement += "<div id='" + smtUptimeDiv + "' class='" + smtUptimeInvalidWeek + "' style='float:left;width:300px;height:250px; Margin:10px'></div>";

            $('#modelChart').append(divElement);
            smtUptimeInvalidChart.RenderTo = smtUptimeDiv;
            smtUptimeInvalidChart.Title = "第" + smtUptimeInvalidWeek + "周";
            smtUptimeInvalidChart.data = parseFloat(yValue[i]);
            //solidgaugeChart()方法在CommMethod.js文件中
            solidgaugeChart(smtUptimeInvalidChart);

            $("#" + smtUptimeDiv).click(function () {
                $("#modelChart,#modelChartTitle").empty();
                var smtUptimeDivId = $(this).attr("id");
                var weekDate = $(this).attr("class");
                xValue.splice(0, xValue.length);
                yValue.splice(0, yValue.length);
                getUrl = "Home/getSMTUptimeInvalidByWeek";
                var smtUptimeChart = new Object();
                smtUptimeChart.RenderTO = 'modelChartWeek';
                smtUptimeChart.Title = showPageModelNo + "機種SMT稼動率(包含無效機種)";
                smtUptimeChart.yAxisTitle = showPageModelNo + '機種SMT稼動率(包含無效機種)';
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
                getDataTOSeries(modelNO, getUrl, showChartType, weekDate);
                smtUptimeChart.xValue = xValue;
                var chartSeries = [{
                    name: showPageModelNo + '機種SMT稼動率(包含無效機種)',
                    data: yValue,
                    tooltip: {
                        valueSuffix: '%'
                    }
                    //,
                    //cursor: 'pointer',
                    //events: {
                    //    click: function (event) {
                    //        showChartType = 'smtUptimeInvalidChart';
                    //        isSMT = true;
                    //        var workMonth = event.point.category;
                    //        showRealtimePage(workMonth, showChartType, modelNo, showPageModelNo, isSMT);
                    //    }
                    //}
                }];
                smtUptimeChart.series = chartSeries;
                showModelChart(smtUptimeChart, showChartType);

            });

        }
    }

    function getDataTOSeries(modelNO, getUrl, showChartType, workDate) {
        xValue.splice(0, xValue.length);
        yValue.splice(0, yValue.length);
        $.ajax({
            type: "POST",
            url: getUrl,
            dataType: "json",
            data: JSON.stringify({ 'modelNO': modelNO, 'selectTime': workDate }),
            async: false,
            beforeSend: function (x) {
                x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            },
            success: function (json) {
                for (var key in json.Table) {
                    if (showChartType == 'rateChart') {
                        //var CURRENT_TIME = json.Table[key].CURRENT_TIME.replace(/\//g, "");                    
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var YIELD_RATE = json.Table[key].FIRST_PASS_YIELD;
                        xValue.push(WORK_DATE);
                        yValue.push(YIELD_RATE);
                    }
                    else if (showChartType == 'capaChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var PASS_QTY = json.Table[key].THROUGHOUT;
                        xValue.push(WORK_DATE);
                        yValue.push(PASS_QTY);
                    }
                    else if (showChartType == 'uphChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var UPH = json.Table[key].UPH;
                        xValue.push(WORK_DATE);
                        yValue.push(UPH);
                    }
                    else if (showChartType == 'smtUptimeChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var AVG_UPTIME = parseFloat(json.Table[key].AVG_UPTIME.toFixed(2));;
                        xValue.push(WORK_DATE);
                        yValue.push(AVG_UPTIME);
                    }
                    else if (showChartType == 'smtUptimeInvalidChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var AVG_UPTIME = parseFloat(json.Table[key].AVG_UPTIME.toFixed(2));;
                        xValue.push(WORK_DATE);
                        yValue.push(AVG_UPTIME);
                    }
                    else if (showChartType == 'shipmentChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var SFC_COMP_QTY = json.Table[key].SFC_COMP_QTY;
                        xValue.push(WORK_DATE);
                        yValue.push(SFC_COMP_QTY);
                    }
                    else if (showChartType == 'lineNumChart') {
                        var WORK_DATE = json.Table[key].WORK_DATE;
                        var LineNum = json.Table[key].TOTAL_NUM_OF_LINES;
                        xValue.push(WORK_DATE);
                        yValue.push(LineNum);
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
                        if (showChartType == 'rateChart' || showChartType == 'smtUptimeChart' || showChartType == 'smtUptimeInvalidChart') {
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

});