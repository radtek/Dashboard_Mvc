var timeInterval = "";
$(document).ready(function () {
    var report = "";

    var getReportTypeURL = 'getReportTypeOptions';
    var modelName = getURLParameter('Model');
    if (modelName == "AS")//URI中有特殊符号时，编码不正确
        modelName = "A/S";//DB中的值
    if (modelName == "HM")
        modelName = "H/M";
    if (modelName == "TAURUSLK")
        modelName = "TAURUS(LK)";
    if (modelName == "TAURUSKS")
        modelName = "TAURUS(KS)"
    $(document).attr("title", modelName + "報表中心");
    if (modelName == "B9" || modelName == "A/S" || modelName == "H/M" || modelName == "Excalibur") {
        getReportType(modelName, true);
        getReportType(modelName, false);
    }
    if (modelName == "TAURUS(LK)" || modelName == "TAURUS(KS)") {
        getReportType(modelName, false);
    }

    function getReportType(modelNO, isSMTReport) {
        $.ajax({
                    type: 'POST',
                    url: getReportTypeURL,
                    dataType: "json",
                    data: "{'modelNO': '" + modelNO + "','isSMTReport': '" + isSMTReport + "'}",
                    beforeSend: function (x) {
                        x.setRequestHeader("Content-Type", "application/json; charset=utf-8");
                    },
                    success: function (json) {
                        if (isSMTReport) {
                            $('#SMTul').empty();
                            if (json.Table.length > 0) {
                                showSMTReportType(json.Table);
                            }
                        }
                        else {
                            $('#PACKul').empty();
                            if (json.Table.length > 0) {
                            showPackReportType(json.Table);
                           }
                        }
                    },
                    error: function (x, e) {
                        alert(x.responseText);
                    }
                });
    }

    function showSMTReportType(data) {
        for (var i = 0; i < data.length; i++) {
            var reportElement = "<li><a id=" + data[i]["REPORT_ID"] + " style='cursor:pointer;' class='active'>" + data[i]["REPORT_NAME"] + "</a></li>";
            $('#SMTul').append(reportElement);
        }

        $.each($("#SMTul li a"), function () {
            $(this).click(function () {
                report = $(this).attr("id");
                //設置<a>標籤的被點擊時的顏色
                clearClass();
                $(this).addClass("a_ClickColor");
                function clearClass() {
                    $(".nav-sidebar li a").each(function () {
                        $(this).removeClass("a_ClickColor");
                    });
                }
                //B9 SMT 產能資訊
                if (report == 'RPT00091') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9 SMT近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_TotalPro.js");
                }
                if (report == 'RPT00092') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_TotalPro.js");
                }
                if (report == 'RPT00093') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9 SMT近兩周總產量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_TotalPro.js");
                }
                if (report == 'RPT00094') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9 SMT近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_TotalPro.js");
                }
                if (report == 'RPT00095') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近七天線體數</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_LineNum.js");
                }
                if (report == 'RPT00096') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近兩周線體數</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_LineNum.js");
                }
                if (report == 'RPT00097') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近一個月線體數</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_LineNum.js");
                }
                if (report == 'RPT00098') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近七天檢測站實際產生(不含重工)</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00099') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近兩周檢測站實際產生(不含重工)</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00100') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近一個月檢測站實際產生(不含重工)</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00101') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近七天檢測站過帳總量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00102') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近兩周檢測站過帳總量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00103') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9 SMT近一個月檢測站過帳總量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00104') {
                    window.location.replace("ModelLineStatus?modelName=B9");
                }
                //AandS SMT 產能資訊
                if (report == 'RPT00105') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>C/P & A/S SMT近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_TotalPro.js");
                }
                if (report == 'RPT00106') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>C/P & A/S SMT近兩周總產量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_TotalPro.js");
                }
                if (report == 'RPT00107') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>C/P & A/S SMT近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_TotalPro.js");
                }
                if (report == 'RPT00108') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>C/P & A/S SMT近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_TotalPro.js");
                }
                if (report == 'RPT00109') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>C/P & A/S SMT近七天線體數</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_LineNum.js");
                }
                if (report == 'RPT00110') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>C/P & A/S SMT近兩周線體數</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_LineNum.js");
                }
                if (report == 'RPT00111') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>C/P & A/S SMT近一個月線體數</h4>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_LineNum.js");
                }
                if (report == 'RPT00112') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>C/P & A/S SMT近七天檢測站過帳總量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00113') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>C/P & A/S SMT近兩周檢測站過帳總量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00114') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>C/P & A/S SMT近一個月檢測站過帳總量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00115') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>ARYA SMT近七天檢測站實際產生(不含重工)</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/ARYA_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00116') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>ARYA SMT近兩周檢測站實際產生(不含重工)</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/ARYA_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00117') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>ARYA SMT一個月檢測站實際產生(不含重工)</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/ARYA_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00118') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>ARYA SMT近四個月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/ARYA_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00119') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>SANSA SMT近七天檢測站實際產生</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/SANSA_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00120') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>SANSA SMT近兩周檢測站實際產生</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/SANSA_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00121') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>SANSA SMT近一個月檢測站實際產生</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/SANSA_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00122') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>SANSA SMT近四個月總產量</h3>";
                    timeInterval = "4Month"
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/SANSA_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00123') {
                    window.location.replace("ModelLineStatus?modelName=A/S");
                }
                //HandM SMT 產能資訊
                if (report == 'RPT00124') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>H/M SMT近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_TotalPro.js");
                }
                if (report == 'RPT00125') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>H/M SMT近兩周總產量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_TotalPro.js");
                }
                if (report == 'RPT00126') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>H/M SMT近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_TotalPro.js");
                }
                if (report == 'RPT00127') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M SMT近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_TotalPro.js");
                }
                if (report == 'RPT00128') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M SMT近七天線體數</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_LineNum.js");
                }
                if (report == 'RPT00129') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M SMT近兩周線體數</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_LineNum.js");
                }
                if (report == 'RPT00130') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M SMT近一個月線體數</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_LineNum.js");
                }
                if (report == 'RPT00131') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M SMT近七天檢測站過帳總量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00132') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M SMT近兩周檢測站過帳總量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00133') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M SMT近一個月檢測站過帳總量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00134') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>HERMES SMT近七天檢測站實際產生(不含重工)</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HERMES_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00135') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>HERMES SMT近兩周檢測站實際產生(不含重工)</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HERMES_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00136') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>HERMES SMT一個月檢測站實際產生(不含重工)</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HERMES_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00137') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>HERMES SMT近四個月總產量</h4>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HERMES_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00138') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Mercury SMT近七天檢測站實際產生</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/MERCURY_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00139') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Mercury SMT近兩周檢測站實際產生</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/MERCURY_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00140') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Mercury SMT近一個月檢測站實際產生</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/MERCURY_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00141') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Mercury SMT近四個月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/MERCURY_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00142') {
                    window.location.replace("ModelLineStatus?modelName=H/M");
                }
                //Excalibur SMT 產能資訊
                if (report == 'RPT00063') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Excalibur SMT近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_TotalPro.js");
                }
                if (report == 'RPT00064') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur SMT近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_TotalPro.js");
                }
                if (report == 'RPT00065') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Excalibur SMT近兩周總產量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_TotalPro.js");
                }
                if (report == 'RPT00066') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Excalibur SMT近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_TotalPro.js");
                }
                if (report == 'RPT00067') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>EXCALIBUR SMT近七天線體數</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_LineNum.js");
                }
                if (report == 'RPT00068') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>EXCALIBUR SMT近兩周線體數</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_LineNum.js");
                }
                if (report == 'RPT00069') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>EXCALIBUR SMT近一個月線體數</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_LineNum.js");
                }
                if (report == 'RPT00070') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>EXCALIBUR SMT檢測站近七天實際產生(不含重工)</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00071') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>EXCALIBUR SMT檢測站近兩周實際產生(不含重工)</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00072') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>EXCALIBUR SMT檢測站近一個月實際產生(不含重工)</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_CheckRealOut.js");
                }
                if (report == 'RPT00073') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>EXCALIBUR SMT檢測站近七天過帳總量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00074') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>EXCALIBUR SMT檢測站近兩周過帳總量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00075') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>EXCALIBUR SMT檢測站近一個月過帳總量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_SMT_CheckPostOut.js");
                }
                if (report == 'RPT00076') {
                    window.location.replace("ModelLineStatus?modelName=Excalibur");
                }

            });
        });
    }

    function showPackReportType(data) {
        for (var i = 0; i < data.length; i++) {
            var reportElement = "<li><a id=" + data[i]["REPORT_ID"] + " style='cursor:pointer;'>" + data[i]["REPORT_NAME"] + "</a></li>";
            $('#PACKul').append(reportElement);
        }
        $.each($("#PACKul li a"), function () {
            $(this).click(function () {
                report = $(this).attr("id");

                //設置<a>標籤的被點擊時的顏色
                clearClass();
                $(this).addClass("a_ClickColor");
                function clearClass() {
                    $(".nav-sidebar li a").each(function () {
                        $(this).removeClass("a_ClickColor");
                    });
                }

                //B9包裝站 產能資訊
                if (report == 'RPT00077') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9近七天總產量</h3>";
                    timeInterval = "7Day";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_TotalCapacity.js");
                }
                if (report == 'RPT00078') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_TotalCapacity.js");
                }
                if (report == 'RPT00079') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9近兩周總產量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_TotalCapacity.js");
                }
                if (report == 'RPT00080') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_TotalCapacity.js");
                }
                if (report == 'RPT00081') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9近七天包裝線線體數</h3>";
                    timeInterval = "7Day";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_Packing_LineNum.js");
                }
                if (report == 'RPT00082') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9近兩周包裝線線體數</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_Packing_LineNum.js");
                }
                if (report == 'RPT00083') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9近一個月包裝線線體數</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_Packing_LineNum.js");
                }
                if (report == 'RPT00084') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9近七天包裝站實際產出</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_Packing_RealOut.js");
                }
                if (report == 'RPT00085') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9近兩周包裝站實際產出</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_Packing_RealOut.js");
                }
                if (report == 'RPT00086') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>B9近一個月包裝站實際產出</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_Packing_RealOut.js");
                }
                if (report == 'RPT00087') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9近七天包裝站總過帳量</h3>";
                    timeInterval = "7Day";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_Packing_PostNum.js");
                }
                if (report == 'RPT00088') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9近兩周包裝站總過帳量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_Packing_PostNum.js");
                }
                if (report == 'RPT00089') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>B9近一個月包裝站總過帳量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/B9/B9_Packing_PostNum.js");
                }
                //A/S包裝站 產能資訊
                if (report == 'RPT00001') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Total_Product.js");
                }
                if (report == 'RPT00002') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近兩周總產量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Total_Product.js");
                }
                if (report == 'RPT00003') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Total_Product.js");
                }
                if (report == 'RPT00004') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Total_Product.js");
                }
                if (report == 'RPT00005') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近七天包裝線線體數</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Packing_LineNum.js");
                }
                if (report == 'RPT00006') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近兩周包裝線線體數</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Packing_LineNum.js");
                }
                if (report == 'RPT00007') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近一個月包裝線線體數</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Packing_LineNum.js");
                }
                if (report == 'RPT00016') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近七天包裝站總過帳量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Packing_PostNum.js");
                }
                if (report == 'RPT00017') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近兩周包裝站總過帳量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Packing_PostNum.js");
                }
                if (report == 'RPT00018') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>A/S近一個月包裝站總過帳量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/AandS_Packing_PostNum.js");
                }
                if (report == 'RPT00008') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Arya近七天包裝站實際產出</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/ARYA_Packing_RealOut.js");
                }
                if (report == 'RPT00009') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Arya近兩周包裝站實際產出</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/ARYA_Packing_RealOut.js");
                }
                if (report == 'RPT00010') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Arya近一個月包裝站實際產出</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/ARYA_Packing_RealOut.js");
                }
                if (report == 'RPT00011') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Arya近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/ARYA_Packing_RealOut.js");
                }
                if (report == 'RPT00012') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Sansa近七天包裝站實際產出</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/SANSA_Packing_RealOut.js");
                }
                if (report == 'RPT00013') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Sansa近兩周包裝站實際產出</h4>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/SANSA_Packing_RealOut.js");
                }
                if (report == 'RPT00014') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Sansa近一個月包裝站實際產出</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/SANSA_Packing_RealOut.js");
                }
                if (report == 'RPT00015') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Sansa近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/SANSA_Packing_RealOut.js");
                }
                if (report == 'RPT00143') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Castor近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/Castor_Total_Product.js");
                }
                //C/P包裝站 產能資訊
                if (report == 'RPT00144') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Castor近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/Castor_Total_Product.js");
                }
                if (report == 'RPT00145') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Pollux近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/Pollux_Total_Product.js");
                }
                if (report == 'RPT00146') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Pollux近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Arya_Sansa/Pollux_Total_Product.js");
                }
                //HandM包裝站 產能資訊
                if (report == 'RPT00019') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>H/M近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Total_Product.js");
                }
                if (report == 'RPT00020') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>H/M近兩周總產量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Total_Product.js");
                }
                if (report == 'RPT00021') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>H/M近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Total_Product.js");
                }
                if (report == 'RPT00022') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Total_Product.js");
                }
                if (report == 'RPT00023') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M近七天包裝線線體數</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Packing_LineNum.js");
                }
                if (report == 'RPT00024') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M近兩周包裝線線體數</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Packing_LineNum.js");
                }
                if (report == 'RPT00025') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M近一個月包裝線線體數</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Packing_LineNum.js");
                }
                if (report == 'RPT00026') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Hermes近七天包裝站實際產出</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HERMES_Packing_RealOut.js");
                }
                if (report == 'RPT00027') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Hermes近兩周包裝站實際產出</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HERMES_Packing_RealOut.js");
                }
                if (report == 'RPT00028') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Hermes近一個月包裝站實際產出</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HERMES_Packing_RealOut.js");
                }
                if (report == 'RPT00029') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Hermes近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HERMES_Packing_RealOut.js");
                }
                if (report == 'RPT00030') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Mercury近七天包裝站實際產出</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/MERCURY_Packing_RealOut.js");
                }
                if (report == 'RPT00031') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Mercury近兩周包裝站實際產出</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/MERCURY_Packing_RealOut.js");
                }
                if (report == 'RPT00032') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Mercury近一個月包裝站實際產出</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/MERCURY_Packing_RealOut.js");
                }
                if (report == 'RPT00033') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Mercury近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/MERCURY_Packing_RealOut.js");
                }
                if (report == 'RPT00034') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M近七天包裝站總過帳量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Packing_PostNum.js");
                }
                if (report == 'RPT00035') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M近兩周包裝站總過帳量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Packing_PostNum.js");
                }
                if (report == 'RPT00036') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>H/M近一個月包裝站總過帳量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Hermes_Mercury/HandM_Packing_PostNum.js");
                }
                //Excalibur包裝站 產能資訊
                if (report == 'RPT00050') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Excalibur近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Total_Product.js");
                }
                if (report == 'RPT00051') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Total_Product.js");
                }
                if (report == 'RPT00052') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur近兩周總產量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Total_Product.js");
                }
                if (report == 'RPT00053') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Total_Product.js");
                }
                if (report == 'RPT00054') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur近七天包裝線線體數</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Packing_LineNum.js");
                }
                if (report == 'RPT00055') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur近兩周包裝線線體數</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Packing_LineNum.js");
                }
                if (report == 'RPT00056') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur近一個月包裝線線體數</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Packing_LineNum.js");
                }
                if (report == 'RPT00057') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Excalibur近七天包裝站實際產出</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Packing_RealOut.js");
                }
                if (report == 'RPT00058') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Excalibur近兩周包裝站實際產出</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Packing_RealOut.js");
                }
                if (report == 'RPT00059') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>Excalibur近一個月包裝站實際產出</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Packing_RealOut.js");
                }
                if (report == 'RPT00060') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur近七天包裝站總過帳量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Packing_PostOut.js");
                }
                if (report == 'RPT00061') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur近兩周包裝站總過帳量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Packing_PostOut.js");
                }
                if (report == 'RPT00062') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>Excalibur近一個月包裝站總過帳量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Excalibur/Excalibur_Packing_PostOut.js");
                }
                //Taurus(LK)包裝站 產能資訊
                if (report == 'RPT00037') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>TAURUS(LK)近七天總產量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_Total_Product.js");
                }
                if (report == 'RPT00038') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>TAURUS(LK)近兩周總產量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_Total_Product.js");
                }
                if (report == 'RPT00039') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>TAURUS(LK)近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_Total_Product.js");
                }
                if (report == 'RPT00040') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>TAURUS(LK)近四個月 月總產量</h3>";
                    timeInterval = "4Month";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_Total_Product.js");
                }
                if (report == 'RPT00041') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>TAURUS(LK)近七天包裝線線體數</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_Packing_LineNum.js");
                }
                if (report == 'RPT00042') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>TAURUS(LK)近兩周包裝線線體數</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_Packing_LineNum.js");
                }
                if (report == 'RPT00043') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>TAURUS(LK)近一個月包裝線線體數</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_Packing_LineNum.js");
                }
                if (report == 'RPT00044') {
                    showLeftReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>TAURUS(LK)近七天的UPH</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_UPH.js");
                }
                if (report == 'RPT00045') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>TAURUS(LK)近兩周的UPH</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_UPH.js");
                }
                if (report == 'RPT00046') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>TAURUS(LK)近一個月的UPH</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_UPH.js");
                }
                if (report == 'RPT00047') {
                    showLeftRightReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>TAURUS(LK)近七天通過各NI站總數量</h3>";
                    timeInterval = "1Week";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_By_NIStation.js");
                }
                if (report == 'RPT00048') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>TAURUS(LK)近兩周通過各NI站總數量</h3>";
                    timeInterval = "2Week";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_By_NIStation.js");
                }
                if (report == 'RPT00049') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>TAURUS(LK)近一個月通過各NI站總數量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(LK)/Taurus(LK)_By_NIStation.js");
                }

                //Taurus(KS)包裝站 產能資訊
                if (report == 'RPT00155') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>TAURUS(KS)近一個月總產量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(KS)/Taurus(KS)_Total_Product.js");
                }
                if (report == 'RPT00156') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>TAURUS(KS)近一個月包裝線線體數</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(KS)/Taurus(KS)_Packing_LineNum.js");
                }
                if (report == 'RPT00157') {
                    showUpReport();
                    document.getElementById("modelReportTitle").innerHTML += "<H3>TAURUS(KS)近一個月的UPH</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(KS)/Taurus(KS)_UPH.js");
                }
                if (report == 'RPT00158') {
                    showUpDownReport();
                    document.getElementById("modelReportTitle").innerHTML += "<h3>TAURUS(KS)近一個月通過各NI站總數量</h3>";
                    timeInterval = "1Month";
                    $.getScript("../Scripts/ReportShowScripts/Taurus(KS)/Taurus(KS)_By_NIStation.js");
                }
            });
        });
    }

    function showLeftRightReport() {
        $("#modelReportTitle").empty();
        $('#rateReport').show();
        document.getElementById("productReport").style.float = "left";
        document.getElementById("rateReport").style.float = "right";
        document.getElementById("productReport").style.width = "45%";
        document.getElementById("rateReport").style.width = "45%";
    }
    function showUpDownReport() {
        $("#modelReportTitle").empty();
        $('#rateReport').show();
        document.getElementById("productReport").style.float = "none";
        document.getElementById("rateReport").style.float = "none";
        document.getElementById("productReport").style.width = "100%";
        document.getElementById("rateReport").style.width = "100%";
    }
    function showLeftReport(){
        $("#modelReportTitle").empty();
        $('#rateReport').hide();
        document.getElementById("productReport").style.float = "left";
        document.getElementById("productReport").style.width = "45%";
    }
    function showUpReport() {
        $("#modelReportTitle").empty();
        $('#rateReport').hide();
        document.getElementById("productReport").style.float = "none";
        document.getElementById("productReport").style.width = "100%";
    }
});