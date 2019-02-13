// 19:56 2016/8/9 zhanghong
//
// jquery-1.12.3.min.js
// echarts.min.js



    (function () {

        // 图片
        var image = [

            // 0
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAApYAAAEXCAYAAAAX9gTqAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAAC' +
            'xIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNui8sowAAAsCSURBVHic7d1PjN3Vecfh75k7YGOPZ/AQ8yeALVql' +
            'Uisv2nrRdqRuKqMA7aKrLppayjosumiELCVSKzZFBHWH1FWlKkFdpwWU1uomCwStUBZFXVQJaamwhwFsPOOOC/bvnCywjZsUMhPewR7zPJK' +
            'tn65mrs7dffz6nnPaGCNb8ciJp+9IcnIkX2kjD46W/27Jc2PkqX/8zhMXt/QmAADcstpWwvLLf/LUvoycSrKSJCNJy4d/jeSljDz8T8+d3N' +
            'zRlQIAcFOb28oP9Wk62fu00vuU3vuVP1OmaUqfppXR+xM7vVAAAG5u81v5oWma/jitJWPk/Pmz2Vhfz4EDi1k6eFcyRtLaiSR/8fPep52cP' +
            'u16AW6IL5z6s0/1+9/d/29FKwH4bK18/5+3/LNbDcsH00YyWjbWz2eMkQsXNrKwuJRkpKU98IsuFgCAW8OWvmP5u3/4zR+ONn65JWnz+7N2' +
            '+vXc/cWHMi5tZiS5dHnk9TO+YgkA8Hnx2G3v5m9f/na7/rUtTiwv/10yvpkkB5eXcv+RR7N+djXn3tlIxsi7b587s766enonFg0AwE3owaV' +
            'jP/3SVv8r/C9by+9lZOXd1f/Mu6s/zpV94dnMHXnz9Npq7UoBANhttrQr/JUXv7U5TdPxaVx+cjY33uijX5rN5Y17Di09+1/jcHrvfacXCg' +
            'DAzW1LE8sk+dfv/dXFJH+e5LnrX1987G8er14UAAC7z5YmlgAA8PMISwAASghLAABKCEsAAEoISwAASghLAABKCEsAAEoISwAASghLAABKC' +
            'EsAAEoISwAASghLAABKCEsAAEoISwAASghLAABKzG/3F8YYO7EOAAB2ORNLAABKCEsAAEoISwAASghLAABKCEsAAEoISwAASghLAABKCEsA' +
            'AEoISwAASmz75p3ee1prSdzCAwDAR0wsAQAoISwBACghLAEAKCEsAQAoISwBACghLAEAKCEsAQAose1zLK8/u9I5lgAAXGViCQBACWEJAEA' +
            'JYQkAQAlhCQBACWEJAEAJYQkAQAlhCQBACedYAgBQwsQSAIASwhIAgBLCEgCAEsISAIASwhIAgBLb3hXee09rLYld4QAAfMTEEgCAEsISAI' +
            'ASwhIAgBLCEgCAEsISAIASwhIAgBLbPm7o+iOGHDcEAMBVJpYAAJQQlgAAlBCWAACUEJYAAJQQlgAAlLArHACAEiaWAACUEJYAAJQQlgAAl' +
            'BCWAACUEJYAAJTYdlj23jPGyBgjvfedWBMAALuQiSUAACWEJQAAJYQlAAAlhCUAACWEJQAAJX6hu8Kv3hHurnAAAK4ysQQAoISwBACghLAE' +
            'AKCEsAQAoITNOwAAlDCxBACghLAEAKCEsAQAoISwBACgxLY37/Te01q79gwAAImJJQAARYQlAAAlhCUAACWEJQAAJYQlAAAlXOkIAEAJE0s' +
            'AAEoISwAASghLAABKCEsAAErYvAMAQAkTSwAASghLAABKCEsAAEoISwAASti8AwBACRNLAABKCEsAAEoISwAASghLAABKbHvzTu89rbVrzw' +
            'AAkJhYAgBQRFgCAFBCWAIAUEJYAgBQws07AACUMLEEAKCEsAQAoISwBACghLAEAKCEzTsAAJQwsQQAoISwBACghLAEAKDEtsOy937te5a99' +
            '51YEwAAu5CJJQAAJYQlAAAlhCUAACWEJQAAJRyQDgBAiW2H5U+b7flxct/CvorFAOw2R8+/41/YwOfSxdnCz7z2qcOy3fla8i/T5qd9H4Dd' +
            '6LXsvdFLALghfnXvhZ95zXcsAQAoISwBAChh8w4AACVMLAEAKCEsAQAoISwBACghLAEAKGHzDgAAJUwsAQAoISwBACghLAEAKCEsAQAose3' +
            'NO733a5t2eu/lCwIAYHcysQQAoISwBACghLAEAKCEsAQAoISbdwAAKGFiCQBACWEJAEAJYQkAQAnfsQQAoISJJQAAJYQlAAAlhCUAACWEJQ' +
            'AAJba9eaf3nt77tWcAAEhMLAEAKCIsAQAoISwBACghLAEAKOHmHQAASphYAgBQQlgCAFBCWAIAUEJYAgBQwuYdAABKmFgCAFBCWAIAUEJYA' +
            'gBQQlgCAFDC5h0AAEqYWAIAUEJYAgBQQlgCAFBCWAIAUGLbm3d679c27fTeyxcEAMDuZGIJAEAJYQkAQAlhCQBACWEJAEAJYQkAQAlXOgIA' +
            'UMLEEgCAEsISAIASwhIAgBLCEgCAEjbvAABQwsQSAIASwhIAgBLCEgCAEsISAIASNu8AAFDCxBIAgBLCEgCAEsISAIASwhIAgBLCEgCAEtv' +
            'eFd57v7YbvPdeviAAAHYnE0sAAEoISwAASghLAABKCEsAAEoISwAASrgrHACAEiaWAACUEJYAAJQQlgAAlBCWAACUEJYAAJSwKxwAgBImlg' +
            'AAlBCWAACUEJYAAJQQlgAAlBCWAACUEJYAAJRw3BAAACVMLAEAKCEsAQAoISwBACghLAEAKCEsAQAose1d4b339N6vPQMAQGJiCQBAEWEJA' +
            'EAJYQkAQAlhCQBACWEJAEAJYQkAQAlhCQBAiW2fYznGyBjj2jMAACQmlgAAFBGWAACUEJYAAJQQlgAAlBCWAACUEJYAAJQQlgAAlHCOJQAA' +
            'JUwsAQAoISwBACghLAEAKCEsAQAoISwBACghLAEAKCEsAQAoISwBACghLAEAKOHmHQAASphYAgBQQlgCAFBCWAIAUEJYAgBQQlgCAFBiy7v' +
            'CHznx9B1JTs5mc1/tU79vbjZ3ZnH/nn+Yy1ySaedWCADATWE2m8099EtH7r370F3L79x+ex458fQPkzyXkae+950nLratHBn05a88tS+tnR' +
            'oZK0mS0dLy4e9daBv5wff//QfTNPWd/CAAANw4s9ls7td/4+iXDhxYWBhjpCVJa1ePn3wpycPzSfYnuSefML089IXFP11de28lGUlL2mgZG' +
            'Ula9mVfjv3mrz1w8cLG2mfwmQAAuAHuWDhw9559exemaUpyJSw/elrZu+e2b8wnuTfJ7JPeaO3t9/6g98vJSM6/dzYbG+s5cGAxSweXkyTz' +
            't+89NL+479AOfhYAAG6g+fkpfZo+7MHzZ7Oxvp4Di4tZunM5GckHl8aJ+dOnT89aa5mbm0tr7f99o0uX/ve+3luSkY2N8xlj5MKFjSwsLqU' +
            'laS2X/v6vHz/6mX46AAA+M3/0+LOvjT5uS1o21q/04MZGFhaW0jLywZjund+7d+/05ptvzpJ8bFiOPs70Ph0eI7n3gS9l7fTrufuLD6Vf2s' +
            'xoLbfNtbfW1vxPOADAraqNfuby5X44+b89OF3aTGst83Nzb80vLy+vLi8vf+J3LA/e+fzzb62997W0ZGlxKfcfeTTrZ1dz7u31JC133bP83' +
            'aNHDSwBAG5VB5deeH717bNfy2g5uLyU+3/n0ayfW825tY0kI/Pzt397S7vCf+uxr+9rLadGspK0tCRjjLSWjLSXWvLwyy98a3PHPxEAADfE' +
            'b//+1/eNkVNJVlq7cj7QyJUeHC9l5OEtHZD+yovPbE5TP96n/uRc62+MMV2azeWNg0v7nh19Oi4qAQBubS+/8MxmH/34GP3JqU8/6tP0QR+' +
            'Xf9Sny0/23o+/8uIzm1uaWF7v1Vdf/ZU9e/YkSd5///0cO3bsP3Zi8QAA7C6udAQAoISwBACghLAEAKCEsAQAoISwBACghLAEAKDEx96283' +
            'Fms1muHlE0m83KFwQAwO607Ynl4cOHp6vPR44cmT7pZwEA+PzY9gHpSfYnuefK81tJ/qd0RQAA7Eo/AdczM6TFK2NGAAAAAElFTkSuQmCC'

        ];

        // 值
        var value = {

            // 标识
            id : 'chart'

        };

        // 参数
        var option = {

            grid : {

                left        : 0,
                right       : 0,
                top         : 0,
                bottom      : 0

            },

            xAxis : [{

                type        : 'value',
                splitNumber : '2',
                axisLine    : {show : true, lineStyle : {color : '#ffffff', width : '1', type : 'dashed', opacity : '1'}},
                axisTick    : {show : false},
                axisLabel   : {show : false},
                splitLine   : {show : false}

            }],

            yAxis : [{

                type        : 'value',
                splitNumber : '2',
                axisLine    : {show : true, lineStyle : {color : '#ffffff', width : '1', type : 'dashed', opacity : '1'}},
                axisTick    : {show : false},
                axisLabel   : {show : false},
                splitLine   : {show : false}

            }],

            series : [{

                type        : 'scatter',
                data        : [

                    {value : [-100, -100], symbolSize : 0},
                    {value : [-100,  100], symbolSize : 0},
                    {value : [ 100, -100], symbolSize : 0},
                    {value : [ 100,  100], symbolSize : 0}

                ]

            }]

        };



        // 主函数
        var main = function (/* value */ v) {

            // 渲染（参数）
            render_option(v);

            // 渲染（样式）
            render_style(v);

            // 渲染（元素）
            render_element(v);

            // 执行（初始化）
            render.chart = echarts.init(render.element); render.chart.on('click', handler_click);

            // 执行（渲染）
            render.chart.setOption(option);

        };

        // 渲染（命名空间）
        var render = function () {

            // ...
            //
            // render.element
            // render.chart

        };

        // 渲染（参数）
        var render_option = function (/* value */ v) {

            var $,
                a, b, c, i;

            // 标识
            if ($ = v['id']) value['id'] = $;

            // 点击
            if ($ = v['handlerClick']) value['handlerClick'] = $;

            // 数据
            if ($ = v['data']) for (value['data'] = $, a = option.series[0].data, i = 0; b = $[i]; i++) a.push({

                // 位置
                value : [b.x * 100, b.y * 100],

                // 尺寸
                symbolSize : b.r * 100,

                // 标签
                label : {normal : {show : true, formatter : b.name, textStyle : {fontSize : ((c = b.r * 20) > 20 ? 20 : c)}}},

                // 样式
                itemStyle : {normal : {color : b.color}}

            });

        };

        // 渲染（样式）
        var render_style = function (/* value */ v) {

            // 删除
            $('#' + value['id'] + '-style').remove();

            // 添加
            $('head').append(

                '<style id="' + value['id'] + '-style">                 \n' +
                '                                                       \n' +
                '    #' + value['id'] + ' {                             \n' +
                '        width               : 500px;                   \n' +
                '        height              : 370px;                   \n' +
                '        background-image    : url("' + image[0] + '"); \n' +
                '        background-repeat   : no-repeat;               \n' +
                '        background-position : -6px -1px;               \n' +
                '        background-size     : 484px 400px;             \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '    #' + value['id'] + '-main {                        \n' +
                '        position            : absolute;                \n' +
                '        width               : 642px;                   \n' +
                '        height              : 259px;                   \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '    #' + value['id'] + '-text {                        \n' +
                '        position            : absolute;                \n' +
                '        width               : 0;                       \n' +
                '        height              : 0;                       \n' +
                '        margin-left         : 0;                       \n' +
                '        margin-top          : 0;                       \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '    #' + value['id'] + '-text span {                   \n' +
                '        position            : absolute;                \n' +
                '        font-size           : 14px;                    \n' +
                '        line-height         : 12px;                    \n' +
                '        width               : 80px;                    \n' +
                '        cursor              : default;                 \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '    #' + value['id'] + '-text ._\\#1_ {                \n' +
                '        left                : 660px;                   \n' +
                '        top                 : 303px;                   \n' +
                '        color               : #536da6;                 \n' +
                '        white-space         : nowrap;                  \n' +
                '        display             : none;                    \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '    #' + value['id'] + '-text ._\\#2_ {                \n' +
                '        left                : 14px;                    \n' +
                '        display             : none;                    \n' +
                '        top                 : 14px;                    \n' +
                '        color               : #536da6;                 \n' +
                '        white-space         : nowrap;                  \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '    #' + value['id'] + '-text ._\\#3_ {                \n' +
                '        left                : 13px;                    \n' +
                '        top                 : 15px;                    \n' +
                '        color               : #01F4F7;                 \n' +
                '        white-space         : normal;                  \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '    #' + value['id'] + '-text ._\\#4_ {                \n' +
                '        left                : 13px;                    \n' +
                '        top                 : 355px;                   \n' +
                '        color               : #FFFF00;                 \n' +
                '        white-space         : normal;                  \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '    #' + value['id'] + '-text ._\\#5_ {                \n' +
                '        left                : 415px;                   \n' +
                '        top                 : 15px;                    \n' +
                '        color               : #FE0000;                 \n' +
                '        white-space         : normal;                  \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '    #' + value['id'] + '-text ._\\#6_ {                \n' +
                '        left                : 415px;                   \n' +
                '        top                 : 355px;                   \n' +
                '        color               : #FF3300;                 \n' +
                '        white-space         : normal;                  \n' +
                '    }                                                  \n' +
                '                                                       \n' +
                '</style>                                               \n'

            );

        };

        // 渲染（节点）
        var render_element = function (/* value */ v) {

            // 创建
            $('#' + value['id']).append(

                '<div id="' + value['id'] + '-main" style="width:500px; height:370px;"> \n' +
                '                                                                       \n' +
                '    <!-- script -->                                                    \n' +
                '                                                                       \n' +
                '</div>                                                                 \n' +
                '                                                                       \n' +
                '<div id="' + value['id'] + '-text">                                    \n' +
                '                                                                       \n' +
                '    <span class="_#1_">' + v['label'][0] + '</span>                    \n' +
                '    <span class="_#2_">' + v['label'][1] + '</span>                    \n' +
                '    <span class="_#3_">' + v['label'][2] + '</span>                    \n' +
                '    <span class="_#4_">' + v['label'][3] + '</span>                    \n' +
                '    <span class="_#5_">' + v['label'][4] + '</span>                    \n' +
                '    <span class="_#6_">' + v['label'][5] + '</span>                    \n' +
                '                                                                       \n' +
                '</div>                                                                 \n'

            );

            // 赋值
            render.element = $('#' + value['id'] + '-main') [0];

        };

        // 处理程序（点击）
        var handler_click = function (/* event */ e) {

            try {

                value['handlerClick'] (value['data'][e.dataIndex - 4]);

            }

            catch (e) {

                // ...

            }

        };



        // 接口
        window.bubbleChartMatrixRuler = main;

    } ());