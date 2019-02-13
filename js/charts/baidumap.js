function setMapFoot(id, data) {
    //创建MAP对象
    var map = new BMap.Map(id);
    ////开启鼠标滚轮缩放;
    map.enableScrollWheelZoom(true);
    // 设置地图显示的城市 此项是必须设置的
    map.setCurrentCity("北京");
    //设置地图样式
    map.setMapStyle({
        styleJson: [
            {
                "featureType": "land",
                "elementType": "geometry",
                "stylers": {
                    "color": "#212121"
                }
            },
            {
                "featureType": "building",
                "elementType": "geometry",
                "stylers": {
                    "color": "#2b2b2b"
                }
            },
            {
                "featureType": "highway",
                "elementType": "all",
                "stylers": {
                    "lightness": -42,
                    "saturation": -91
                }
            },
            {
                "featureType": "arterial",
                "elementType": "geometry",
                "stylers": {
                    "lightness": -77,
                    "saturation": -94
                }
            },
            {
                "featureType": "green",
                "elementType": "geometry",
                "stylers": {
                    "color": "#1b1b1b"
                }
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": {
                    "color": "#181818"
                }
            },
            {
                "featureType": "subway",
                "elementType": "geometry.stroke",
                "stylers": {
                    "color": "#181818"
                }
            },
            {
                "featureType": "railway",
                "elementType": "geometry",
                "stylers": {
                    "lightness": -52
                }
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": {
                    "color": "#313131"
                }
            },
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": {
                    "color": "#ffffff"
                }
            },
            {
                "featureType": "manmade",
                "elementType": "geometry",
                "stylers": {
                    "color": "#1b1b1b"
                }
            },
            {
                "featureType": "local",
                "elementType": "geometry",
                "stylers": {
                    "lightness": -75,
                    "saturation": -91
                }
            },
            {
                "featureType": "subway",
                "elementType": "geometry",
                "stylers": {
                    "lightness": -65
                }
            },
            {
                "featureType": "railway",
                "elementType": "all",
                "stylers": {
                    "lightness": -40
                }
            },
            {
                "featureType": "background",
                "elementType": "geometry",
                "stylers": {
                    "color": "#071635",
                    "weight": "1",
                    "lightness": -29
                }
            }
        ]
    });
    //添加地图类型控件
    map.addControl(new BMap.MapTypeControl());
    //初始化地图,设置中心店坐标和地图级别
    map.centerAndZoom(new BMap.Point(data[0].Longitude, data[0].Latitude), 16);
    //循环创建每个标注
    for (var i = 0; i < data.length; i++) {
        //创建标注
        var marker = new BMap.Marker(new BMap.Point(data[i].Longitude, data[i].Latitude));
        //将标注添加到地图中
        map.addOverlay(marker);
        //创建信息窗内容
        var sContent = "<h4 style='font-size: 18px'>" + data[i].name + "</h4>" +
            "<span>" + data[i].category + "</span><br />" +
            "<br><img src='images/Dots.png'style='vertical-align:middle; width: 21px; height: 21px;'>" +
            "<span>" + data[i].address + "</span><br />" +
            "<br><img src='images/phone.png' style='vertical-align:middle; width: 21px; height: 21px;'> " +
            "<span>" + data[i].telephone + "</span>";
        addClick(sContent, marker)
    }

    function addClick(s, m) {
        var flag = false,
            zflag = false;
        var div = document.createElement('div');
        var mapTitle=document.getElementsByClassName('Map-title');
        div.className = "tool-div";
        div.style.cssText = 'box-sizing:border-box;position:absolute;left:8px;top:25px;height:170px;width:250px;padding:0px 10px 0px 25px;color:#fff;border:2px solid #0066b3;background:#1a3f81;border-radius:3px;'
        div.innerHTML = s;
        var timer = null;
        m.addEventListener("mouseover", function(e) {
            //打开开关创建窗口
            var that = this,
            flag = true;
            if (flag) {
                clearTimeout(timer);
                 setTimeout(function() {
                           m.V.appendChild(div);
                    }, 1500);
                div.addEventListener("mouseover", function() {
                    zflag = true;
                });
                div.addEventListener("mouseout", function() {
                    zflag = false;
                    setTimeout(function() {
                        if (!zflag) that.V.innerHTML = '';
                    }, 1000)
                })
            }
        });
        m.addEventListener("mouseout", function(e) {
            flag = false;
            var that = this;
            if (!flag) {
                timer=setTimeout(function() {
                    if (!zflag) that.V.innerHTML = '';
                }, 1000)
            }
        });
    }

}
