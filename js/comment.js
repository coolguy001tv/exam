/**
 * Created by CoolGuy on 2016/4/19.
 */
$(function(){
    comment.init()
});
var comment = {
    init:function(){
       this.domEvent();
    },
    domEvent:function(){
        this.handleStar();//处理星星
    },
    handleStar:function(){
        $(".star").tap(function(){
            var $this = $(this);
            var index = $this.index();//当前是第几个元素，从0开始

            //zepto不支持prevAll/nextAll
            var $prev = $this;
            while($prev.length){
                !$prev.hasClass("active") && $prev.addClass("active")
                $prev = $prev.prev();
            }
            var $next = $this.next();
            while($next.length){
                $next.removeClass("active");
                $next = $next.next();
            }
        });
    }
}