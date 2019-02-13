//弹出框默认配置参数
;(function (config) {
    if (!config) return;
    config.min = false;
    config.max = false;
    config.fixed = true;
    config.cache = false;
    config.lock = true;
})($.dialog ? $.dialog.setting : undefined);

//时间轴参数
var dataZoom = {
    dataZoom: [{
        type: 'inside',
        start: -1,
        end: 100
    }, {
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }]
};

$(function () {
    UIInit();
    //radio-group Tab控制
    $(".radio-group input[type='radio']").on("change", function (e) {
        var $t = $(this);
        $(".list-table").each(function (i, e) {
            var $tt = $(e);
            $tt.hide();
            if ($t.val() == $tt.attr("data-for")) {
                $tt.show();
            }
        })
    });
    //select2 调用
    if ($(".js-select").length > 0) {
        $(".js-select").select2({
            minimumResultsForSearch: -1
        });
    }

    //首页图表放大
    $(".lhdialog_open").click(function () {
        var $t = $(this);
        var chartId = $t.attr("chartId");
        var charsOption = {};
        var dialog = $.dialog({
            title: $t.attr("dialog-title"),
            // content:'url:'+$t.attr("dialog-url") TODO:服务器环境下可加载页面 (暂时不用)
        });
        var $chart = $("<div id=chartId-'" + chartId + "'></div>");
        // $chart.css({width:$(window).width()-400,height:$(window).height()-100}); TODO:弹出层自适应宽高 (按照设计稿宽高，不采用自适应)
        $chart.css({width: "800px", height: "500px"});
        /*if (chartId == 339 || chartId == 345 || chartId == 488) {
            // charsOption = $.extend(charsOption, dataZoom);
        }*/

        if(chartId == 487 ){
            var option = {
                tooltip : {
                    formatter:function function_name(params) {
                        return [
                            params[0].name +"<br/>",
                            params[0].seriesName+":"+parseInt(Math.random()*100)+"%"+"<br/>",
                        ].join("")
                    }
                }
                /*legend:{
                    selectedMode:"single"
                }*/
            };
            charsOption = $.extend(charsOption, option);
        }
        var chartsObject = charts.init({id: chartId, container: $chart, option: charsOption});
        if(chartId == 488){
            chartsObject.on("click",function () {
                location.href = "consensusAnalyze.html";
            })
        }
        dialog.content($chart);

        //**************图表最大化界面添加年份选择控件**************
        var chartDate="<div class='date-c' style='position: absolute; z-index: 999; top: 55px; left: 60px'> <input type='text' style='color: #fff; width: 60px; height:20px;border-color: #3FF6F2;border-radius: 10px;text-align: center; line-height:20px ' value='2016年' onclick=\"WdatePicker({skin:'blue',dateFmt:'yyyy年'})\"/> </div>";

        $("div.ui_content").append(chartDate);

    });

    //舆情热点放大
    $(".lhdialog_open1").click(function () {
        var $t = $(this);
        var dialog = $.dialog({
            title: "舆情热点"
        });
        var $wrap = $("<div></div>");
        var $chart1 = $("<div id=chartId-481></div>");
        var $chart2 = $("<div id=chartId-346></div>");
        // $chart.css({width:$(window).width()-400,height:$(window).height()-100});
        $chart1.css({width: "400px", height: "500px", float: "left"});
        $chart2.css({width: "400px", height: "500px", float: "left"});
        $wrap.append($chart1);
        $wrap.append($chart2);
        charts.init({id: 481, container: $chart1,option:{
            series:[{
                barMaxWidth:40
            }]
        }});
        charts.init({id: 346, container: $chart2,option:{
            grid:{
                top:50,
                bottom:-40
            },
            series:[{
                barMaxWidth:40
            }]
        }});
        dialog.content($wrap);

        //**************图表最大化界面添加年份选择控件**************
        var chartDate="<div class='date-c' style='position: absolute; z-index: 999; top: 55px; left: 60px'> <input type='text' style='color: #fff; width: 60px; height:20px;border-color: #3FF6F2;border-radius: 10px;text-align: center; line-height:20px ' value='2016年' onclick=\"WdatePicker({skin:'blue',dateFmt:'yyyy年'})\"/> </div>";

        $("div.ui_content").append(chartDate);
    });
    //食品溯源查看更多
    $(".lhdialog_open_view").click(function () {
        var $t = $(this);
        var dialog = $.dialog({title: ""});
        var $wrap = $("<div class='foodTraceabilityMoreSearch'>" + $("#foodTraceabilityMoreSearch").html() + "</div>");
        dialog.content($wrap);
        $(".foodTraceabilityMoreSearch .js-select-view").select2({
            minimumResultsForSearch: -1
        });
    });
    //首页更多按钮
    $("#viewMore").click(function () {
        var $t = $(this);
        $t.css({width: $t.width()});
        var b = $('.select-categroy').hasClass("more");
        $('.select-categroy')[b ? "removeClass" : "addClass"]("more");

    });
    $(".button-group-content li").on("click", function () {
        $('.select-categroy').removeClass('more');
    });
});

function UIInit() {
    $("#viewMore").css({width: $(".select-categroy").width()});
}

$(document).click(function () {
    if ($(".select-categroy").hasClass("more")) {
        $("#viewMore").val("收起");
        $("#viewMore").css({left: "-" + $("#viewMore").width() + "px"});
    } else {
        $("#viewMore").val("查看更多");
        $("#viewMore").css({left: 0});
    }
});


