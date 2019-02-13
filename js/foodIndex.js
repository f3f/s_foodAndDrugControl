/**
 * Created by 魏阁 on 2016/9/23.
 */
$(document).ready(function (argument) {

    initList();                           //预警企业名单列表初始化
    //initscroll();		 //初始化滚动条
    problemline339();                   // 问题产品走势图初始化   339
    problemline340();                 // 问题产品因素占比图初始化   340
    problembar345();                 // 食品安全指数走势图初始化   345

//      charts.init({ id: 170, container: $(".map")});

    var bar3 = charts.init({id: 481, container: $("#bar3") ,option:option481 });
    var bar3_1 = charts.init({id: 346, container: $("#bar3-1") ,option:option346 });

    chart = map_ls(map_option);

    chart.click = function (d) {

        //click 接口可以得到当前点击省份信息
        console.log(d);

    };

    bar3.on("click", function () {
        labelClick();
    });
    bar3_1.on("click", function () {
        labelClick();
    });

    function labelClick() {
        location.href = "consensusAnalyze.html";
    }

    $(".js-select").on("change", function (event) {
        selChange_food(event);
    })
});

function selChange_food(event) {

    var el = event.target,
        value = el.value;
    if (value == '检测检验') {
        chart = null;
        map_option.data[1] = position;
        chart = map_ls(map_option);
    } else if (value == '投诉举报') {
        chart = null;
        map_option.data[1] = position2;
        chart = map_ls(map_option);
    } else {
        chart = null;
        map_option.data[1] = position3;
        chart = map_ls(map_option);
    }
}

function map_tip_dialog_food(flag) {

    $("#map>div:eq(1)").css("z-index", "999");
    var mapDialog = $.dialog({title: ""});
    if (flag == 1) {
        //检测检验详情页
        mapDialog.content('<div class="m-index-dialog2 clear" style="display: block;">' + $(".m-index-dialog3").html() + '</div>');
        juBao_map_tip_food();
    }
    else if (flag == 2) {
        //投诉举报详情页
        mapDialog.content('<div class="index-dialog clear" style="display: block;">' + $(".index-dialog").html() + '</div>')
        initGraph();       //投诉举报详情关系图
    }
    else if (flag == 3) {
        //疫区产品分布详情页
        mapDialog.content('<div class="index-dialog clear" style="display: block;">' + $(".index-dialog2").html() + '</div>')
    }
}

function juBao_map_tip_food() {
    chart = null;
    map_option2.data[1] = position;
    chart = map_ls(map_option2);
}

