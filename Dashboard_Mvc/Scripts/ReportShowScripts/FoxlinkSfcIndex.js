$(document).ready(function () {
    var getModelProductUrl = "/FoxlinkSfc/getPackTotalCapacity", modelNO = "", timeInterval = "1Month", isTotalCapacity = true;

    initMainPage();
    function initMainPage() {
        var ExcaliburProductChart = new Object();
        ExcaliburProductChart.RenderTO = 'ExcaliburDiv';
        ExcaliburProductChart.Title = "Excalibur日過站總量";
        ExcaliburProductChart.yAxisTitle = 'Excalibur日過站總量';
        ExcaliburProductChart.xtext = [];
        var chartSeries = [{
                    type: 'column',
                    name: "Excalibur日過站總量"
                }, {
                    type: 'line',
                    name: "Excalibur日過站總量",
                    color: '#89A54E'
                }
                ];
        ExcaliburProductChart.series = chartSeries;
        //setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var ExcaliburChart = setColumnAndTrendCharts(ExcaliburProductChart);
        modelNO = "Excalibur";
        getModelOneMonProduct(modelNO, ExcaliburChart, ExcaliburProductChart.xtext);
       
        var B9ProductChart = new Object();
        B9ProductChart.RenderTO = 'B9Div';
        B9ProductChart.Title = "B9日過站總量";
        B9ProductChart.yAxisTitle = 'B9日過站總量';
        B9ProductChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "B9日過站總量"
        }, {
            type: 'line',
            name: "B9日過站總量",
            color: '#89A54E'
        }
        ];
        B9ProductChart.series = chartSeries;
       // setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var B9Chart = setColumnAndTrendCharts(B9ProductChart);
        modelNO = "B9";
        getModelOneMonProduct(modelNO, B9Chart, B9ProductChart.xtext);

        var AandSProductChart = new Object();
        AandSProductChart.RenderTO = 'AandSDiv';
        AandSProductChart.Title = "A/S & C/P日過站總量";
        AandSProductChart.yAxisTitle = 'A/S & C/P日過站總量';
        AandSProductChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "A/S & C/P日過站總量"
        }, {
            type: 'line',
            name: "A/S & C/P日過站總量",
            color: '#89A54E'
        }
        ];
        AandSProductChart.series = chartSeries;
      //  setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var AandSChart = setColumnAndTrendCharts(AandSProductChart);
        modelNO = "A/S";
        getModelOneMonProduct(modelNO, AandSChart, AandSProductChart.xtext);

        var HandMProductChart = new Object();
        HandMProductChart.RenderTO = 'HandMDiv';
        HandMProductChart.Title = "H/M日過站總量";
        HandMProductChart.yAxisTitle = 'H/M日過站總量';
        HandMProductChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "H/M日過站總量"
        }, {
            type: 'line',
            name: "H/M日過站總量",
            color: '#89A54E'
        }
        ];
        HandMProductChart.series = chartSeries;
       // setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var HandMChart = setColumnAndTrendCharts(HandMProductChart);
        modelNO = "H/M";
        getModelOneMonProduct(modelNO, HandMChart, HandMProductChart.xtext);

        var TaurusProductChart = new Object();
        TaurusProductChart.RenderTO = 'TaurusDiv';
        TaurusProductChart.Title = "TAURUS(LK)日過站總量";
        TaurusProductChart.yAxisTitle = 'TAURUS(LK)日過站總量';
        TaurusProductChart.xtext = [];
        var chartSeries = [{
            type: 'column',
            name: "TAURUS(LK)日過站總量"
        }, {
            type: 'line',
            name: "TAURUS(LK)日過站總量",
            color: '#89A54E'
        }
        ];
        TaurusProductChart.series = chartSeries;
      //  setColumnAndTrendCharts();方法在PagesJS/CommonMethod.js文件中
        var TaurusChart = setColumnAndTrendCharts(TaurusProductChart);
        modelNO = "Taurus";
        getModelOneMonProduct(modelNO, TaurusChart, TaurusProductChart.xtext);
        
        function getModelOneMonProduct(modelNO,chart, xtext) {
            $.ajax({
                type: 'POST',
                url: getModelProductUrl,
                dataType: "json",
                data: "{'modelNO':'" + modelNO + "','timeInterval':'" + timeInterval + "','isTotalCapacity':'" + isTotalCapacity + "'}",
                beforeSend: function (x) {
                    x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                },
                success: function (data) {
                    for (var key in data.Table) {
                        data.Table[key].y = data.Table[key].PACKING_QTY;
                        xtext.push(data.Table[key].WORK_DATE);
                    }
                    chart.series[0].setData(data.Table);
                    chart.series[1].setData(data.Table);

                },
                error: function (x, e) {
                    alert(x.responseText);
                }
            });
        }

    }
});
