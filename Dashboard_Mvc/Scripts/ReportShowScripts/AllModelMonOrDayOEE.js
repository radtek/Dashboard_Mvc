function setYAxisFormatChartsYear(Targetchart, modelNO, includeInvalidMachine) {
    var titleLinkCharts = new Highcharts.Chart({
        chart: {
            renderTo: Targetchart.RenderTO
        },
        title: {
            useHTML: true,
            text: Targetchart.Title
        },
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function () {
                            get_Speedometer_WEEKLY_Data(Targetchart.Title, this.category, modelNO, includeInvalidMachine)
                        }
                    }
                }
            }
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
        //credits:刪除右下角的 Highcharts.com
        credits: {
            enabled: false
        },
        series: Targetchart.series
    });
    return titleLinkCharts;
}

function get_Speedometer_WEEKLY_Data(Title, Month, modelNO, includeInvalidMachine) {
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        url: '../FoxlinkSfc/getSMTUptimeByMon',
        dataType: "json",
        data: "{'selectTime':'" + Month + "','modelNO':'" + modelNO + "','includeInvalidMachine':'" + includeInvalidMachine + "'}",
        //beforeSend: function (x) {
        //    x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        //},
        success: function (json) {
            var val_WorkDate = [];
            var val_AvgUptime = [];
            for (var key in json.Table) {
                val_AvgUptime.push(json.Table[key].AVG_UPTIME);
                val_WorkDate.push(json.Table[key].WORK_DATE);
            }
            draw_Speedometer_WEEKLY(Title, Month, key, val_AvgUptime, val_WorkDate, modelNO, includeInvalidMachine);
        },
        error: function (x, e) {
            alert(x.responseText);
        }
    });
}

function draw_Speedometer_WEEKLY(Title, Month, key, val_AvgUptime, val_WorkDate, modelNO, includeInvalidMachine) {
    //顯示div為(WEEKL0~WEEKL4)儀表板，折線圖(container_SMT_DAILY)隱藏
    document.getElementById('container_SMT_DAILY').style.display = 'none';
    document.getElementById('WEEKL0').style.display = 'block';
    document.getElementById('WEEKL1').style.display = 'block';
    document.getElementById('WEEKL2').style.display = 'block';
    document.getElementById('WEEKL3').style.display = 'block';
    document.getElementById('WEEKL4').style.display = 'block';
    document.getElementById('WEEKL5').style.display = 'block';

    //先清空
    $('#container_SMT_DAILY').html("");
    $('#WEEKL0').html("");
    $('#WEEKL1').html("");
    $('#WEEKL2').html("");
    $('#WEEKL3').html("");
    $('#WEEKL4').html("");
    $('#WEEKL5').html("");

    var TitleName = "<p>" + Title + Month + "月" + "稼動率" + "</p>";

    $("#container_SMT_WEEKLY").dialog({

        title: TitleName,
        height: 560,
        width: 680

    });

    var gaugeOptions = {

        chart: {
            type: 'gauge',
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false
        },

        title: null,

        pane: {
            startAngle: -150,
            endAngle: 150,
            background: [{
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#FFF'],
                        [1, '#333']
                    ]
                },
                borderWidth: 0,
                outerRadius: '109%'
            }, {
                backgroundColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, '#333'],
                        [1, '#FFF']
                    ]
                },
                borderWidth: 1,
                outerRadius: '107%'
            }, {
                // default background
            }, {
                backgroundColor: '#DDD',
                borderWidth: 0,
                outerRadius: '105%',
                innerRadius: '103%'
            }]
        },
        yAxis: {
            min: 0,
            max: 100,

            minorTickInterval: 'auto',
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: 'inside',
            minorTickColor: '#666',

            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: 'inside',
            tickLength: 10,
            tickColor: '#666',
            labels: {
                step: 2,
                rotation: 'auto'
            },
            title: {
                text: '%'
            },
            plotBands: [{
                from: 80,
                to: 100,
                color: '#55BF3B' // green
            }, {
                from: 60,
                to: 80,
                color: '#DDDF0D' // yellow
            }, {
                from: 0,
                to: 60,
                color: '#DF5353' // red
            }]
        }

    };

    for (var i = 0; i <= key; i++) {
        // The speed gauge
        var id = "WEEKL" + i;
        var chartSpeed = chartSpeed + i;
        var monthName = val_WorkDate[i] + "週";
        var monthName_series = val_WorkDate[i];
        chartSpeed = Highcharts.chart(id, Highcharts.merge(gaugeOptions, {
            title: {
                text: monthName

            },
            plotOptions: {
                series: {
                    cursor: 'pointer',
                    point: {
                        events: {
                            click: function () {                            
                                get_Speedometer_Days_Data(Title, this.series.name, modelNO, includeInvalidMachine);
                            }
                        }
                    }
                }
            },
            credits: {
                enabled: false
            },
            series: [{
                name: monthName_series,
                data: [val_AvgUptime[i]],
                tooltip: {
                    valueSuffix: ' %'
                }
            }]
        }));
    }



}

