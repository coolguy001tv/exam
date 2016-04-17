/**
 * Created by CoolGuy on 2016/4/17.
 */
$(function(){
    major1.init();
});
var major1 = {
    url:{
       major2:"fillInfo-major-2.html"
    }
    ,type:0//当前是第几专业
    ,init:function(){
        if(!(this.type = commonFunc.getQueryString(window.location.href,"type"))){
            console.error("找不到type");
            return;
        }
        this.domEvent();
    }
    ,domEvent:function(){
        var _this =this;
        //点击跳转
        $("#majorList").on('tap',".common_row",function(){
            var code = $(this).attr("code");
            window.location.href = _this.url.major2+"?code="+code;
        })
    }
}