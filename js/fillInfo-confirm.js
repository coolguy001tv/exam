/**
 * Created by CoolGuy on 2016/4/17.
 */
$(function(){
    confirm.init()
});
var confirm = {
    url:{
       captcha:"getCaptcha.html"
    }
    ,init:function(){
        this.domEvent();
    }
    ,domEvent:function(){
        var _this = this;
        //返回
        $("#pre").tap(function(){
            window.history.go(-1);
        })
        //确认
        $("#confirm").tap(function(){
            window.location.href = _this.url.captcha;
        });
    }
}