function showTableTitles(tableType) {
    var Titles = '';
    if (tableType == 'totalPro') {
        Titles = '<tr><th>WORK_DATE</th>' +
                        '<th>PACKING_QTY</th>' +
                        '<th>FIRSTPASS_RATE</th></tr>';
    }
    else if (tableType == 'monthPro') {
        Titles = '<tr><th>WORK_MONTH</th>' +
                        '<th>PACKING_QTY</th>' +
                        '<th>FIRSTPASS_RATE</th></tr>';
    }
    else if (tableType == 'lineNum') {
        Titles = '<tr><th>WORK_DATE</th>' +
                        '<th>LINE_NUM</th></tr>';
    }
    else if (tableType == 'postNum') {
        Titles = '<tr><th>WORK_DATE</th>' +
                        '<th>PACKING_QTY</th></tr>';
    }
    $('#tableArea thead').append(Titles);
    $('#tableArea tfoot').append(Titles);
}

function showTableContents(data, tableType) {
    for (var i = 0; i < data.length; i++) {
        var bodyElement = '';
        if (tableType == 'totalPro') {
            bodyElement = '<tr><td>' + data[i]["WORK_DATE"] + '</td>' +
                               '<td>' + data[i]['PACKING_QTY'] + '</td>' +
                               '<td>' + data[i]['FIRSTPASS_RATE'] + '</td></tr>';
        }
        else if (tableType == 'monthPro') {
            bodyElement = '<tr><td>' + data[i]["WORK_MONTH"] + '</td>' +
                                   '<td>' + data[i]['PACKING_QTY'] + '</td>' +
                                   '<td>' + data[i]['FIRSTPASS_RATE'] + '</td></tr>';
        }
        else if (tableType == 'lineNum') {
            bodyElement = '<tr><td>' + data[i]["WORK_DATE"] + '</td>' +
                                   '<td>' + data[i]['LINE_NUM'] + '</td></tr>';
        }
        else if (tableType == 'postNum') {
            bodyElement = '<tr><td>' + data[i]["WORK_DATE"] + '</td>' +
                                   '<td>' + data[i]['PACKING_QTY'] + '</td></tr>';
        }
        $('#tableArea tbody').append(bodyElement);
    }
}
//顯示線體狀態頁面的DIV
function showLineSatusDiv(data, modelType) {
    for (var i = 0; i < data.length; i++) {
        var divElement = '';
        var lineName = data[i]["PDLINE_NAME"];
        var pdLineId = data[i]["PDLINE_ID"];
        divElement += "<div id='" + pdLineId + "' class='" + lineName + "'  style='float:left;width:350px;height:300px; Margin:10px'></div>";

        $('#lineStatusArea').append(divElement);
        var LineOeedivId = pdLineId;
        var LineSolidGaugeOee = new Object();
        LineSolidGaugeOee.RenderTo = LineOeedivId;
        LineSolidGaugeOee.Title = lineName;
        LineSolidGaugeOee.data = parseFloat((data[i]['OEE_VALUE']*100).toFixed(1));
        solidgaugeChart(LineSolidGaugeOee);

        $("#" + LineOeedivId).click(function () {
            var selectLineId = $(this).attr("id");
            var selectLineName = $(this).attr("class");
            var iWidth = 1200;
            var iHeight = 700;
            var iTop = (window.screen.availHeight - iHeight) / 2;
            var iLeft = (window.screen.availWidth - iWidth) / 2;
            window.open("LineOeeValue?modelType=" + modelType + "&lineName=" + selectLineName + "&pdLineId=" + selectLineId + "", '', 'height=' + iHeight + ', width=' + iWidth + ', top=' + iTop + ', left=' + iLeft + ',location=no');
        });
    }
  
}

function showLineSatusTable(data) {
    for (var i = 0; i < data.length; i++) {
        var bodyElement = '';
        bodyElement = '<tr><th>' + data[i]["TOTALLINENUM"] + '</th>' +
                               '<th>' + data[i]['PRODUCTLINENUM'] + '</th>' +
                                '<th>' + data[i]['OEEVALUE1'] + '</th>' +
                                 '<th>' + data[i]['OEEVALUE2'] + '</th>' +
                               '<th>' + data[i]['OEEVALUE3'] + '</th></tr>';
        $('#lineStatusTable tbody').append(bodyElement);
    }
}

