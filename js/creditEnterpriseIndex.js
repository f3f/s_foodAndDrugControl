/**
 * Created by 魏阁 on 2016/9/20.
 */

$(document).ready(function (argument) {

    initList(true,0);      //失信黑名单
    iniCloudChart("tags");   //集团信用预警图
    var lsxy_level = charts.init({id: 369, container: $("#line")});
    var lsxy_level_pie = charts.init({id: 371, container: $("#pie"),option:{
        title: {
            text: '2009年失信原因占比',
            left: 'center',
            top: 20,
            textStyle: {
                color: '#fff'
            }
        }
    }});

    lsxy_level.on("click",function (o) {
        if(o.componentType=="xAxis"&&o.targetType=="axisLabel"){
            lsxy_level_pie.dispose();
            lsxy_level_pie = charts.init({id: 371, container: $("#pie"),option:{
                title: {
                    text: o.value+'年失信原因占比',
                    left: 'center',
                    top: 20,
                    textStyle: {
                        color: '#fff'
                    }
                }
            }});
        }
    })
});

function initList(isInitPagination,currpage) {

    //数据
    var data={
        pages:20,
        data:[
            {"enterprise": "山东秦老太食品有限公司", "trade": "食品", "region": "济南", "data":"2016-01-02"},
            {"enterprise": "山东秦老太食品有限公司", "trade": "食品", "region": "济南", "data":"2016-01-02"},
            {"enterprise": "山东秦老太食品有限公司", "trade": "食品", "region": "济南", "data":"2016-01-02"},
            {"enterprise": "山东秦老太食品有限公司", "trade": "食品", "region": "济南", "data": Math.floor(Math.random()*10 + 1)},
            {"enterprise": "山东秦老太食品有限公司", "trade": "食品", "region": "济南", "data":"2016-01-02"},
            {"enterprise": "山东秦老太食品有限公司", "trade": "食品", "region": "济南", "data":"2016-01-02"}
        ],
        currentPage:1

    };

    loadTempDate($("#tBlackList"), $("#blackList"), data.data);
    if(isInitPagination){
        initPagination( data);
    }

}

//加载模板数据
function loadTempDate($tContainer, $container, data) {
    var handlerTemp = Handlebars.compile($tContainer.html());
    //$container.html("");
    $container.html(handlerTemp(data));
}

function initPagination(data) {
    $("#blackPagtion").pagination(data.pages,{
        num_edge_entries: 1, //边缘页数
        num_display_entries: 10, //主体页数
        callback: function(_currPage){
            initList(false,_currPage);
        },
        //current_page:data.currentPage,
        items_per_page: 6
    });
}

function iniCloudChart(containerID){
    var width = 1090;
    var height = 400;
    var categories = [{
        name: "1",
        color: "#1FB298"
    }, {
        name: "2",
        color: "#4D4B90"
    }, {
        name: "3",
        color: "#E243BA"
    }, {
        name: "4",
        color: "#CAAC51"
    }];
    var data = [
        {
            name: "潍坊保真化妆品有限公司1",
            size: 10,
            group: 1
        }, {
            name: "潍坊保真化妆品有限公司2",
            size: 8,
            group: 1
        }, {
            name: "潍坊保真化妆品有限公司3",
            size: 14,
            group: 2
        }, {
            name: "潍坊真好吃食品有限公司4",
            size: 10,
            group: 3
        }, {
            name: "山东鼎力集团有限公司",
            size: 18,
            group: 3
        }, {
            name: "潍坊真好吃食品有限公司5",
            size: 25,
            group: 2
        }, {
            name: "山东鼎力集团有限公司",
            size: 18,
            group: 2
        }, {
            name: "潍坊保真化妆品有限公司6",
            size: 16,
            group: 3
        }, {
            name: "潍坊保真化妆品有限公司7",
            size: 6,
            group: 1
        }, {
            name: "潍坊保真化妆品有限公司8",
            size: 18,
            group: 4
        }, {
            name: "济宁超好吃食品有限公司",
            size: 22,
            group: 1
        },
        {
            name: "济宁超好吃食品有限公司14",
            size: 12,
            group: 4
        }
    ];
    var chart = new WordsCloudChart(document.getElementById(containerID), width, height);
    chart.categories = categories;
    chart.init();
    chart.data(data);
}