function initList() {

    //无证经营数据
    var wuZhengJingYingData = [
        {"enterprise": "伊利山东分公司", "problem": "证件过期"},
        {"enterprise": "蒙牛山东分公司", "problem": "无证经营"},
        {"enterprise": "三元山东分公司", "problem": "证件造假"}
    ];

    //产品质量数据
    var productData = [
        {"productName": "伊利优酸乳", "unqualifiedItem": "聚落超标", "enterprise": "伊利山东分公司"},
        {"productName": "蒙牛优酸乳", "unqualifiedItem": "产品过期", "enterprise": "蒙牛山东分公司"},
        {"productName": "光明优酸乳", "unqualifiedItem": "聚落超标", "enterprise": "光明山东分公司"}
    ];

    //信用异动数据
    var creditData = [
        {"enterprise": "泰安XX药品生产有限公司", "currentLevel": "C", "lastClass": "B"},
        {"enterprise": "青岛XX药品生产有限公司", "currentLevel": "B", "lastClass": "A"},
        {"enterprise": "济南XX药品生产有限公司", "currentLevel": "A", "lastClass": "B"}
    ];

    //疑似问题产品排行数据
    var chanPinPaiHangData = [
        {"priductName": "伊利优酸乳", "susProbability": "80.1%"},
        {"priductName": "蒙牛优酸乳", "susProbability": "70.6%"},
        {"priductName": "三元优酸乳", "susProbability": "69.8%"},
        {"priductName": "伊利优酸乳", "susProbability": "69.5%"},
        {"priductName": "蒙牛优酸乳", "susProbability": "68.5%"},
        {"priductName": "三元优酸乳", "susProbability": "67.8%"},
        {"priductName": "伊利优酸乳", "susProbability": "90.1%"},
        {"priductName": "蒙牛优酸乳", "susProbability": "74.6%"},
        {"priductName": "三元优酸乳", "susProbability": "89.8%"}

    ];

    //疑似问题产品排行数据
    var chanPinPaiHangData_yiQu = [
        {"priductName": "伊利优酸乳", "susProbability": "80.1%"},
        {"priductName": "蒙牛优酸乳", "susProbability": "70.6%"},
        {"priductName": "三元优酸乳", "susProbability": "69.8%"},
        {"priductName": "伊利优酸乳", "susProbability": "69.5%"},
        {"priductName": "蒙牛优酸乳", "susProbability": "68.5%"},
        {"priductName": "三元优酸乳", "susProbability": "67.8%"},
        {"priductName": "伊利优酸乳", "susProbability": "90.1%"},
        {"priductName": "蒙牛优酸乳", "susProbability": "74.6%"},
        {"priductName": "三元优酸乳", "susProbability": "89.8%"},
        {"priductName": "蒙牛优酸乳", "susProbability": "70.6%"},
        {"priductName": "三元优酸乳", "susProbability": "69.8%"},
        {"priductName": "伊利优酸乳", "susProbability": "69.5%"},
        {"priductName": "蒙牛优酸乳", "susProbability": "68.5%"},
        {"priductName": "三元优酸乳", "susProbability": "67.8%"},
        {"priductName": "伊利优酸乳", "susProbability": "90.1%"},
        {"priductName": "蒙牛优酸乳", "susProbability": "74.6%"},
        {"priductName": "三元优酸乳", "susProbability": "89.8%"}

    ];

    loadTempDate($("#tWuZhengJingYing"), $("#wuZhengJingYing"), wuZhengJingYingData );
    loadTempDate($("#tProduct"), $("#product"), productData );
    loadTempDate($("#tCredit"), $("#credit"), creditData );
    loadTempDate($("#tchanPinPaiHang"), $("#chanPinPaiHang"), chanPinPaiHangData );
    loadTempDate($("#tchanPinPaiHang_yiQu"), $("#chanPinPaiHang_yiQu"), chanPinPaiHangData_yiQu );

}

//加载模板数据
function loadTempDate($tContainer, $container, data) {

    var handlerTemp = Handlebars.compile($tContainer.html());
    $container.html(handlerTemp(data));
}

//初始化滚动条
/*function initscroll(){

    $("#chanPinPaiHang_yiQu").niceScroll({
        cursorcolor: "#00539a",          //#CC0071 光标颜色
        cursoropacitymax: 1,            //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false,          //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "8px",           //像素光标的宽度
        cursorborder: "0",           //游标边框css定义
        cursorborderradius: "5px",  //以像素为光标边界半径
        autohidemode: true         //是否隐藏滚动条
    });
}*/

// 问题产品走势图初始化
function problemline339() {

    var option = {

        legend: {
            data: ["检验检测不合格产品数量", "投资举报产品数量"]
        },
        xAxis: [{
            data: ["5/21", "5/22", "5/23", "5/24", "5/25", "5/26", "5/27"]
        }],
        series: [{
            name: '检验检测不合格产品数量',
            type: 'line',
            data: [2.2, 3.2, 4.1, 5.1, 4.5, 3.2, 2.9, 2]
        }, {
            name: '投资举报产品数量',
            type: 'line',
            data: [0.5, 1.2, 2.4, 3, 4, 4.5, 5.5, 4]
        }]
    };

    charts.init({id: 339, container: $("#line"), option: option});

}

// 问题产品因素占比图初始化
function problemline340() {

    var option = {
        legend: {
            data: ['品质', '微生物','重金属','添加剂']
        },
        yAxis: {
            data: ['食用油','粮食','糖类','酒类','水产品','乳制品','肉类']
        },
        series: [
            {
                name: '品质',
                type: 'bar',
                stack: '总量',
                data: [320, 302, 301, 334, 390, 330, 320]
            },
            {
                name: '微生物',
                type: 'bar',
                stack: '总量',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: '重金属',
                type: 'bar',
                stack: '总量',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: '添加剂',
                type: 'bar',
                stack: '总量',
                data: [150, 212, 201, 154, 190, 330, 410]
            },
            {
                name: '农药化肥',
                type: 'bar',
                stack: '总量',
                data: [820, 832, 901, 934, 1290, 1330, 1320]
            }
        ]
    };

    charts.init({id: 340, container: $("#bar1"), option: option});

}