function getModelOeeAndLineStatus(modelType, getModelOeeUrl, getLineStatusUrl, getOneMonOeeUrl, chart, xtext, timeInterval) {
    $.ajax({
        type: 'POST',
        url: getModelOeeUrl,
        dataType: "json",
        data: "{'modelNO':'" + modelType + "'}",
        beforeSend: function (x) {
            x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        },
        success: function (json) {
            $('#lineStatusArea').empty();
            if (json.Table.length > 0) {
                showLineSatusDiv(json.Table, modelType);
            }
        },
        error: function (x, e) {
            alert(x.responseText);
        }
    });

    $.ajax({
        type: 'POST',
        url: getLineStatusUrl,
        dataType: "json",
        data: "{'modelNO':'" + modelType + "','timeInterval':'" + timeInterval + "'}",
        beforeSend: function (x) {
            x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        },
        success: function (json) {
            $('#lineStatusTable tbody').empty();
            if (json.Table.length > 0) {
                showLineSatusTable(json.Table)
            }
        },
        error: function (x, e) {
            alert(x.responseText);
        }
    });

    $.ajax({
        type: 'POST',
        url: getOneMonOeeUrl,
        dataType: "json",
        data: "{'modelNO':'" + modelType + "','timeInterval':'" + timeInterval + "','isIntevalExclude':'false'}",
        beforeSend: function (x) {
            x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        },
        success: function (json) {
            for (var key in json.Table) {
                var yValue = json.Table[key].OEE_VALUE;
                var showYValue = parseFloat((yValue * 100).toFixed(3));
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

//獲取當前日期
function getNowDate() {
    var date = new Date();
    var dateMonth = date.getMonth() + 1;
    if (dateMonth >= 1 && dateMonth <= 9) {
        dateMonth = "0" + dateMonth;
    }
    var dayDate = date.getDate();
    if (dayDate >= 1 && dayDate <= 9) {
        dayDate = "0" + dayDate;
    }
    var nowDate = date.getFullYear() + "/" + dateMonth + "/" + dayDate;
    return nowDate;
}
//獲取前一天日期
function getOneDayBeforDate() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    var timeMonth = date.getMonth() + 1;
    if (timeMonth >= 1 && timeMonth <= 9) {
        timeMonth = "0" + timeMonth;
    }
    var dayTime = date.getDate();
    if (dayTime >= 1 && dayTime <= 9) {
        dayTime = "0" + dayTime;
    }
    var oneDayBeforDate = date.getFullYear() + "/" + timeMonth + "/" + dayTime;
    return oneDayBeforDate;
}
//獲取當前日期7天前日期
function getOneWeekBeforDate() {
    var date = new Date();
    date.setDate(date.getDate() - 7);
    var timeMonth = date.getMonth() + 1;
    if (timeMonth >= 1 && timeMonth <= 9) {
        timeMonth = "0" + timeMonth;
    }
    var dayTime = date.getDate();
    if (dayTime >= 1 && dayTime <= 9) {
        dayTime = "0" + dayTime;
    }
    var oneWeekBeforDate = date.getFullYear() + "/" + timeMonth + "/" + dayTime;
    return oneWeekBeforDate;
}

//獲取當前日期30天前日期
function getOneMonBeforDate() {
    var date = new Date();
    date.setDate(date.getDate() - 30);
    var dateMonth = date.getMonth() + 1;
    if (dateMonth >= 1 && dateMonth <= 9) {
        dateMonth = "0" + dateMonth;
    }
    var dayDate = date.getDate();
    if (dayDate >= 1 && dayDate <= 9) {
        dayDate = "0" + dayDate;
    }
    var oneMonBeforDate = date.getFullYear() + "/" + dateMonth + "/" + dayDate;
    return oneMonBeforDate;
}

//繪製Chart統計圖
function setColumnAndTrendCharts(Targetchart) {
    var columnAndTrendChart = new Highcharts.Chart({
        chart: {
            renderTo: Targetchart.RenderTO
        },
        title: {
            text: Targetchart.Title
        },
        xAxis: {
            categories: Targetchart.xtext
        },
        yAxis: {
            title: {
                text: Targetchart.yAxisTitle
            }
        },
        series: Targetchart.series
    })
    return columnAndTrendChart;
}
function setYAxisFormatCharts(Targetchart) {
    var titleLinkCharts = new Highcharts.Chart({
        chart: {
            renderTo: Targetchart.RenderTO
        },
        title: {
            useHTML: true,
            text: Targetchart.Title
        },
        xAxis: {
            categories: Targetchart.xtext
        },
        yAxis: {
            title: {
                text: Targetchart.yAxisTitle
            },
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        series: Targetchart.series
    });
    return titleLinkCharts;
}

//從頁面url中取出參數
function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}



//定義solidgauge
function solidgaugeChart(solidGaugeOee) {

    var modelOEEValue = solidGaugeOee.data;

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: solidGaugeOee.RenderTo,
            type: 'solidgauge'
        },
        title: null,
        pane: {
            center: ['50%', '85%'],
            size: '100%',
            startAngle: -90,
            endAngle: 90,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#EEE',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        // the value axis
        yAxis: {
            min: 0,
            max: 100,
            //漸變顏色填充
            //stops: [
            //    [0.6, '#DF5353'], // red
            //    [0.85, '#DDDF0D'], // yellow
            //    [0.9, '#55BF3B'] // green
            //],

            //固定顏色填充
            minColor: modelOEEValue >= 85 ? '#55BF3B' : (modelOEEValue >= 60 ? '#DDDF0D' : '#DF5353'),
            maxColor: modelOEEValue >= 85 ? '#55BF3B' : (modelOEEValue >= 60 ? '#DDDF0D' : '#DF5353'),

            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            title: {
                text: '',
                y: -70
            },
            labels: {
                y: 16,
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: 5,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            name: '稼动率',
            data: [modelOEEValue],
            dataLabels: {
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:#48BEDB">' + solidGaugeOee.Title + '</span></div>'
            },
            tooltip: {
            valueSuffix: '%'
        }
        }]

    });
}

function getModelSolidOee(solidGaugeOee, modelType, getOneMonOeeUrl, timeInterval,isIntevalExclude) {
    $.ajax({
        type: 'POST',
        url: getOneMonOeeUrl,
        dataType: "json",
        data: "{'modelNO':'" + modelType + "','timeInterval':'" + timeInterval + "','isIntevalExclude':'" + isIntevalExclude + "'}",
        beforeSend: function (x) {
            x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        },
        success: function (json) {
            solidGaugeOee.data = parseFloat((json.Table[json.Table.length - 1]["OEE_VALUE"] * 100).toFixed(1));
            solidgaugeChart(solidGaugeOee);
        },
        error: function (x, e) {
            alert(x.responseText);
        }
    });
}



    