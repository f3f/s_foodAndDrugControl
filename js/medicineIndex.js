$(document).ready(function () {

    initList();        //预警企业名单列表初始化
    problemline();    // 问题产品走势图初始化   339
    problembar1();   //不良反应排名及药品类型占比初始化  487
    problembar2();   //药品安全指数走势初始化   345

    charts.init({id: 170, container: $(".map")});


    var bar3 = charts.init({id: 481, container: $("#bar3") ,option:option481 });
    bar3.on("click", function () {
        location.href = "consensusAnalyze.html";
    });

    var bar3_1 = charts.init({id: 346, container: $("#bar3-1") ,option:option346 });
    bar3_1.on("click", function () {
        location.href = "creditEnterpriseInfo.html";
    });

    //初始化地图
    setting = {visualMap: false};
    chart = map_ls(map_option, setting);
    chart.click = function (d) {
        //console.log(d);//click 接口可以得到当前点击省份信息
    };

    //页面顶部下拉框项改变事件
    $(".js-select").on("change", function (event) {
        selChange(event);
    });

});


// 问题产品走势图初始化
function problemline() {

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

//不良反应排名及药品类型占比初始化
function problembar1() {

    var option = {
        legend: {
            data: ['内科用药', '骨伤科用药', '妇科用药', '耳鼻喉科用药', '外科用药'],
        },
        yAxis: {
            data: ['胃肠系统（29876）', '皮肤及附件（17890）', '全身性损害（15729）', '中枢及外周神经（12003）', '呼吸系统损害（8207）']
        },
        series: [
            {
                name: '内科用药',
                type: 'bar',
                stack: '总量',
                data: [320, 302, 301, 334, 390]
            },
            {
                name: '骨伤科用药',
                type: 'bar',
                stack: '总量',
                data: [120, 132, 101, 134, 90]
            },
            {
                name: '妇科用药',
                type: 'bar',
                stack: '总量',
                data: [220, 182, 191, 234, 290]
            },
            {
                name: '耳鼻喉科用药',
                type: 'bar',
                stack: '总量',
                data: [150, 212, 201, 154, 190]
            },
            {
                name: '外科用药',
                type: 'bar',
                stack: '总量',
                data: [820, 832, 901, 934, 1290]
            }
        ]
    };

    charts.init({id: 487, container: $("#bar1"), option: option});
}

//药品安全指数走势初始化
function problembar2() {

    var option = {
        xAxis: {
            type: "category",
            //data: ["5/18","5/19","5/20","5/21","5/22","5/23","5/24","5/25","5/26","5/27","5/28","5/29"],
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

function initList() {

    //产品质量数据
    var productData = [
        {"productName": "伊利优酸乳", "unqualifiedItem": "聚落超标", "enterprise": "伊利生产厂"},
        {"productName": "蒙牛纯牛奶", "unqualifiedItem": "三聚氰胺", "enterprise": "蒙牛生产厂"},
        {"productName": "三元酸奶", "unqualifiedItem": "聚落超标", "enterprise": "三元生产厂"}
    ];

    //信用异动数据
    var creditData = [
        {"enterpriseName": "泰安XX药品生产有限公司", "grade": "C"},
        {"enterpriseName": "青岛XX药品生产有限公司", "grade": "B"},
        {"enterpriseName": "济南XX药品生产有限公司", "grade": "A"}
    ];


    loadTempDate($("#tProduct"), $("#product"), productData);
    loadTempDate($("#tCredit"), $("#credit"), creditData);

}

//加载模板数据
function loadTempDate($tContainer, $container, data) {

    var handlerTemp = Handlebars.compile($tContainer.html());
    $container.html(handlerTemp(data));
}


function selChange(event) {

    var el = event.target,
        value = el.value;
    if (value == '抽查抽检') {
        setting.visualMap = false;
        chart = null;
        map_option.data[1] = position;
        map_option.visualMap = {};
        chart = map_ls(map_option, setting);
    } else if (value == '不良反应') {
        setting.visualMap = [{

            type: 'continuous',
            seriesIndex: 0,
            left: 10,
            min: 0,
            max: 1000,
            inRange: {
                color: ["#00e2a5", "#79f654", "#ffde00", "#ff1626"]
            },
            text: ['高', '低'],
            calculable: true,
            textStyle: {
                color: "#fff"
            }

        }];
        setting.tooltip = {
            trigger: 'item',
            showDelay: 300,
            hideDelay: 300,
            enterable: true,
            backgroundColor: "#03166d",
            borderColor: "#a3fffd",
            borderWidth: 2,
            formatter: function (params, ticket, callback) {
                if (params.seriesType == "effectScatter") {
                    return (
                        "<div onclick='map_tip_dialog(2)'>" +
                        "上报单位" + ": <span style='color:#36d7dc'>" + "白山医院" + "</span><br/>" +
                        "不良反应" + ": <span style='color:#36d7dc'>" + "牛黄上清丸" + "</span><br/>" +
                        "药品生产企业" + ": <span style='color:#36d7dc'>" + "白山建宁药业有限公司" + "</span><br/>" +
                        "不良反应病例" + ": <span style='color:#36d7dc'>" + Math.floor(Math.random() * 100) + "</span><br/>" +
                        "不良反应类型" + ": <span style='color:#36d7dc'>" + "A类(10)、B类(5)、C类(5)" + "</span><br/>" +
                        "</div>"
                    )
                } else {
                    return (
                        [
                            "不良反应病例" + ": <span style='color:#36d7dc'> " + Math.floor(Math.random() * 1000) + "</span><br/>",
                            "涉及产品数量" + ": <span style='color:#36d7dc'> " + Math.floor(Math.random() * 200) + "</span><br/>",
                            "不良反应类型" + ": <span style='color:#36d7dc'> " + "A类(10)、B类(5)、C类(5)" + "</span><br/>",
                            "<a href='javascript:;' onclick='map_tip_dialog()' style='float:right;'>查看更多</a>"

                        ].join('')
                    )
                }
            }
        };
        chart = null;
        map_option.data[1] = position2;
        chart = map_ls(map_option, setting);
    } else {
        setting.visualMap = false;
        chart = null;
        map_option.data[1] = position3;
        chart = map_ls(map_option, setting);

    }
}

function buLi_map_tip() {
    setting.visualMap = [{

        type: 'continuous',
        seriesIndex: 0,
        left: 10,
        min: 0,
        max: 1000,
        inRange: {
            color: ["#00e2a5", "#79f654", "#ffde00", "#ff1626"]
        },
        text: ['高', '低'],
        calculable: true,
        textStyle: {
            color: "#fff"
        }

    }];
    setting.tooltip = {
        trigger: 'item',
        showDelay: 300,
        hideDelay: 300,
        enterable: true,
        backgroundColor: "#03166d",
        borderColor: "#a3fffd",
        borderWidth: 2
    };
    chart = null;
    map_option2.data[1] = position2;
    chart = map_ls(map_option2, setting);

}

function juBao_map_tip() {
    chart = null;
    map_option2.data[1] = position3;
    chart = map_ls(map_option2, setting);

}

function map_tip_dialog(flag) {

    $("#map>div:eq(1)").css("z-index", "999");
    var mapDialog = $.dialog({title: ""});
    if (flag == 1) {
        //投诉举报详情页
        mapDialog.content('<div class="m-index-dialog2 clear" style="display: block;">' + $(".m-index-dialog2").html() + '</div>');
        juBao_map_tip();
        //charts.init({ id: 170, container: $("#map170") });
    }
    else if (flag == 2) {
        //不良反应详情页
        mapDialog.content('<div class="m-index-dialog2 clear" style="display: block;">' + $(".m-index-dialog3").html() + '</div>');
        buLi_map_tip();
        initGraph();       //不良反应详情关系图
        //charts.init({ id: 170, container: $("#map170") });

    } else {
        mapDialog.content('<div class="index-dialog1 clear" style="display: block;">' + $("#index-dialog1").html() + '</div>');
        $(".index-dialog1 .js-select-view").select2({
            minimumResultsForSearch: -1
        });
    }
}

//关系图初始化
function initGraph() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('db-wrap-graph'));
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
                symbolSize: 50,
                roam: false,                   //关系图是否可拖动
                label: {
                    normal: {
                        show: true
                    }
                },
                edgeSymbol: ['circle', 'arrow'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    normal: {
                        textStyle: {
                            fontSize: 14
                        }
                    }
                },
                data: [{
                    name: 'A类\n(10)',
                    x: 10,
                    y: 10
                }, {
                    name: 'B类\n(5)',
                    x: 10,
                    y: 30
                }, {
                    name: 'C类\n(5)',
                    x: 10,
                    y: 50
                }, {
                    name: '治愈',
                    x: 60,
                    y: 10
                }, {
                    name: '未治愈',
                    x: 60,
                    y: 30
                }, {
                    name: '死亡',
                    x: 60,
                    y: 50
                }],
                links: [
                    {
                    source: 'A类\n(10)',
                    target: '治愈',
                    label: {
                        normal: {
                            show: true,
                            formatter:'7'
                        }
                    },
                    lineStyle: {
                        normal: { color: '#34CDC9'}
                    }
                }, {
                    source: 'A类\n(10)',
                    target: '未治愈',
                    label: {
                        normal: {
                            show: true,
                            formatter:'1'
                        }
                    },
                    lineStyle: {
                        normal: { color: '#FFF475'}
                    }
                }, {
                    source: 'A类\n(10)',
                    target: '死亡',
                    label: {
                        normal: {
                            show: true,
                            formatter:'2'
                        }
                    },
                    lineStyle: {
                        normal: { color: '#FF005A'}
                    }
                }, {
                    source: 'B类\n(5)',
                    target: '治愈',
                    label: {
                        normal: {
                            show: true,
                            formatter:'5'
                        }
                    },
                    lineStyle: {
                        normal: { color: '#34CDC9'}
                    }
                }, {
                    source: 'C类\n(5)',
                    target: '治愈',
                    label: {
                        normal: {
                            show: true,
                            formatter:'3'
                        }
                    },
                    lineStyle: {
                        normal: { color: '#34CDC9'}
                    }
                }, {
                    source: 'C类\n(5)',
                    target: '未治愈',
                    label: {
                        normal: {
                            show: true,
                            formatter:'1'
                        }
                    },
                    lineStyle: {
                        normal: { color: '#FFF475'}
                    }
                }, {
                    source: 'C类\n(5)',
                    target: '死亡',
                    label: {
                        normal: {
                            show: true,
                            formatter:'1'
                        }
                    },
                    lineStyle: {
                        normal: { color: '#FF005A'}
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
    title:{
        show: true,
        text: '热点企业排行',
        textStyle: {
            color: '#fff',
            fontSize: 12
        },
        textAlign: 'center',
        left: '75%'
    },
    grid: {
        top:20,
        left: 0,
        right: 5,
        bottom: -10,
        containLabel: true
    },
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
    title:{
        show: true,
        text: '热点产品排行',
        textStyle: {
            color: '#fff',
            fontSize: 12
        },
        textAlign: 'center',
        left: '20%'
    },
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
    "type": "抽查抽检",
    "province": "山东",
    "district": "济南",
    "value": [117, 36.65, 500],
    "value1": "<span>山东岁宝百货有限公司景田店</span>",
    "name1": "被抽检单位",
    "name2": "不合格产品",
    "value2": {

        "item1": "阿莫西林分散片1",
        "item2": "阿莫西林分散片2",
        "item3": "阿莫西林分散片3"
    },
    "name3": "不合格项目",
    "value3": {

        "item1": "有关物质.含量测定",
        "item2": "有关物质.含量测定",
        "item3": "有关物质.含量测定"
    },
    "name4": "生产单位",
    "value4": {
        "item1": "白加宁药品生产厂",
        "item2": "白加宁药品生产厂",
        "item3": "白加宁药品生产厂"
    }

}, {
    "type": "抽查抽检",
    "province": "山东",
    "district": "招远",
    "value": [120.38, 37.35, 500],
    "value1": "<span>山东岁宝百货有限公司景田店</span>",
    "name1": "被抽检单位",
    "name2": "不合格产品",
    "value2": {

        "item1": "阿莫西林分散片1",
        "item2": "阿莫西林分散片2",
        "item3": "阿莫西林分散片3"
    },
    "name3": "不合格项目",
    "value3": {

        "item1": "有关物质.含量测定",
        "item2": "有关物质.含量测定",
        "item3": "有关物质.含量测定"
    },
    "name4": "生产单位",
    "value4": {
        "item1": "白加宁药品生产厂",
        "item2": "白加宁药品生产厂",
        "item3": "白加宁药品生产厂"
    }
}, {
    "type": "抽查抽检",
    "province": "山东",
    "district": "青岛",
    "value": [120.33, 36.07, 500],
    "value1": "<span>山东岁宝百货有限公司景田店</span>",
    "name1": "被抽检单位",
    "name2": "不合格产品",
    "value2": {

        "item1": "阿莫西林分散片1",
        "item2": "阿莫西林分散片2",
        "item3": "阿莫西林分散片3"
    },
    "name3": "不合格项目",
    "value3": {

        "item1": "有关物质.含量测定",
        "item2": "有关物质.含量测定",
        "item3": "有关物质.含量测定"
    },
    "name4": "生产单位",
    "value4": {
        "item1": "白加宁药品生产厂",
        "item2": "白加宁药品生产厂",
        "item3": "白加宁药品生产厂"
    }
}, {
    "type": "抽查抽检",
    "province": "山东",
    "district": "淄博",
    "value": [118.05, 36.78, 500],
    "value1": "<span>山东岁宝百货有限公司景田店</span>",
    "name1": "被抽检单位",
    "name2": "不合格产品",
    "value2": {

        "item1": "阿莫西林分散片1",
        "item2": "阿莫西林分散片2",
        "item3": "阿莫西林分散片3"
    },
    "name3": "不合格项目",
    "value3": {

        "item1": "有关物质.含量测定",
        "item2": "有关物质.含量测定",
        "item3": "有关物质.含量测定"
    },
    "name4": "生产单位",
    "value4": {
        "item1": "白加宁药品生产厂",
        "item2": "白加宁药品生产厂",
        "item3": "白加宁药品生产厂"
    }
}];

var position2 = [{
    "type": "不良反应-药品",
    "province": "山东",
    "district": "烟台",
    "value": [121.391382, 37.539297, 500],
    "name1": "不良反应病例",
    "value1": "1000",
    "name2": "涉及产品数量",
    "value2": "200",
    "name3": "不良反应类型",
    "value3": "不良反应类型：A类（800）、B类（190）、C类（10）"

}, {
    "type": "不良反应-药品",
    "province": "山东",
    "district": "临沂",
    "value": [118.326443, 35.065282, 500],
    "name1": "不良反应病例",
    "value1": "1000",
    "name2": "涉及产品数量",
    "value2": "200",
    "name3": "不良反应类型",
    "value3": "不良反应类型：A类（800）、B类（190）、C类（10）"
}, {
    "type": "不良反应-药品",
    "province": "山东",
    "district": "潍坊",
    "value": [119.107078, 36.70925, 500],
    "name1": "不良反应病例",
    "value1": "1000",
    "name2": "涉及产品数量",
    "value2": "200",
    "name3": "不良反应类型",
    "value3": "不良反应类型：A类（800）、B类（190）、C类（10）"
}, {
    "type": "不良反应-药品",
    "province": "山东",
    "district": "德州",
    "value": [116.307428, 37.453968, 500],
    "name1": "不良反应病例",
    "value1": "1000",
    "name2": "涉及产品数量",
    "value2": "200",
    "name3": "不良反应类型",
    "value3": "不良反应类型：A类（800）、B类（190）、C类（10）"
}
];

var position3 = [{
    "type": "投诉举报-药品",
    "province": "山东",
    "district": "滨州",
    "value": [118.016974, 37.383542, 500],
    "name1": "被举报单位",
    "value1": "山东岁宝百货有限公司景田店",
    "name2": "被举报产品",
    "value2": "牛黄上清丸",
    "name3": "举报次数",
    "value3": "14次",
    "name4": "生产企业",
    "value4": "白山健宁药业有限公司",
    "name5": "企业信用等级",
    "value5": "B级"

}, {
    "type": "投诉举报-药品",
    "province": "山东",
    "district": "莱芜",
    "value": [117.677736, 36.214397, 500],
    "name1": "被举报单位",
    "value1": "山东岁宝百货有限公司景田店",
    "name2": "被举报产品",
    "value2": "牛黄上清丸",
    "name3": "举报次数",
    "value3": "14次",
    "name4": "生产企业",
    "value4": "白山健宁药业有限公司",
    "name5": "企业信用等级",
    "value5": "B级"
}, {
    "type": "投诉举报-药品",
    "province": "山东",
    "district": "日照",
    "value": [119.461208, 35.428588, 500],
    "name1": "被举报单位",
    "value1": "山东岁宝百货有限公司景田店",
    "name2": "被举报产品",
    "value2": "牛黄上清丸",
    "name3": "举报次数",
    "value3": "14次",
    "name4": "生产企业",
    "value4": "白山健宁药业有限公司",
    "name5": "企业信用等级",
    "value5": "B级"
}, {
    "type": "投诉举报-药品",
    "province": "山东",
    "district": "威海",
    "value": [122.116394, 37.509691, 500],
    "name1": "被举报单位",
    "value1": "山东岁宝百货有限公司景田店",
    "name2": "被举报产品",
    "value2": "牛黄上清丸",
    "name3": "举报次数",
    "value3": "14次",
    "name4": "生产企业",
    "value4": "白山健宁药业有限公司",
    "name5": "企业信用等级",
    "value5": "B级"
}];
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
            {name: '莱芜市', value: Math.round(Math.random() * 1000)},
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