//食品安全指数走势图初始化
function problembar345() {

    var option = {
        xAxis: {
            type: "category",
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
            axisLabel: {
                textStyle: {
                    color: '#fff' //X轴类名称颜色
                    //fontStyle: 'oblique'
                }
            }
        },
        yAxis: {
            splitNumber: 5,
            axisLabel: {
                formatter: '{value}'
            }
        },
        series: [{
            name: '药品安全指数',
            data: [300, 200, 300, 800, 400, 478, 689, 477, 396, 758, 166, 584],
            markLine: {
                data: [
                    {
                        name: 'Y 轴值为 100 的水平线',
                        yAxis: 600
                    }
                ]
            }
        }]
    };

    charts.init({id: 345, container: $("#bar2"), option: option});
}

function map_tip_dialog(flag) {
    //console.log(arguments);
    $("#map>div:eq(1)").css("z-index", "999");
    var mapDialog = $.dialog({title: ""});
    if (flag == 2) {
    //投诉举报详情页
    mapDialog.content('<div class="index-dialog clear" style="display: block;">' + $(".index-dialog").html() + '</div>')
    }
    else if (flag == 3) {
    //疫区产品分布详情页
    mapDialog.content('<div class="index-dialog clear" style="display: block;">' + $(".index-dialog2").html() + '</div>')
    }
}