function get_Speedometer_Days_Data(Title, Week, modelNO, includeInvalidMachine) {
    $.ajax({
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        url: '../FoxlinkSfc/getSMTUptimeByWeek',
        dataType: "json",
        data: "{'selectTime':'" + Week + "','modelNO':'" + modelNO + "','includeInvalidMachine':'" + includeInvalidMachine + "'}",
        //beforeSend: function (x) {
        //    x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        //},
        success: function (json) {
            var val_WorkDate = [];
            var val_AvgUptime = [];
            for (var key in json.Table) {
                val_AvgUptime.push(json.Table[key].AVG_UPTIME);
                val_WorkDate.push(json.Table[key].WORK_DATE);
            }
            draw_Speedometer_Days(Title, Week, modelNO, val_AvgUptime, val_WorkDate);
        },
        error: function (x, e) {
            alert(x.responseText);
        }
    });
}

function draw_Speedometer_Days(Title, week, modelNO, val_AvgUptime, val_WorkDate) {
    //參考 http://stackoverflow.com/questions/21070101/show-hide-div-using-javascript
    //隱藏div為(WEEKL0~WEEKL4)儀表板，折線圖(container_SMT_DAILY顯示
    document.getElementById('container_SMT_DAILY').style.display = 'block';
    document.getElementById('WEEKL0').style.display = 'none';
    document.getElementById('WEEKL1').style.display = 'none';
    document.getElementById('WEEKL2').style.display = 'none';
    document.getElementById('WEEKL3').style.display = 'none';
    document.getElementById('WEEKL4').style.display = 'none';
    document.getElementById('WEEKL5').style.display = 'none';

    //先清空
    //$("#container_SMT_DAILY").empty();  
    $('#container_SMT_DAILY').html("");
    $('#WEEKL0').html("");
    $('#WEEKL1').html("");
    $('#WEEKL2').html("");
    $('#WEEKL3').html("");
    $('#WEEKL4').html("");
    $('#WEEKL5').html("");

    var TitleName = "<p>" + Title + " " + week + "週，每日稼動率" + "</p>";
    //var TitleName = Title + " " + week + " 週，每日稼動率";

    $("#container_SMT_WEEKLY").dialog({

        title: TitleName,
        height: 560,
        width: 680
    });

    var chart = new Highcharts.Chart({
        chart: {
            renderTo: 'container_SMT_DAILY',
            type: 'line'
        },
        title: {
            text: false
        },
        xAxis: {
            categories: val_WorkDate
        },
        yAxis: {
            title: { text: ' (%)' },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }],
            labels: {
                formatter: function () {
                    return this.value + '%';
                }
            }
        },
        tooltip: { valueSuffix: '%' },
        series: [
              {
                  name: week + '週',
                  data: val_AvgUptime
              }
        ]
    });
}
