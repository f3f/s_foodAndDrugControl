(function(window) {
    window.CreateTree = function(id, width, height, data, links,fns) {
        var e = document.getElementById(id);
        e.style.width = width + 'px';
        e.style.height = height + 'px';
        var myChart = echarts.init(e);
        myChart.on('click', function(param) {
            fns(param);
        });
        var option = {
            // title: {
            //     text: "上下游关联企业",
            //     top: 20,
            //     textStyle: {
            //         color: '#3ce4c4',
            //         fontSize: 22
            //     }
            // },
            series: [{
                name: '树图',
                type: 'graph',
                hoverAnimation: false,
                left: 40,
                top: 30,
                label: {
                    normal: {
                        show: true,
                        textStyle: {
                            fontSize: 18,
                            color: '#fbfbfb',
                            position: [10, 0]
                        }
                    }

                },
                lineStyle: {
                    normal: {
                        color: '#3297d3',
                        width: 2,
                        opacity: 0.8
                    },
                    emphasis: {
                        color: '#3297d3',
                        width: 2,
                        opacity: 0.8
                    }

                },
                data: data,
                links: links
            }]
        };

        myChart.setOption(option);
    }
})(window);