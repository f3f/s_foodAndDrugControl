
function milk_force(id,width,height,dataSet,group){

    // 数据

    var nodes = dataSet[0];

    var edges = dataSet[1];

    nodes.forEach(function(d){

        if(d.group == 1){
            d.image = "images/lidao/bg.png";
        }else if(d.group == 2){
            d.image = "images/lidao/pic1.png";
        }
    });

    //定义  svg 宽高

    var svg_w = width;
    var svg_h = height;

    //定义图片宽高

    var img_w = group[0].width;
    var img_h = group[0].height;

    var img_w1 = group[1].width;
    var img_h1 = group[1].height;

    var force = d3.layout.force()
        .nodes(nodes)		//指定节点数组
        .links(edges)		//指定连线数组
        .size([svg_w,svg_h])	//指定范围
        .linkDistance(110)	//指定连线长度
        .charge(-700);	//相互之间的作用力

    force.start();	//开始作用

    //获取svg
    var svg = d3.select("#"+id)
        .append("svg")
        .attr("width",svg_w)
        .attr("height",svg_h);

    //添加连线
    var svg_edges = svg.selectAll("line")
        .data(edges)
        .enter()
        .append("line")
        .style("stroke","#00a0e9")
        .style("stroke-width",1);

    //获取所有的g节点

    var g = svg.selectAll("g")
        .data(nodes)
        .enter()
        .append("g");


    // g节点中插入image节点

    var nodes_img = svg.selectAll("g")
        .append("image")
        .attr("width",function(d){
            if(d.group == 1){
                return img_w;
            }else if(d.group == 2){
                return img_w1;
            }
        })
        .attr("height",function(d){
            if(d.group == 1){
                return img_h;
            }else if(d.group == 2){
                return img_h1;
            }
        })
        .attr("x", function(d){
            return -80;
        })
        .attr("y", function(d){
            return -30;
        })
        .attr("xlink:href",function(d){
            return d.image;
        })
        .on("mouseover",function(d,i){
            d.show = true;
        })
        .on("mouseout",function(d,i){
            d.show = false;
        })
        .call(force.drag);

    //插入text节点

    g.each(function (d) {
        var t, n;
        console.log(d)

        // 插入文本节点
        t = d3.select(this).append('text').attr('style', 'fill:#fff; font-size:10px;font-weight:bold;').attr('cursor','pointer');

        // 换行
        if ((n = d.name).indexOf(' ') > -1&&d.group == 1) {

            n = n.split(' ');

            t.append('tspan').attr('x', '-34').attr('dy', '0.1em').text(n[0]);
            t.append('tspan').attr('x', '-40').attr('dy', '1.9em').text(n[1]);
            t.append('tspan').attr('x', '-34').attr('dy', '1.9em').text(n[2]);

        }else if((n = d.name).indexOf(' ') > -1&&d.group == 2){
            n = n.split(' ');

            t.append('tspan').attr('x', '-32').attr('dy', '0.1em').text(n[0]);
            t.append('tspan').attr('x', '-38').attr('dy', '1.5em').text(n[1]);
        }

        // 不换行
        else {

            t.attr('dx', '-28').attr('dy', '10').text(n);

        };

    });

    //添加描述节点的文字
    var svg_texts = svg.selectAll("text")
        .data(nodes)
        .enter()
        .append("text")
        .style("fill", "#fff")
        .text(function(d){
            //return d.name;
        });


    force.on("tick", function(){	//对于每一个时间间隔

        //更新连线坐标
        svg_edges.attr("x1",function(d){ return d.source.x; })
            .attr("y1",function(d){ return d.source.y+30; })
            .attr("x2",function(d){ return d.target.x; })
            .attr("y2",function(d){ return d.target.y+30; });
        g.attr("transform", function(d){
            return "translate(" + d.x + "," + d.y + ")";
        })

    });
}
	
	