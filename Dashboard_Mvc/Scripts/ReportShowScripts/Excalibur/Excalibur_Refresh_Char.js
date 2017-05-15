$(document).ready(function () {
    var modelType = "Excalibur";
    var getUrl = "";

    var ExcaliburRateChart = new Object();
    ExcaliburRateChart.RenderTO = 'YieldRate';
    ExcaliburRateChart.Title = "良率趨勢變化(每秒鐘重整)";
    ExcaliburRateChart.yAxisTitle = 'Prersentage(%)';
    var chartSeries = [{
        name: '良率趨勢',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() * 100
                });
            }
            return data;
        }())
    }];
    ExcaliburRateChart.series = chartSeries;
    modelRefreshChart(ExcaliburRateChart);


    var ExcaliburCapacityChart = new Object();
    ExcaliburCapacityChart.RenderTO = 'Capacity';
    ExcaliburCapacityChart.Title = "產量趨勢變化(每秒鐘重整)";
    ExcaliburCapacityChart.yAxisTitle = '產量(K)';
    var chartSeries = [{
        name: '產量趨勢',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() * 100
                });
            }
            return data;
        }())
    }];
    ExcaliburCapacityChart.series = chartSeries;
    modelRefreshChart(ExcaliburCapacityChart);

    var ExcaliburSmtUPHChart = new Object();
    ExcaliburSmtUPHChart.RenderTO = 'SMTUPH';
    ExcaliburSmtUPHChart.Title = "SMT工段每小時產量(UPH)";
    ExcaliburSmtUPHChart.yAxisTitle = '產量(K)';
    var chartSeries = [{
        name: '產量趨勢',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() * 100
                });
            }
            return data;
        }())
    }];
    ExcaliburSmtUPHChart.series = chartSeries;
    modelRefreshChart(ExcaliburSmtUPHChart);

    var ExcaliburPackUPHChart = new Object();
    ExcaliburPackUPHChart.RenderTO = 'PackUPH';
    ExcaliburPackUPHChart.Title = "包裝工段每小時產量(UPH)";
    ExcaliburPackUPHChart.yAxisTitle = '產量(K)';
    var chartSeries = [{
        name: '產量趨勢',
        data: (function () {
            // generate an array of random data
            var data = [],
                time = (new Date()).getTime(),
                i;

            for (i = -19; i <= 0; i += 1) {
                data.push({
                    x: time + i * 1000,
                    y: Math.random() * 100
                });
            }
            return data;
        }())
    }];
    ExcaliburPackUPHChart.series = chartSeries;
    modelRefreshChart(ExcaliburPackUPHChart);

    var ExcaliburSMTOEEChart = new Object();
    ExcaliburSMTOEEChart.RenderTO = 'SMTOEE';
    ExcaliburSMTOEEChart.Title = "SMT稼動率";
    ExcaliburSMTOEEChart.yAxisTitle = '產量(K)';
    ExcaliburSMTOEEChart.data = [80];
    modelRefreshSMTOee(ExcaliburSMTOEEChart);

});