//关系图初始化
function initGraph() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('complain'));
    // 指定图表的配置项和数据
    var option = {
        /*title: {
         text: 'Graph 简单示例'
         },*/
        tooltip: {},
        //color:['green'],
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series : [
            {
                type: 'graph',
                layout: 'none',
                roam: 'scale',            //开启缩放
                //roam: false,           //关系图是否可拖动
                label: {
                    normal: {
                        show: true
                    }
                },
                data: [{
                    name: '伊利\n舒化奶',
                    symbolSize: 48,
                    itemStyle: {
                        normal: {
                            color: '#3A1536',
                            borderColor: '#AB105A',
                            borderWidth: 2,
                            borderType: 'solid',
                            shadowBlur: 18,
                            shadowColor: '#2849A0'
                        }
                    },
                    x: 25,
                    y: 45
                }, {
                    name: '伊利牛奶生产厂',
                    symbolSize: [100,40],
                    itemStyle: {
                        normal: {
                            color: '#010E2D',
                            borderColor: '#3CEBEA',
                            borderWidth: 2,
                            borderType: 'solid',
                            shadowBlur: 18,
                            shadowColor: '#296CED'
                        }
                    },
                    x: 35,
                    y: 50
                }, {
                    name: '伊利\n高钙奶',
                    symbolSize: 48,
                    itemStyle: {
                        normal: {
                            color: '#061944',
                                borderColor: '#3CEBEA',
                                borderWidth: 2,
                                borderType: 'solid',
                            shadowBlur: 18,
                            shadowColor: '#296CED'
                        }
                    },
                    x: 25,
                    y: 55
                }],
                links: [
                    {
                        source: '伊利\n舒化奶',
                        target: '伊利牛奶生产厂',
                        lineStyle: {
                            normal: { color: '#26729F'}
                        }
                    }, {
                        source: '伊利\n高钙奶',
                        target: '伊利牛奶生产厂',
                        lineStyle: {
                            normal: { color: '#26729F'}
                        }
                    }],
                lineStyle: {
                    normal: {
                        opacity: 0.9,
                        width: 2,
                        curveness: 0
                    }
                }
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}

//舆情热点 481 配置文件
var option481 ={
        yAxis : [
            {
                data : ['伊利牛奶厂','双汇火腿生产公司','壹号土猪有限公司','周黑鸭有限公司','久久丫有限公司','费力罗意大利']
            }
        ],
        series : [
            {
                data:[-12, -13, -10, -13, -19, -23]
            }
        ]
    };

//舆情热点 346 配置文件
var option346 ={
    yAxis : [
        {
            data : ['伊利牛奶厂','双汇火腿生产公司','壹号土猪有限公司','周黑鸭有限公司','久久丫有限公司','费力罗意大利']
        }
    ],
    series : [
        {
            data:[20, 17, 15, 13, 16, 22]
        }
    ]
};


//地图地理位置参数
var position = [{
    "type": "检测检验",
    "province": "山东",
    "district": "济南",
    "value": [117, 36.65, 500],
    "name1": "<span>山东岁宝百货有限公司景田店</span>",
    "value1": "被抽检单位",
    "name2": "不合格产品",
    "value2": {

        "shop1": "四洲紫菜（原味）",
        "shop2": "香辣鳗鱼丝",
        "shop3": "武昌鱼（红烧）"
    },
    "name3": "不合格项目",
    "value3": {

        "item1": "菌落总数",
        "item2": "菌落总数",
        "item3": "挥发性盐基氮"
    }

}, {
    "type": "检测检验",
    "province": "山东",
    "district": "招远",
    "value": [120.38, 37.35, 500],
    "name1": "<span>山东岁宝百货有限公司景田店</span>",
    "value1": "被抽检单位",
    "name2": "不合格产品",
    "value2": {

        "shop1": "四洲紫菜（原味）",
        "shop2": "香辣鳗鱼丝",
        "shop3": "武昌鱼（红烧）"
    },
    "name3": "不合格项目",
    "value3": {

        "item1": "菌落总数",
        "item2": "菌落总数",
        "item3": "挥发性盐基氮"
    }
}, {
    "type": "检测检验",
    "province": "山东",
    "district": "青岛",
    "value": [120.33, 36.07, 500],
    "name1": "<span>山东岁宝百货有限公司景田店</span>",
    "value1": "被抽检单位",
    "name2": "不合格产品",
    "value2": {

        "shop1": "四洲紫菜（原味）",
        "shop2": "香辣鳗鱼丝",
        "shop3": "武昌鱼（红烧）"
    },
    "name3": "不合格项目",
    "value3": {

        "item1": "菌落总数",
        "item2": "菌落总数",
        "item3": "挥发性盐基氮"
    }
}, {
    "type": "检测检验",
    "province": "山东",
    "district": "淄博",
    "value": [118.05, 36.78, 500],
    "name1": "<span>山东岁宝百货有限公司景田店</span>",
    "value1": "被抽检单位",
    "name2": "不合格产品",
    "value2": {

        "shop1": "四洲紫菜（原味）",
        "shop2": "香辣鳗鱼丝",
        "shop3": "武昌鱼（红烧）"
    },
    "name3": "不合格项目",
    "value3": {

        "item1": "菌落总数",
        "item2": "菌落总数",
        "item3": "挥发性盐基氮"
    }
}];
var position2 = [{
    "type": "投诉举报",
    "province": "山东",
    "district": "烟台",
    "value": [121.391382, 37.539297, 500],
    "name1": "被举报单位",
    "value1": "山东岁宝百货有限公司景田店",
    "name2": "被举报产品",
    "value2": "伊利QQ星儿童成长牛奶",
    "name3": "举报次数",
    "value3": "3次",
    "name4": "生产企业",
    "value4": "山东伊利生产厂",
    "name5": "生产企业信用等级",
    "value5": "B级"

}, {
    "type": "投诉举报",
    "province": "山东",
    "district": "临沂",
    "value": [118.326443, 35.065282, 500],
    "name1": "被举报单位",
    "value1": "山东岁宝百货有限公司景田店",
    "name2": "被举报产品",
    "value2": "伊利QQ星儿童成长牛奶",
    "name3": "举报次数",
    "value3": "3次",
    "name4": "生产企业",
    "value4": "山东伊利生产厂",
    "name5": "生产企业信用等级",
    "value5": "B级"
}, {
    "type": "投诉举报",
    "province": "山东",
    "district": "潍坊",
    "value": [119.107078, 36.70925, 500],
    "name1": "被举报单位",
    "value1": "山东岁宝百货有限公司景田店",
    "name2": "被举报产品",
    "value2": "伊利QQ星儿童成长牛奶",
    "name3": "举报次数",
    "value3": "3次",
    "name4": "生产企业",
    "value4": "山东伊利生产厂",
    "name5": "生产企业信用等级",
    "value5": "B级"
}, {
    "type": "投诉举报",
    "province": "山东",
    "district": "德州",
    "value": [116.307428, 37.453968, 500],
    "name1": "被举报单位",
    "value1": "山东岁宝百货有限公司景田店",
    "name2": "被举报产品",
    "value2": "伊利QQ星儿童成长牛奶",
    "name3": "举报次数",
    "value3": "3次",
    "name4": "生产企业",
    "value4": "山东伊利生产厂",
    "name5": "生产企业信用等级",
    "value5": "B级"
}
];
var position3 = [{
    "type": "疫区产品分布",
    "province": "山东",
    "district": "滨州",
    "value": [118.016974, 37.383542, 500],
    "name1": "来源疫区",
    "value1": "天津滨海新区",
    "name2": "产品",
    "value2": "伊利QQ星儿童成长牛奶",
    "name3": "流入时间",
    "value3": "2016-7-8",
    "name4": "生产企业",
    "value4": "天津伊利生产厂",
    "name5": "企业信用等级",
    "value5": "A级"

}, {
    "type": "疫区产品分布",
    "province": "山东",
    "district": "莱芜",
    "value": [117.677736, 36.214397, 500],
    "name1": "来源疫区",
    "value1": "天津滨海新区",
    "name2": "产品",
    "value2": "伊利QQ星儿童成长牛奶",
    "name3": "流入时间",
    "value3": "2016-7-8",
    "name4": "生产企业",
    "value4": "天津伊利生产厂",
    "name5": "企业信用等级",
    "value5": "A级"
}, {
    "type": "疫区产品分布",
    "province": "山东",
    "district": "日照",
    "value": [119.461208, 35.428588, 500],
    "name1": "来源疫区",
    "value1": "天津滨海新区",
    "name2": "产品",
    "value2": "伊利QQ星儿童成长牛奶",
    "name3": "流入时间",
    "value3": "2016-7-8",
    "name4": "生产企业",
    "value4": "天津伊利生产厂",
    "name5": "企业信用等级",
    "value5": "A级"
}, {
    "type": "疫区产品分布",
    "province": "山东",
    "district": "威海",
    "value": [122.116394, 37.509691, 500],
    "name1": "来源疫区",
    "value1": "天津滨海新区",
    "name2": "产品",
    "value2": "伊利QQ星儿童成长牛奶",
    "name3": "流入时间",
    "value3": "2016-7-8",
    "name4": "生产企业",
    "value4": "天津伊利生产厂",
    "name5": "企业信用等级",
    "value5": "A级"
}
];
var map_option = {

    id: 'map',
    width: "auto",
    height: 335,
    map: "shandong",
    data: [
        [

            {name: '烟台市', value: Math.round(Math.random() * 1000)},
            {name: '临沂市', value: Math.round(Math.random() * 1000)},
            {name: '潍坊市', value: Math.round(Math.random() * 1000)},
            {name: '青岛市', value: Math.round(Math.random() * 1000)},
            {name: '菏泽市', value: Math.round(Math.random() * 1000)},
            {name: '济宁市', value: Math.round(Math.random() * 1000)},
            {name: '德州市', value: Math.round(Math.random() * 1000)},
            {name: '滨州市', value: Math.round(Math.random() * 1000)},
            {name: '聊城市', value: Math.round(Math.random() * 1000)},
            {name: '东营市', value: Math.round(Math.random() * 1000)},
            {name: '济南市', value: Math.round(Math.random() * 1000)},
            {name: '泰安市', value: Math.round(Math.random() * 1000)},
            {name: '威海市', value: Math.round(Math.random() * 1000)},
            {name: '日照市', value: Math.round(Math.random() * 1000)},
            {name: '淄博市', value: Math.round(Math.random() * 1000)},
            {name: '枣庄市', value: Math.round(Math.random() * 1000)},
            {name: '莱芜市', value: Math.round(Math.random() * 1000)}
        ],

        position
    ]
};

var map_option2 = {

    id: 'map170',
    width: "auto",
    height: 335,
    map: "shandong",
    data: [
        [
            {name: '烟台市', value: Math.round(Math.random() * 1000)},
            {name: '临沂市', value: Math.round(Math.random() * 1000)},
            {name: '潍坊市', value: Math.round(Math.random() * 1000)},
            {name: '青岛市', value: Math.round(Math.random() * 1000)},
            {name: '菏泽市', value: Math.round(Math.random() * 1000)},
            {name: '济宁市', value: Math.round(Math.random() * 1000)},
            {name: '德州市', value: Math.round(Math.random() * 1000)},
            {name: '滨州市', value: Math.round(Math.random() * 1000)},
            {name: '聊城市', value: Math.round(Math.random() * 1000)},
            {name: '东营市', value: Math.round(Math.random() * 1000)},
            {name: '济南市', value: Math.round(Math.random() * 1000)},
            {name: '泰安市', value: Math.round(Math.random() * 1000)},
            {name: '威海市', value: Math.round(Math.random() * 1000)},
            {name: '日照市', value: Math.round(Math.random() * 1000)},
            {name: '淄博市', value: Math.round(Math.random() * 1000)},
            {name: '枣庄市', value: Math.round(Math.random() * 1000)},
            {name: '莱芜市', value: Math.round(Math.random() * 1000)},
        ],
        position
    ]
};