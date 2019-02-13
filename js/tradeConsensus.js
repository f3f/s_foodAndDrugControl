/**
 * Created by 魏阁 on 2016/9/18.
 */

$(document).ready(function () {
    initList(true,0);      //行业舆情监测列表
    problembar();      //食品行业预警排行初始化
    charts.init({ id: 357, container: $("#map")});
});

function initList(isInitPagination,currpage) {

    //行业舆情监测数据
        var data={
            pages:24,
            data:[
                {"type": "食品", "product": "伊利牛奶", "enterprise": "济宁伊利牛奶盛大生产商", "number":currpage+Math.floor(Math.random()*10 + 1)},
                {"type": "食品", "product": "伊利牛奶", "enterprise": "济宁伊利牛奶盛大生产商", "number": Math.floor(Math.random()*10 + 1)},
                {"type": "食品", "product": "伊利牛奶", "enterprise": "济宁伊利牛奶盛大生产商", "number": Math.floor(Math.random()*10 + 1)},
                {"type": "食品", "product": "伊利牛奶", "enterprise": "济宁伊利牛奶盛大生产商", "number": Math.floor(Math.random()*10 + 1)},
                {"type": "食品", "product": "伊利牛奶", "enterprise": "济宁伊利牛奶盛大生产商", "number": "343"},
                {"type": "食品", "product": "伊利牛奶", "enterprise": "济宁伊利牛奶盛大生产商", "number": "343"},
                {"type": "食品", "product": "伊利牛奶", "enterprise": "济宁伊利牛奶盛大生产商", "number": "343"},
                {"type": "食品", "product": "伊利牛奶", "enterprise": "济宁伊利牛奶盛大生产商", "number": "343"}
            ],
            currentPage:1

        }

    loadTempDate($("#tMonitor"), $(".u-table"), data.data);
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
 $(".pagtion").pagination(data.pages,{
 num_edge_entries: 1, //边缘页数
 num_display_entries: 10, //主体页数
 callback: function(_currPage){
    initList(false,_currPage);
 },
 //current_page:data.currentPage,
 items_per_page: 8
 });
 }

//食品行业预警排行初始化
function problembar(){

    var option = {
        legend: {
            data: ['正', '中','负']
        },
        yAxis: {
            data: ['伊利牛奶1','伊利牛奶2','伊利牛奶3','伊利牛奶4']
        },
        series: [
            {
                name: '正',
                type: 'bar',
                stack: '总量',
                data: [50, 30, 30,25]
            },
            {
                name: '中',
                type: 'bar',
                stack: '总量',
                data: [30, 40, 35,35]
            },
            {
                name: '负',
                type: 'bar',
                stack: '总量',
                data: [20, 30, 35,40]
            },

        ]
    };

    charts.init({ id: 400, container: $("#bar"),option:option });
};





