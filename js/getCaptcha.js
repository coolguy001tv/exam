/**
 * Created by CoolGuy on 2016/4/17.
 */
$(function(){
    captcha.init();
});
var captcha = {
    init:function(){
        this.domEvent();
    }
    //验证码的长度
    ,captchaLength:4
    ,domEvent:function(){
        var _this = this;
        var $confirm = $("#confirm");
        //获取验证码的点击
        $("#getCaptcha").tap(function(){
            var mob = $("#mobileNo").val();
            //手机号码校验通过
            if(commonFunc.valid.check(mob,"phone")){
                _this.getCaptcha(mob);
                _this.countDown(60);
            }else{
                alert("请输入正确的手机号码");
                return;
            }
        })
        //输入验证码
        $("#captchaNo").on("keyup",function(){
            if($(this).val().length === _this.captchaLength){
                var mob = $("#mobileNo").val();
                if(commonFunc.valid.check(mob,"phone")){
                    //验证码长度符合，并且手机号码符合条件
                    $confirm.removeClass("disabled");
                    return;
                }
            }
            !$confirm.hasClass("disabled") && $confirm.addClass("disabled");
        });
        //确认
        $confirm.tap(function(){
            //todo:跳转支付页面
        })


    }
    ,getCaptcha:function(mob){
        //todo:获取验证码
    }
    ,countDown:function(seconds){
        var time = seconds || 60;
        var $get = $("#getCaptcha");
        --time;
        var interval = setInterval(function(){
            $get.text(time+"秒后重新获取");
            !$get.hasClass("disabled") && $get.addClass("disabled");
            --time;
            if(time < 0){
                clearInterval(interval);
                $get.text("重获验证码").removeClass("disabled");
            }
        },1000);
    }
}