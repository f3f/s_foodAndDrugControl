/**
 * Created by 魏阁 on 2016/9/18.
 */
$(document).ready(function(){

    //舆情动态类型选择效果
    $(".tab-group li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
    })

})