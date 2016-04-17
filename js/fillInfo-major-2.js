/**
 * Created by CoolGuy on 2016/4/17.
 */
$(function(){
    major.init();
});
var major = {
    url:{
        confirm:"fillInfo.html"
    }
    ,code:0//主专业code码
    ,init:function(){
        if(!(this.code = commonFunc.getQueryString(window.location.href,"code"))){
            console.error("找不到code");
            return;
        }
        this.domEvent();
    }
    ,domEvent:function(){
        //处理checkbox
        this.handleCheckbox();
        //确定按钮的处理
        this.handleConfirm();
    }
    ,handleConfirm:function(){
        var _this = this;
        $("#confirm").tap(function(){
            //保存相关数据
            _this.saveMajor();
            window.location.href = _this.url.confirm;
        })
    }
    //todo:保存专业相关数据
    ,saveMajor:function(){

    }
    ,handleCheckbox:function(){
        $(document).on("tap",".common_row",function(){
            var $this = $(this);
            var $that = $this.find("i");
            if($that && $that.hasClass("checked")){//如果能够找到
                $that.removeClass("checked").addClass("unchecked");
            }else{
                $that.removeClass("unchecked").addClass("checked");
            }
        });
    }

}