(function () {

    var proxy = {
        click: null
    };

    var option = {
        title: {
            text: '',
            textAlign: "left",
            textStyle: {
                color: "#3ff6f2",
                fontSize: 14
            }

        },
        tooltip: {
            trigger: 'item',
            position:'right',
            showDelay: 300,
            hideDelay: 300,
            enterable: true,
            backgroundColor: "#03166d",
            borderColor: "#a3fffd",
            borderWidth: 2,
            formatter: function (params, ticket, callback) {
                //console.log(arguments)
                if (params.seriesType == "effectScatter") {
                    if (params.data.type == "检测检验") {
                        return (
                            "<div onclick='map_tip_dialog_food(1)'>" +
                            params.data.value1 + '<br/>' + params.data.name1 + '<br/>' + '<span style="font-size:14px;font-weight:normal;color:#36d7dc;">' + params.data.name2 + '<span/>' + '<span style="display:inline-block;width:50px;"></span>' + '<span style="font-size:14px;font-weight:normal;color:#36d7dc;">' + params.data.name3 + '<br/>' + '<span/>' + '<span style="font-size:14px;font-weight:normal;color:#36d7dc;">' + params.data.value2.shop1 + '<span/>' + '<span style="display:inline-block;width:8px;"></span>' + '<span style="font-size:14px;font-weight:normal;color:#36d7dc;">' + params.data.value3.item1 + '<span/>' + '<br/>' + '<span/>' + '<span style="font-size:14px;font-weight:normal;color:#36d7dc;">' + params.data.value2.shop2 + '<span/>' + '<span style="display:inline-block;width:50px;"></span>' + '<span style="font-size:14px;font-weight:normal;color:#36d7dc;">' + params.data.value3.item2 + '<span/>' + '<br/>' + '<span/>' + '<span style="font-size:14px;font-weight:normal;color:#36d7dc;">' + params.data.value2.shop3 + '<span/>' + '<span style="display:inline-block;width:22px;"></span>' + '<span style="font-size:14px;font-weight:normal;color:#36d7dc;">' + params.data.value3.item3 + '<span/>'+
                            "</div>"
                        )
                    } else if (params.data.type == "投诉举报") {
                        return (
                            [
                                params.data.name1 + ": <span style='color:#36d7dc'> " + params.data.value1 + "</span><br/>",
                                params.data.name2 + ": <span style='color:#36d7dc'> " + params.data.value2 + "</span><br/>",
                                params.data.name3 + ": <span style='color:#36d7dc'> " + params.data.value3 + "</span><br/>",
                                params.data.name4 + ": <span style='color:#36d7dc'> " + params.data.value4 + "</span><br/>",
                                params.data.name5 + ": <span style='color:#36d7dc'> " + params.data.value5 + "</span><br/>",
                                "<a href='javascript:;' onclick='map_tip_dialog_food(2)' style='float:right;'>查看更多</a>"
                            ].join('')
                        )
                    }else if (params.data.type == "疫区产品分布") {
                        return (
                            [
                                params.data.name1 + ": <span style='color:#36d7dc'> " + params.data.value1 + "</span><br/>",
                                params.data.name2 + ": <span style='color:#36d7dc'> " + params.data.value2 + "</span><br/>",
                                params.data.name3 + ": <span style='color:#36d7dc'> " + params.data.value3 + "</span><br/>",
                                params.data.name4 + ": <span style='color:#36d7dc'> " + params.data.value4 + "</span><br/>",
                                params.data.name5 + ": <span style='color:#36d7dc'> " + params.data.value5 + "</span><br/>",
                                "<a href='javascript:;' onclick='map_tip_dialog_food(3)' style='float:right;'>查看更多</a>"
                            ].join('')
                        )
                    } else if (params.data.type == "抽查抽检") {
                        return ([
                            params.data.name1 + '<br/>',
                            params.data.value1 + '<br/>',
                            '<ul>',
                            '<li class="tip-th" style="width: 450px;">' + '<span>' + params.data.name2 + '</span>' + '<span>' + params.data.name3 + '</span>' + '<span>' + params.data.name4 + '</span>',
                            '<li class="tip-tr">' + '<span title="' + params.data.value2.item1 + '">' + params.data.value2.item1 + '</span>' + '<span title="' + params.data.value3.item1 + '">' + params.data.value3.item1 + '</span>' + '<span title="' + params.data.value4.item1 + '">' + params.data.value4.item1 + '</span>',
                            '<li class="tip-tr">' + '<span title="' + params.data.value2.item2 + '">' + params.data.value2.item1 + '</span>' + '<span title="' + params.data.value3.item2 + '">' + params.data.value3.item2 + '</span>' + '<span title="' + params.data.value4.item2 + '">' + params.data.value4.item2 + '</span>',
                            '<li class="tip-tr">' + '<span title="' + params.data.value2.item3 + '">' + params.data.value2.item3 + '</span>' + '<span title="' + params.data.value3.item3 + '">' + params.data.value3.item3 + '</span>' + '<span title="' + params.data.value4.item3 + '">' + params.data.value4.item3 + '</span>',
                            '</ul>'
                        ].join(''))
                    } else if (params.data.type == "不良反应") {
                        return (
                            [
                                params.data.name1 + ": <span style='color:#36d7dc'> " + params.data.value1 + "</span><br/>",
                                params.data.name2 + ": <span style='color:#36d7dc'> " + params.data.value2 + "</span><br/>",
                                params.data.name3 + ": <span style='color:#36d7dc'> " + params.data.value3 + "</span><br/>",
                                "<a href='javascript:;' onclick='map_tip_dialog()' style='float:right;'>查看更多</a>"

                            ].join('')
                        )
                    } else if (params.data.type == "不良反应-药品") {
                        return (
                            [
                                params.data.name1 + ": <span style='color:#36d7dc'> " + params.data.value1 + "</span><br/>",
                                params.data.name2 + ": <span style='color:#36d7dc'> " + params.data.value2 + "</span><br/>",
                                params.data.name3 + ": <span style='color:#36d7dc'> " + params.data.value3 + "</span><br/>",
                                "<a href='javascript:;' onclick='map_tip_dialog(2)' style='float:right;'>查看更多</a>"

                            ].join('')
                        )
                    } else if (params.data.type == "投诉举报-药品") {
                        return (
                            [
                                params.data.name1 + ": <span style='color:#36d7dc'> " + params.data.value1 + "</span><br/>",
                                params.data.name2 + ": <span style='color:#36d7dc'> " + params.data.value2 + "</span><br/>",
                                params.data.name3 + ": <span style='color:#36d7dc'> " + params.data.value3 + "</span><br/>",
                                params.data.name4 + ": <span style='color:#36d7dc'> " + params.data.value4 + "</span><br/>",
                                params.data.name5 + ": <span style='color:#36d7dc'> " + params.data.value5 + "</span><br/>",
                                "<a href='javascript:;' onclick='map_tip_dialog(1)' style='float:right;'>查看更多</a>"

                            ].join('')
                        )
                    }

                }
            }
        },

        visualMap: [{

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

        }],

        geo: {
            //map: 'china',
            label: {
                emphasis: {
                    show: false
                }
            },
            show: false,
            // itemStyle: {
            //     normal: {
            //         areaColor: '#052659',
            //         borderColor: '#199DD7'
            //     },
            //     emphasis: {
            //         areaColor: 'rgba(255, 255, 255, 0.1)'
            //     }
            // },
            symbol: "none"
        },
        series: [{

            type: "map",
            map: 'china',
            itemStyle: {
                normal: {
                    borderColor: '#3271b0',
                    borderWidth: 1,
                    areaColor:"#052659"
                },
                emphasis: {
                    areaColor: "red",
                    opacity: 0.7
                }
            },
            label: {
                // normal: {
                //     show: true
                // },
                emphasis: {
                    textStyle: {
                        color: '#fff'
                    }
                }
            },
            showLegendSymbol: false

        }, {
            name: "红色预警",
            type: 'effectScatter',
            effectType: 'ripple',
            showEffectOn: 'emphasis',
            coordinateSystem: 'geo',
            symbol: "image://images/circle1.png",
            symbolSize: 40,
            rippleEffect: {
                scale: 6
            },
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: false
                },
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    color: '#da1656'
                }
            }
        }]
    };
    // 指定图表的配置项和数据
    var main = function (p, setting) {
        //判断optio是否有map接口
        var path = p.map ? ('province/' + p.map + '.json') : "china.json";
        $.get(path, function (chinaJson) {
            echarts.registerMap(p.map, chinaJson);
            _render_init_(p, setting);
            _render_set_(p, setting);

        });

        return proxy;
    };

    // 命名空间
    var _render_ = function () {

        // null

    };

    // 指定图表的配置项和数据
    var _render_init_ = function (p, setting) {

        var e = _render_.element = document.getElementById(p.id);

        // e.style.width = p.width + 'px';
        // e.style.height = p.height + 'px';

    };

    var _render_set_ = function (p, setting) {
        option.series[0].map = p.map;
        option.geo.map = p.map;

        option.series[0].data = p.data[0];
        option.series[1].data = p.data[1];

        var myChart = echarts.init(_render_.element);


        myChart.setOption($.extend(option, setting));

        //点击提示框打开空白页
        $(document).click(function (/* event */ e) {
            var map_tip = 'map';

            // id
            if ($(e.target).is('#' + map_tip + '> div:eq(1)>span')) {
                 //window.open('about:black');
                 //$(document).trigger("map_tip_dialog")
            }

        });
    };

    window.map_ls = main;
}());
