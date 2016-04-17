$(function(){
    fillInfo.init();
});
var fillInfo = {
    init:function(){
        this.domEvent();
    }
    ,domEvent:function(){
        this.handleSection();
    }
    ,handleSection:function(){
        var $section = $("#selectedSection");
        //填充数据，如果已经有
        if(sessionStorage['cityName']){
            $section.text(sessionStorage['provinceName']+'-'+sessionStorage['cityName']);
        }
        $("#sectionWrapper").tap(function(){
            window.location.href = "fillInfo-address-province.html";
        })
    }
};