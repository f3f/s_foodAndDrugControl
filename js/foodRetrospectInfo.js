/**
 * Created by 魏阁 on 2016/9/18.
 */
// 创建数据.
var dataSet = {
    "type": "factory",
    "name": "北京海淀清河食品加工总厂1",
    "logistics": "",
    "car": false,
    "price": null,
    "upPrice": 3180000,
    "downPrice": 180000.344,
    "children": [{
        "type": "store",
        "name": "海淀菊园1052号仓库2",
        "logistics": null,
        "car": false,
        "price": 50000,
        "upPrice": 18000,
        "downPrice": 18000,
        "children": [{
            "type": "city",
            "name": "北京超市发连锁股份有限公司3",
            "logistics": "北京康捷空国际货运有限公司",
            "car": true,
            "price": 50000,
            "upPrice": 18000,
            "downPrice": 18000,
            "children": [{
                "type": "supermarket",
                "name": "北京超市发连锁股份有限公司4",
                "logistics": "北京康捷空国际货运有限公司",
                "car": true,
                "price": 50000,
                "upPrice": 18000,
                "downPrice": 18000,
                "children": []
            }, {
                "type": "supermarket",
                "name": "北京超市发连锁股份有限公司4",
                "logistics": "北京康捷空国际货运有限公司",
                "car": true,
                "price": 50000,
                "upPrice": 18000,
                "downPrice": 18000,
                "children": []
            }, {
                "type": "supermarket",
                "name": "北京超市发连锁股份有限公司4",
                "logistics": "北京康捷空国际货运有限公司",
                "car": true,
                "price": 51000,
                "upPrice": 78000,
                "downPrice": 18000,
                "children": []
            }]
        }, {
            "type": "city",
            "name": "北京超市发连锁股份有限公司3 - 1",
            "logistics": "北京康捷空国际货运有限公司",
            "car": true,
            "price": 50040,
            "upPrice": 68000,
            "downPrice": 18000,
            "children": []
        }]
    }, {
        "type": "city",
        "name": "北京超市发连锁股份有限公司2-only",
        "logistics": "北京康捷空国际货运有限公司",
        "car": true,
        "price": 30000,
        "upPrice": 58000,
        "downPrice": 18000,
        "children": []

    }, {
        "type": "store",
        "name": "海淀菊园1052号仓库2",
        "logistics": null,
        "car": true,
        "price": 522000,
        "upPrice": 48000,
        "downPrice": 18000,
        "children": [{
            "type": "city",
            "name": "北京超市发连锁股份有限公司3-black",
            "logistics": "北京康捷空国际货运有限公司",
            "car": true,
            "price": 54500,
            "upPrice": 78000,
            "downPrice": 18000,
            "children": [{
                "type": "city",
                "name": "北京超市发连锁股份有限公司4-black",
                "logistics": "北京康捷空国际货运有限公司",
                "car": true,
                "price": 50340,
                "upPrice": 38000,
                "downPrice": 18000,
                "children": []
            }, {
                "type": "city",
                "name": "北京超市发连锁股份有限公司4-black",
                "logistics": "北京康捷空国际货运有限公司",
                "car": true,
                "price": 50001,
                "upPrice": 18100,
                "downPrice": 17000,
                "children": []
            }]
        }]
    }, {
        "type": "store",
        "name": "北京超市发连锁股份有限公司2●",
        "logistics": "北京康捷空国际货运有限公司",
        "car": true,
        "price": 50000,
        "upPrice": 18000,
        "downPrice": 18000,
        "children": [{
            "type": "city",
            "name": "北京超市发连锁股份有限公司3●",
            "logistics": "北京康捷空国际货运有限公司",
            "car": true,
            "price": 50000,
            "upPrice": 18000,
            "downPrice": 18000,
            "children": [{
                "type": "city",
                "name": "北京超市发连锁股份有限公司4",
                "logistics": "北京康捷空国际货运有限公司",
                "car": false,
                "price": 50000,
                "upPrice": 18000,
                "downPrice": 18000,
                "children": []
            }]
        }, {
            "type": "city",
            "name": "北京超市发连锁股份有限公司3-red●",
            "logistics": "北京康捷空国际货运有限公司",
            "car": true,
            "price": 50000,
            "upPrice": 18000,
            "downPrice": 18000,
            "children": [{
                "type": "city",
                "name": "北京超市发连锁股份有限公司4-red●",
                "logistics": "北京康捷空国际货运有限公司",
                "car": true,
                "price": 50000,
                "upPrice": 18000,
                "downPrice": 18000,
                "children": []
            }, {
                "type": "city",
                "name": "北京超市发连锁股份有限公司4-red●",
                "logistics": "北京康捷空国际货运有限公司-北京康捷空国际货运有限公司",
                "car": true,
                "price": 50000,
                "upPrice": 18000,
                "downPrice": 18000,
                "children": []
            }]
        }]
    }]
};

//测试
$(document).ready(function(){

    createTreeCharts(document.getElementById("monitor"), dataSet);

    $("ul.children").hide();
    $("span.parent").click(function(){
        $(this).siblings("ul.children").slideToggle();
    })
})

