$(document).ready(function () {

    document.getElementById("SolidGaugeOeeTitle").innerHTML += "<H3>SMT 工段前一天稼動率</h3>";

    var getOneMonOeeUrl = "../FoxlinkSfc/getSMTOEETrendChart";
    var timeInterval = '1Month';

    var AandSsolidGaugeOee1 = new Object();
    AandSsolidGaugeOee1.RenderTo = 'AandSSolidOee';
    AandSsolidGaugeOee1.Title = 'A/S & C/P稼動率(含無運作機台)';
    var isIntevalExclude = false;
    getModelSolidOee(AandSsolidGaugeOee1, 'A/S', getOneMonOeeUrl, timeInterval, isIntevalExclude);

    var AandSsolidGaugeOee2 = new Object();
    AandSsolidGaugeOee2.RenderTo = 'AandSSolidOeeExclude';
    AandSsolidGaugeOee2.Title = 'A/S & C/P稼動率(不含無運作機台)';
    var isIntevalExclude = true;
    getModelSolidOee(AandSsolidGaugeOee2, 'A/S', getOneMonOeeUrl, timeInterval, isIntevalExclude);

    var ExcaliburSolidGaugeOee1 = new Object();
    ExcaliburSolidGaugeOee1.RenderTo = 'ExcaliburSolidOee';
    ExcaliburSolidGaugeOee1.Title = 'Excalibur稼動率(含無運作機台)';
    var isIntevalExclude = false;
    getModelSolidOee(ExcaliburSolidGaugeOee1, 'Excalibur', getOneMonOeeUrl, timeInterval, isIntevalExclude);

    var ExcaliburSolidGaugeOee2 = new Object();
    ExcaliburSolidGaugeOee2.RenderTo = 'ExcaliburSolidOeeExclude';
    ExcaliburSolidGaugeOee2.Title = 'Excalibur稼動率(不含無運作機台)';
    var isIntevalExclude = true;
    getModelSolidOee(ExcaliburSolidGaugeOee2, 'Excalibur', getOneMonOeeUrl, timeInterval, isIntevalExclude);

    var B9SolidGaugeOee1 = new Object();
    B9SolidGaugeOee1.RenderTo = 'B9SolidOee';
    B9SolidGaugeOee1.Title = 'B9稼動率(含無運作機台)';
    var isIntevalExclude = false;
    getModelSolidOee(B9SolidGaugeOee1, 'B9', getOneMonOeeUrl, timeInterval,isIntevalExclude);

    var B9SolidGaugeOee2 = new Object();
    B9SolidGaugeOee2.RenderTo = 'B9SolidOeeExclude';
    B9SolidGaugeOee2.Title = 'B9稼動率(不含無運作機台)';
    var isIntevalExclude = true;
    getModelSolidOee(B9SolidGaugeOee2, 'B9', getOneMonOeeUrl, timeInterval, isIntevalExclude);

    var HandMSolidGaugeOee1 = new Object();
    HandMSolidGaugeOee1.RenderTo = 'HandMSolidOee';
    HandMSolidGaugeOee1.Title = 'H/M稼動率(含無運作機台)';
    var isIntevalExclude = false;
    getModelSolidOee(HandMSolidGaugeOee1, 'H/M', getOneMonOeeUrl, timeInterval, isIntevalExclude);

    var HandMSolidGaugeOee2 = new Object();
    HandMSolidGaugeOee2.RenderTo = 'HandMSolidOeeExclude';
    HandMSolidGaugeOee2.Title = 'H/M稼動率(不含無運作機台)';
    var isIntevalExclude = true;
    getModelSolidOee(HandMSolidGaugeOee2, 'H/M', getOneMonOeeUrl, timeInterval, isIntevalExclude);

    var CreteSolidGaugeOee1 = new Object();
    CreteSolidGaugeOee1.RenderTo = 'CreteSolidOee';
    CreteSolidGaugeOee1.Title = 'Crete稼動率(含無運作機台)';
    var isIntevalExclude = false;
    getModelSolidOee(CreteSolidGaugeOee1, 'Crete', getOneMonOeeUrl, timeInterval, isIntevalExclude);

    var CreteSolidGaugeOee2 = new Object();
    CreteSolidGaugeOee2.RenderTo = 'CreteSolidOeeExclude';
    CreteSolidGaugeOee2.Title = 'Crete稼動率(不含無運作機台)';
    var isIntevalExclude = true;
    getModelSolidOee(CreteSolidGaugeOee2, 'Crete', getOneMonOeeUrl, timeInterval, isIntevalExclude);

    $('.gauge').click(function () {
        var solidOeeId = $(this).attr("id");
        switch (solidOeeId) {
            case "AandSSolidOee":
                window.location.replace("ModelLineStatus?modelName=AS");
                break;
            case "AandSSolidOeeExclude":
                window.location.replace("ModelLineStatus?modelName=AS");
                break;
            case "ExcaliburSolidOee":
                window.location.replace("ModelLineStatus?modelName=Excalibur");
                break;
            case "ExcaliburSolidOeeExclude":
                window.location.replace("ModelLineStatus?modelName=Excalibur");
                break;
            case "B9SolidOee":
                window.location.replace("ModelLineStatus?modelName=B9");
                break;
            case "B9SolidOeeExclude":
                window.location.replace("ModelLineStatus?modelName=B9");
                break;
            case "HandMSolidOee":
                window.location.replace("ModelLineStatus?modelName=HM");
                break;
            case "HandMSolidOeeExclude":
                window.location.replace("ModelLineStatus?modelName=HM");
                break;
            case "CreteSolidOee":
                window.location.replace("ModelLineStatus?modelName=Crete");
                break;
            case "CreteSolidOeeExclude":
                window.location.replace("ModelLineStatus?modelName=Crete");
                break;
            default:
                break;
        }
    })
})
