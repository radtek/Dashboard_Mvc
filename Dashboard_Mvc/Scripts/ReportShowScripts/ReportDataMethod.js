
//得到機種總產量和良率
function getTotalCapacity(getTotalCapacityUrl, ProduChart, RateChart, productXtext, rateXtext, modelNO, timeInterval, isTotalCapacity) {
    $.ajax({
        type: 'POST',
        url: getTotalCapacityUrl,
        dataType: "json",
        data: "{'modelNO':'" + modelNO + "','timeInterval':'" + timeInterval + "','isTotalCapacity':'" + isTotalCapacity + "'}",
        beforeSend: function (x) {
            x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        },
        success: function (json) {
            $('#tableArea thead').empty();
            $('#tableArea tfoot').empty();
            $('#tableArea tbody').empty();
            if (json.d == "") {
                alert('找不到資料');
            }
            else {
                for (var key in json.Table) {
                    json.Table[key].y = json.Table[key].PACKING_QTY;
                    if (timeInterval == "4Month")
                        productXtext.push(json.Table[key].WORK_MONTH);
                    else
                        productXtext.push(json.Table[key].WORK_DATE);
                }
                ProduChart.series[0].setData(json.Table);
                ProduChart.series[1].setData(json.Table);

                for (var key in json.Table) {
                    if (modelNO == 'TAURUS(KS)') {
                        var flv = json.Table[key].FIRSTPASS_RATE;
                    }
                    else {
                        var flv = json.Table[key].FIRSTPASS_RATE.replace(/%/, "");
                    }
                    var dflv = parseFloat(flv);
                    json.Table[key].y = dflv;
                    if (timeInterval == "4Month")
                        rateXtext.push(json.Table[key].WORK_MONTH);
                    else
                        rateXtext.push(json.Table[key].WORK_DATE);
                }
                RateChart.series[0].setData(json.Table);

                if (json.Table.length > 0) {
                    if (timeInterval == "4Month") {
                        showTableTitles('monthPro');
                        showTableContents(json.Table, 'monthPro');
                    }
                    else {
                        showTableTitles('totalPro');
                        showTableContents(json.Table, 'totalPro');
                    }
                }              
            }
        },
        error: function (x, e) {
            alert(x.responseText);
        }
    });
}

//得到機種總過賬量
function getModelPostOut(getModelPostOutUrl, modelPostOutChart, postOutXtext, modelNO, timeInterval) {
    $.ajax({
        type: 'POST',
        url: getModelPostOutUrl,
        dataType: "json",  
        data: "{'modelNO':'" + modelNO + "','timeInterval':'" + timeInterval + "'}",
        beforeSend: function (x) {
            x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        },
        success: function (json) {
                $('#tableArea thead').empty();
                $('#tableArea tfoot').empty();
                $('#tableArea tbody').empty();
                if (json == "") {
                alert('找不到資料');
            }
            else {
                for (var key in json.Table) {
                    json.Table[key].y = json.Table[key].PACKING_QTY;
                    postOutXtext.push(json.Table[key].WORK_DATE);
                }
                modelPostOutChart.series[0].setData(json.Table);
                modelPostOutChart.series[1].setData(json.Table);

                if (json.Table.length > 0) {                  
                    showTableTitles('postNum');
                    showTableContents(json.Table, 'postNum');
                }               
            }
        },
        error: function (x, e) {
            alert(x.responseText);
        }
    });
}
//得到機種總過賬量
function getLineNum(getLineNumUrl, lineNumChart, lineNumXtext, modelNO, timeInterval) {
    $.ajax({
        type: 'POST',
        url: getLineNumUrl,
        dataType: "json",
        data: "{'modelNO':'" + modelNO + "','timeInterval':'" + timeInterval + "'}",
        beforeSend: function (x) {
            x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        },
        success: function (json) {
            $('#tableArea thead').empty();
            $('#tableArea tfoot').empty();
            $('#tableArea tbody').empty();
            if (json == "") {
                alert('找不到資料');
            }
            else {
                for (var key in json.Table) {
                    json.Table[key].y = json.Table[key].LINE_NUM;
                    lineNumXtext.push(json.Table[key].WORK_DATE);
                }
                lineNumChart.series[0].setData(json.Table);
                lineNumChart.series[1].setData(json.Table);

                if (json.Table.length > 0) {                  
                    showTableTitles('lineNum');
                    showTableContents(json.Table, 'lineNum');
                }
            }
        },
        error: function (x, e) {
            alert(x.responseText);
        }
    });
}

//得到機種總產量和良率(給定起始與結束時間)
function getTotalCapacityByDate(getTotalCapacityUrl, produtChart, rateChart, productXtext, rateXtext, modelNO, startDate, endDate) {
    $.ajax({
        type: 'POST',
        url: getTotalCapacityUrl,
        dataType: "json",
        data: "{'modelNO':'" + modelNO + "','startDate':'" + startDate + "','endDate':'" + endDate + "'}",
        beforeSend: function (x) {
            x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        },
        success: function (json) {
            $('#tableArea thead').empty();
            $('#tableArea tfoot').empty();
            $('#tableArea tbody').empty();
            if (json == "") {
                alert('找不到資料');
            }
            else {
                for (var key in json.Table) {
                    json.Table[key].y = json.Table[key].PACKING_QTY;
                    productXtext.push(json.Table[key].WORK_DATE);
                }
                produtChart.series[0].setData(json.Table);
                produtChart.series[1].setData(json.Table);

                for (var key in json.Table) {
                    var flv = json.Table[key].FIRSTPASS_RATE.replace(/%/, "");
                    var dflv = parseFloat(flv);
                    json.Table[key].y = dflv;
                    rateXtext.push(json.Table[key].WORK_DATE);
                }
                rateChart.series[0].setData(json.Table);

                if (json.Table.length > 0) {                 
                    showTableTitles('totalPro');
                    showTableContents(json.Table, 'totalPro');
                }
            }
        },
        error: function (x, e) {
            alert(x.responseText);
        }
    });
}

