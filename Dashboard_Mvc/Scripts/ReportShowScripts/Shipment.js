$(document).ready(function () {
    $("#ModelShipmentTitle,#SMTul,#PACKul").empty();
    document.getElementById("ModelShipmentTitle").innerHTML += "<H3>機種出貨量</h3>";
    //以下兩個方法在PagesJS/CommonMethod.js文件中定義
    var nowDate = getNowDate();
    var oneMonBeforDate = getOneMonBeforDate();
    var getShipmentUrl = '../FoxlinkSfc/getShippingInfos', modelNO = "";
    initShipmentPage(oneMonBeforDate, nowDate);

    $('#startDate').datepicker({
        changeMonth: true,
        changeYear: true,
        inline: true,
        dateFormat: 'yy/mm/dd',
        maxDate: 0,
        onClose: function (selectedDate) {
            $("#endDate").datepicker("option", "minDate", selectedDate);
        }
    });

    $('#endDate').datepicker({
        changeMonth: true,
        changeYear: true,
        inline: true,
        dateFormat: 'yy/mm/dd',
        maxDate: 0,
        onClose: function (selectedDate) {
            $("#startDate").datepicker("option", "maxDate", selectedDate);
        }

    });

    $('#searchBtn').click(function () {
        var selectStartDate = $('#startDate').val();
        var selectEndDate = $('#endDate').val();
        var errorMsg = '';
        if (selectStartDate == '')
            errorMsg += '請選擇起始時間\n';
        if (selectEndDate == '')
            errorMsg += '請選擇結束時間\n';
        if (errorMsg.length > 0) {
            alert(errorMsg);
        }
        else {
            initShipmentPage(selectStartDate, selectEndDate);
        }
    });

    function initShipmentPage(startDate, endDate) {
        var ExcaliburShipmentChart = new Object();
        ExcaliburShipmentChart.RenderTO = 'ExcaliburShipmentDiv';
        ExcaliburShipmentChart.Title = 'Excalibur機種出貨量';
        ExcaliburShipmentChart.yAxisTitle = 'Excalibur機種出貨量';
        ExcaliburShipmentChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "Excalibur產量",
            color: '#7CB5EC'
        }, {
            type: 'line',
            name: "Excalibur產量",
            color: '#7CB5EC'
        },
            {
                type: 'column',
                name: "Excalibur出貨量",
                color: '#89A54E'
            },
            {
                type: 'line',
                name: "Excalibur出貨量",
                color: '#89A54E'
            }
        ];
        ExcaliburShipmentChart.series = chartSeries;
        //setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var ExcaliburChart = setColumnAndTrendCharts(ExcaliburShipmentChart);
        modelNO = "Excalibur";
        getModelShipment(modelNO, ExcaliburChart, ExcaliburShipmentChart.xtext, startDate, endDate);

        var B9ShipmentChart = new Object();
        B9ShipmentChart.RenderTO = 'B9ShipmentDiv';
        B9ShipmentChart.Title = 'B9機種出貨量';
        B9ShipmentChart.yAxisTitle = 'B9機種出貨量';
        B9ShipmentChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "B9產量",
            color: '#7CB5EC'
        }, {
            type: 'line',
            name: "B9產量",
            color: '#7CB5EC'
        },
            {
                type: 'column',
                name: "B9出貨量",
                color: '#89A54E'
            },
            {
                type: 'line',
                name: "B9出貨量",
                color: '#89A54E'
            }
        ];
        B9ShipmentChart.series = chartSeries;
        //setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var B9Chart = setColumnAndTrendCharts(B9ShipmentChart);
        modelNO = "B9";
        getModelShipment(modelNO, B9Chart, B9ShipmentChart.xtext, startDate, endDate);


        var AandSShipmentChart = new Object();
        AandSShipmentChart.RenderTO = 'AandSShipmentDiv';
        AandSShipmentChart.Title = 'A/S & C/P機種出貨量';
        AandSShipmentChart.yAxisTitle = 'A/S & C/P機種出貨量';
        AandSShipmentChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "A/S & C/P產量",
            color: '#7CB5EC'
        }, {
            type: 'line',
            name: "A/S & C/P產量",
            color: '#7CB5EC'
        },
            {
                type: 'column',
                name: "A/S & C/P出貨量",
                color: '#89A54E'
            },
            {
                type: 'line',
                name: "A/S & C/P出貨量",
                color: '#89A54E'
            }
        ];
        AandSShipmentChart.series = chartSeries;
        //setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var AandSChart = setColumnAndTrendCharts(AandSShipmentChart);
        modelNO = "A/S";
        getModelShipment(modelNO, AandSChart, AandSShipmentChart.xtext, startDate, endDate);


        var HandMShipmentChart = new Object();
        HandMShipmentChart.RenderTO = 'HandMShipmentDiv';
        HandMShipmentChart.Title = 'H/M機種出貨量';
        HandMShipmentChart.yAxisTitle = 'H/M機種出貨量';
        HandMShipmentChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "H/M產量",
            color: '#7CB5EC'
        }, {
            type: 'line',
            name: "H/M產量",
            color: '#7CB5EC'
        },
            {
                type: 'column',
                name: "H/M出貨量",
                color: '#89A54E'
            },
            {
                type: 'line',
                name: "H/M出貨量",
                color: '#89A54E'
            }
        ];
        HandMShipmentChart.series = chartSeries;
        //setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var HandMChart = setColumnAndTrendCharts(HandMShipmentChart);
        modelNO = "H/M";
        getModelShipment(modelNO, HandMChart, HandMShipmentChart.xtext, startDate, endDate);


        var TaurusShipmentChart = new Object();
        TaurusShipmentChart.RenderTO = 'TaurusShipmentDiv';
        TaurusShipmentChart.Title = 'TAURUS(LK)機種出貨量';
        TaurusShipmentChart.yAxisTitle = 'TAURUS(LK)機種出貨量';
        TaurusShipmentChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "TAURUS(LK)產量",
            color: '#7CB5EC'
        }, {
            type: 'line',
            name: "TAURUS(LK)產量",
            color: '#7CB5EC'
        },
            {
                type: 'column',
                name: "TAURUS(LK)出貨量",
                color: '#89A54E'
            },
            {
                type: 'line',
                name: "TAURUS(LK)出貨量",
                color: '#89A54E'
            }           
        ];
        TaurusShipmentChart.series = chartSeries;
        //setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var TaurusChart = setColumnAndTrendCharts(TaurusShipmentChart);
        modelNO = "Taurus";
        getModelShipment(modelNO, TaurusChart, TaurusShipmentChart.xtext, startDate, endDate);


        var AustinShipmentChart = new Object();
        AustinShipmentChart.RenderTO = 'AustinShipmentDiv';
        AustinShipmentChart.Title = 'AUSTIN機種出貨量';
        AustinShipmentChart.yAxisTitle = 'AUSTIN機種出貨量';
        AustinShipmentChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "AUSTIN產量",
            color: '#7CB5EC'
        }, {
            type: 'line',
            name: "AUSTIN產量",
            color: '#7CB5EC'
        },
            {
                type: 'column',
                name: "AUSTIN出貨量",
                color: '#89A54E'
            },
            {
                type: 'line',
                name: "AUSTIN出貨量",
                color: '#89A54E'
            }
        ];
        AustinShipmentChart.series = chartSeries;
        //setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var AustinChart = setColumnAndTrendCharts(AustinShipmentChart);
        modelNO = "Austin";
        getModelShipment(modelNO, AustinChart, AustinShipmentChart.xtext, startDate, endDate);



        function getModelShipment(modelNO, chart, xtext, startDate, endDate) {
            $.ajax({
                type: 'POST',
                url: getShipmentUrl,
                dataType: "json",
                data: "{'modelNO': '" + modelNO + "','startDate': '" + startDate + "', 'endDate': '" + endDate + "' }",
                beforeSend: function (x) {
                    x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                },
                success: function (json) {
                    for (var key in json.Table) {
                        json.Table[key].y = json.Table[key].MODELQTY;
                        xtext.push(json.Table[key].WORK_DATE);
                    }
                    chart.series[0].setData(json.Table);
                    chart.series[1].setData(json.Table);
                    for (var key in json.Table) {
                        json.Table[key].y = json.Table[key].SHIP_QTY;
                    }
                    chart.series[2].setData(json.Table);
                    chart.series[3].setData(json.Table);             
                },
                error: function (x, e) {
                    alert(x.responseText);
                }
            });
        }
    }

})