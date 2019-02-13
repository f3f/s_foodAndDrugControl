/**
 * Created by 魏阁 on 2016/9/20.
 */
$(document).ready(function(){

    charts.init({ id: 372, container: $("#line")});
    charts.init({ id: 434, container: $("#434")});
    cy();    //药品行业事件聚类图
});

// 词云
function cy(){
    var width = 800;
    var height =300;
    //var data = "";                            修改
    var data = {
        "data":[
            {"id":4,"category":"重大不安全事件","name":"电梯卡人","size":"75"},
            {"id":5,"category":"重大不安全事件","name":"电梯故障","size":"78"}
        ]
    };
    // 演示开始
    chart = new BubbleCloudChart();
    chart.domElement = document.getElementById("drugIndustryEvent");
    chart.width = width;
    chart.height = height;
    chart.minRadius = 20;
    chart.maxRadius = 50;
    chart.minFontSize = 10;
    chart.maxFontSize = 25;
    chart.collisionPadding = 10;
    chart.minCollisionRadius = 50;
    chart.legend=false;
    chart.categories = [
        {name: "重大不安全事件", color: "#ff8a00"},
        {name: "政策事件", color: "#3db8b9"},
        {name: "企业舆情", color: "#67b0f3"}
    ];
    chart.labelFunction = function (d) {
        return d.name;
    };
    // 注意,目前数据中不能使用weight保留字作为字段名!
    chart.weightFunction = function (c) {
        return c.size;
    };
    chart.categoryFunction = function (c) {
        return c.category;
    };
    chart.clickHandler = function (c) {
        clickBubble(c);
    };
    chart.init();                                       //修改
    chart.data(data.data);                             //修改
    /*                                                  修改
    $.ajax({
        url: "http://192.168.16.216:60002/industrywarning/queryElevatorIndustry",
        async: false,
        dataType:"json",
        // data:data,
        success: function(data){
            chart.init();
            chart.data(data.data);
        }
    });

    // 创建滑块(样式需要自行调整).
    $.ajax({
        url: "http://192.168.16.216:60002/industrywarning/queryTime",
        async: false,
        dataType:"json",
        // data:data,
        success: function(data){
            min  = data.data[0].minTime;
            max  = data.data[0].maxTime;
        }
    });
     */
    var min  = new Date("2016/08/17");                //修改
    var max  = new Date("2016/09/31");               //修改
    //var min = new Date(min);                         修改
    //var max = new Date(max);                         修改
    var defaultBegin = new Date("2016/09/07");
    var defaultEnd = new Date("2016/09/19");

    //测试
    /*    var min = new Date("2015/01/01");
     var max = new Date("2015/12/31");

     var defaultBegin = new Date("2015/03/01");
     var defaultEnd = new Date("2015/04/31");*/

    var s = function(event, ui) {
        var startDate = new Date(ui.values[0]);
        var endDate = new Date(ui.values[1]);

        chart.data(data.data);
        /*                                              修改
        $.ajax({
            url: "http://192.168.16.216:60002/industrywarning/queryElevatorIndustry",
            dataType:"json",
            data:{
                startYM:$("#date-slider_slider").next("div").find("span").eq(0).html(),
                endYM:$("#date-slider_slider").next("div").find("span").eq(1).html(),
                areaCode:$("#address").val(),
                typeCode:$("#type").val()
            },
            success: function(data){
                chart.data(data.data);
            }
        });
        */
    };
    var ss = {
        format: "yyyy-MM-dd",
        dateCls: "dateSpan",
        offsetFontPath: 32
    };
    //测试

    createSliderUI("date-slider", defaultBegin, defaultEnd, min, max, s, ss);
}

function clickBubble(c){
    $("#div1").remove();
    event = event||window.event;
    //获得相对于body定位的横标值；
    x=event.clientX  ;
    //获得相对于body定位的纵标值；
    y=event.clientY  ;
    var xx,yy;
    var yyy = document.body.scrollTop;
    var yyyy = y +yyy;
    if(x>1000){
        xx = x-300+'px';
    }else{
        xx = x-100+'px';
    }
    yy = yyyy-230+'px';
    var data = [{des:'事件详情1',time:'2015-05-15',url:'http://www.qzwb.com/gb/content/2016-02/01/content_5273448.htm'},
        {des:'事件详情2',time:'2015-05-16',url:'http://www.qzwb.com/gb/content/2016-02/01/content_5273448.htm'},
        {des:'事件详情3',time:'2015-05-17',url:'http://www.qzwb.com/gb/content/2016-02/01/content_5273448.htm'},
        {des:'事件详情4',time:'2015-05-18',url:'http://www.qzwb.com/gb/content/2016-02/01/content_5273448.htm'}];
    var htmlText ='<div id="div1" class="Mydiv" style="position:absolute;left:'+xx+';top:'+yy+';">'
        +'<h3 class="MydivTit" ><span>'+c.name+'</span><i>x</i></h3>'
        +'<span class="MydivTitSmall" >'+c.category+'</span>'
        +'<ul class="MydivUl"  id="div1ul">' ;
    for(var i=0;i<data.length;i++){
        htmlText +='<li ><span >'+data[i].time+'</span><a href="'+data[i].url+'" target="_blank">事件详情</a></li>' ;
    }
    htmlText += '</ul></div>';
    $("body").append(htmlText);
    $("#div1ul").mCustomScrollbar();
    $(".MydivTit i").click(function(){
        $("#div1").hide();
    })
}

