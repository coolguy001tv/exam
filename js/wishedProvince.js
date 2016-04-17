/**
 * Created by CoolGuy on 2016/4/17.
 */
$(function(){
    wishedProvince.init();
});
var wishedProvince = {
    url:{
        fillInfo:"fillInfo.html"
    },
    init:function(){
        this.domEvent()
    }
    ,domEvent:function(){
        this.handleProvince();
    }
    ,fillRow:function(addressList,sectionId){
        var _this = this;
        var len = addressList.length;
        if(!len){
            console.error("AddressList error");
            return;
        }
        var html = template(sectionId+'ListModule',{list:addressList});
        $("#"+sectionId).html(html);
    }
    ,handleProvince:function(){
        var _this = this;
        this.fillRow(chinaLocation.data,"province");//用省份填充数据
        $(document).on("tap","#province .common_row",function(){
            var code = $(this).attr("code");
            sessionStorage['wishedProvinceCode'] = code;
            sessionStorage['wishedProvinceName'] = $(this).find(".name").text();
            window.location.href = _this.url.fillInfo;
        })
    }
}