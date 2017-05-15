$(document).ready(function () {
    $("#SMTul,#PACKul").empty();

    var modelName = getURLParameter('modelName');
    if (modelName == "AS")//URI中有特殊符号时，编码不正确
        modelName = "A/S";//DB中的值
    if (modelName == "HM")
        modelName = "H/M";
    $(document).attr("title", modelName + "線體狀態");
    if (modelName == "Excalibur") {
        getOneDayBeforDate();
        $("#ModelStatusTitle").empty();
        document.getElementById("ModelStatusTitle").innerHTML += "<H4 style='color:#3071A9'> EXCALIBUR 線體狀態 稼動率時間:" + oneDayBeforDate + '</h4>';
        document.getElementById("ModelStatusTitle").innerHTML += "<H4> OEE VALUE 大於等於 0.85:顯示綠色<br/>OEE VALUE 大於等於0.6且小於 0.85:顯示黃色<br/>OEE VALUE 小於 0.6:顯示紅色</h4>";
        $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_LineStatus.js");
    }
    if (modelName == "B9") {
        getOneDayBeforDate();
        $("#ModelStatusTitle").empty();
        document.getElementById("ModelStatusTitle").innerHTML += "<H3> B9 線體狀態 稼動率時間:" + oneDayBeforDate + '</h3>';
        document.getElementById("ModelStatusTitle").innerHTML += "<H4> OEE VALUE 大於等於 0.85:顯示綠色<br/>OEE VALUE 大於等於0.6且小於 0.85:顯示黃色<br/>OEE VALUE 小於 0.6:顯示紅色</h4>";
        $.getScript("../Scripts/ReportShowScripts/B9/B9_LineStatus.js");
    }
    if (modelName == "A/S") {
        getOneDayBeforDate();
        $("#ModelStatusTitle").empty();
        document.getElementById("ModelStatusTitle").innerHTML += "<H3> A/S 線體狀態 稼動率時間:" + oneDayBeforDate + '</h3>';
        document.getElementById("ModelStatusTitle").innerHTML += "<H4> OEE VALUE 大於等於 0.85:顯示綠色<br/>OEE VALUE 大於等於0.6且小於 0.85:顯示黃色<br/>OEE VALUE 小於 0.6:顯示紅色</h4>";
        $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_LineStatus.js");
    }
    if (modelName == "H/M") {
        getOneDayBeforDate();
        $("#ModelStatusTitle").empty();
        document.getElementById("ModelStatusTitle").innerHTML += "<H3> H/M 線體狀態 稼動率時間:" + oneDayBeforDate + '</h3>';
        document.getElementById("ModelStatusTitle").innerHTML += "<H4>OEE VALUE 大於等於 0.85:顯示綠色<br/>OEE VALUE 大於等於0.6且小於 0.85:顯示黃色<br/>OEE VALUE 小於 0.6:顯示紅色</h4>";
        $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_LineStatus.js");
    }
    if (modelName == "Crete") {
        getOneDayBeforDate();
        $("#ModelStatusTitle").empty();
        document.getElementById("ModelStatusTitle").innerHTML += "<H3> Crete 線體狀態 稼動率時間:" + oneDayBeforDate + '</h3>';
        document.getElementById("ModelStatusTitle").innerHTML += "<H4>OEE VALUE 大於等於 0.85:顯示綠色<br/>OEE VALUE 大於等於0.6且小於 0.85:顯示黃色<br/>OEE VALUE 小於 0.6:顯示紅色</h4>";
        $.getScript("../Scripts/ReportShowScripts/Crete/Crete_LineStatus.js");
    }

    var oneDayBeforDate = '';
    function getOneDayBeforDate() {
        var d = new Date();
        d.setDate(d.getDate() - 1);
        oneDayBeforDate = d.getFullYear() + "年" + (d.getMonth() + 1) + "月" + d.getDate() + "日";
    }
});

