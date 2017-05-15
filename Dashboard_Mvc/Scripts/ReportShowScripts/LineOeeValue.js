$(document).ready(function () {
    var oeeStartDate="", oeeEndDate="",lineStatusOEEUrl = '', lineStatusUPHUrl = '', lineStatusTableUrl = '', lineStatusOEEData = '', lineStatusUPHData = '', lineStatusTableData = '';
    $('#oeeStartDate').datepicker({
        changeMonth: true,
        changeYear: true,
        inline: true,
        dateFormat: 'yy/mm/dd',
        maxDate: -1,
        onClose: function (selectedDate) {
            $("#oeeEndDate").datepicker("option", "minDate", selectedDate);
        }
    });

    $('#oeeEndDate').datepicker({
        changeMonth: true,
        changeYear: true,
        inline: true,
        dateFormat: 'yy/mm/dd',
        maxDate: -1,
        onClose: function (selectedDate) {
            $("#oeeStartDate").datepicker("option", "maxDate", selectedDate);
        }

    });

    var modelType = getURLParameter('modelType');
    if (modelType == "AS")//URI中有特殊符号时，编码不正确
        modelType = "A/S";//DB中的值
    if (modelType == "HM")
        modelType = "H/M";
    var lineName = getURLParameter('lineName');
    var pdLineId = getURLParameter('pdLineId');
    document.getElementById("tableTitle").innerHTML += "<h3>" + lineName + "線體狀態</h3>";

    var lineOeeChart = new Object();
    lineOeeChart.RenderTO = 'monthlyLineStatusChart';
    lineOeeChart.Title = lineName + "機台稼動率";
    lineOeeChart.yAxisTitle = lineName + "機台稼動率";
    lineOeeChart.xtext = [];
    var chartSeries = [{
                type: 'column',
                name: lineName + "機台稼動率",
                tooltip: {
                    valueDecimals: 0,
                    valueSuffix: '%'
                }
            },
            {
                type: 'line',
                name: lineName + "機台稼動率",
                color: '#89A54E',
                tooltip: {
                    valueDecimals: 0,
                    valueSuffix: '%'
                }
            }
            ];
    lineOeeChart.series = chartSeries;
    var lineOeeValueChart = setYAxisFormatCharts(lineOeeChart);

    var lineUPHChart = new Object();
    lineUPHChart.RenderTO = 'monthlyLineUPHChart';
    lineUPHChart.Title = lineName + "機台UPH";
    lineUPHChart.yAxisTitle = lineName + "機台UPH";
    lineUPHChart.xtext = [];
    var chartSeries = [
            {
                type: 'column',
                name: lineName + "機台UPH"
            },
           {
               type: 'line',
               name: lineName + "機台UPH",
               color: '#89A54E'
           }
        ];
    lineUPHChart.series = chartSeries;
    var lineUPHValueChart = setColumnAndTrendCharts(lineUPHChart);

    //getOneMonBeforDate()和 getOneDayBeforDate()方法在PagesJS/CommonMethod.js文件中
    oeeStartDate = getOneMonBeforDate();
    oeeEndDate = getOneDayBeforDate();
    $(document).attr("title", modelType+" SMT " + lineName + "機台");
    $("#lineNametitleDiv").empty();
    document.getElementById("lineNametitleDiv").innerHTML += "<h3>" + modelType + " SMT " + lineName + "機台</h3>";
    initSMTOeeAndUPH();
    function initSMTOeeAndUPH(){
        lineStatusOEEUrl = '../FoxlinkSfc/getSMTOEEValueByInterval';
        lineStatusUPHUrl = '../FoxlinkSfc/getSMTLineUPH';
        lineStatusTableUrl = '../FoxlinkSfc/getSMTLineOEEandUPH';
        lineStatusOEEData = "{'modelNO':'" + modelType + "','lineName':'" + lineName + "','startDate':'" + oeeStartDate + "','endDate':'" + oeeEndDate + "'}";
        lineStatusUPHData = "{'modelNO':'" + modelType + "','lineID':'" + pdLineId + "','startDate':'" + oeeStartDate + "','endDate':'" + oeeEndDate + "'}";
        lineStatusTableData = "{'modelNO':'" + modelType + "','lineName':'" + lineName + "','lineID':'" + pdLineId + "','startDate':'" + oeeStartDate + "','endDate':'" + oeeEndDate + "'}";
        showLineStatusOEE(lineStatusOEEUrl, lineStatusOEEData, lineOeeValueChart, lineOeeChart.xtext);
        showLineStatusUPH(lineStatusUPHUrl, lineStatusUPHData, lineUPHValueChart, lineUPHChart.xtext);
        showLineStatusTable(lineStatusTableUrl, lineStatusTableData);
    }

    $('#oeeSearchBtn').click(function () {
        oeeStartDate = $('#oeeStartDate').val();
        oeeEndDate = $('#oeeEndDate').val();
        var errorMsg = '';
        if (oeeStartDate == '')
            errorMsg += '請選擇起始時間\n';
        if (oeeEndDate == '')
            errorMsg += '請選擇結束時間\n';
        if (errorMsg.length > 0) {
            alert(errorMsg);
        }
        else {
            initSMTOeeAndUPH();
        }
    });

    function showLineStatusOEE(lineStatusOEEUrl, lineStatusOEEData, lineOeeValueChart, lineOeeChartXtext) {
        $.ajax({
            type: 'POST',
            url: lineStatusOEEUrl,
            dataType: "json",
            data: lineStatusOEEData,
            //beforeSend: function (x) {
            //    x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            //},
            success: function (json) {
                lineOeeChartXtext.splice(0, lineOeeChartXtext.length);
                for (var key in json.Table) {
                    json.Table[key].y = json.Table[key].OEE_VALUE*100;
                    lineOeeChartXtext.push(json.Table[key].WORK_DATE);
                }
                lineOeeValueChart.series[0].setData(json.Table);
                lineOeeValueChart.series[1].setData(json.Table);
            },
            error: function (x, e) {
                alert(x.responseText);
            }
        });
    }

    function showLineStatusUPH(lineStatusUPHUrl, lineStatusUPHData, lineUPHValueChart, lineUPHChartXtext) {
        $.ajax({
            type: 'POST',
            url: lineStatusUPHUrl,
            dataType: "json",
            data: lineStatusUPHData,
            //beforeSend: function (x) {
            //    x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            //},
            success: function (json) {
                lineUPHChartXtext.splice(0, lineUPHChartXtext.length);
                for (var key in json.Table) {
                    json.Table[key].y = json.Table[key].PACK_QTY;
                    lineUPHChartXtext.push(json.Table[key].WORK_DATE);
                }
                lineUPHValueChart.series[0].setData(json.Table);
                lineUPHValueChart.series[1].setData(json.Table);
            },
            error: function (x, e) {
                alert(x.responseText);
            }
        });
    }
    function showLineStatusTable(lineStatusTableUrl, lineStatusTableData) {
        $.ajax({
            type: 'POST',
            url: lineStatusTableUrl,
            dataType: "json",
            data: lineStatusTableData,
            //beforeSend: function (x) {
            //    x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            //},
            success: function (json) {
                if (json.Table.length > 0) {
                    $('#monthlyLineStatusTable tbody').empty();
                    showMonthlyLineStatusTable(json.Table);
                }
            },
            error: function (x, e) {
                alert(x.responseText);
            }
        });
    }
    function showMonthlyLineStatusTable(data) {
        for (var i = 0; i < data.length; i++) {
            var bodyElement = '';
            bodyElement = '<tr><th>' + data[i]["WORK_DATE"] + '</th>' +
                              '<th>' + (data[i]['OEE_VALUE']*100).toFixed(0) +'%'+ '</th>' +
                              '<th>' + data[i]['PACK_QTY'] + '</th></tr>';
            $('#monthlyLineStatusTable tbody').append(bodyElement);
        }
    }
});
