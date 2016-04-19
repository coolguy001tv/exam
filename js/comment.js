/**
 * Created by CoolGuy on 2016/4/19.
 */
$(function(){
    comment.init();
});
var comment = {
    init:function(){
       this.domEvent();
    },
    domEvent:function(){
        //可以编辑
        if($("#editable").val()==1){
            $("#submit").show();//不展示提交按钮
            this.handleStar();//处理星星
            this.commit();//点击提交时的处理
        }else{//没有数据时需要先获取评论数据,并进行相关处理
            this.getComment();
        }

    },
    getComment:function(){
        var $comment = $("#comment");
        $comment.prop("disabled",true);//输入框不允许编辑
        //todo:需要处理 星星的展示数量 & 评论内容
        $comment.val("我是评论内容");
        this.activateStar(3)//todo:注意星星下标从0开始，即4星请传入3

    },
    //将第offset个(从0开始)及其之前的星赋值为填充状态
    activateStar:function(offset){
        var $star = $(".star");
        for(var i = 0; i <　5; i++){//一共只有5星
            var $current = $star.eq(i);
            if(i <= offset){
               !$current.hasClass("active") && $current.addClass("active");
            }else{
                $current.removeClass("active");
            }
        }
    },
    handleStar:function(){
        var _this = this;
        $(".star").tap(function(){
            var $this = $(this);
            var index = $this.index();
            _this.activateStar(index);
            //zepto不支持prevAll/nextAll
            //var $prev = $this;
            //while($prev.length){
            //    !$prev.hasClass("active") && $prev.addClass("active")
            //    $prev = $prev.prev();
            //}
            //var $next = $this.next();
            //while($next.length){
            //    $next.removeClass("active");
            //    $next = $next.next();
            //}
        });
    },
    //提交按钮
    'commit':function(){
        $("#submit").tap(function(){
            var len = $(".star.active").length;
            if(!len){
                alert("亲，请点亮小星星哦");
                return;
            }
            var value = $("#comment").val();
            if(!value.length){
                alert("请输入评价内容");
                return;
            }

            //todo:发送协议

        });
    }
}