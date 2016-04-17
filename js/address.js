/**
 * Created by CoolGuy on 2016/4/17.
 */
$(function(){
    address.init();
});

var address = {
    fillCityUrl:'fillInfo-address-city.html',
    fillInfoUrl:'fillInfo.html',
    init:function(){
        this.domEvent();

    },
    domEvent:function(){
        var _this = this;
        //可滚动区域高度
        $(".jsonList").height($(window).height()-$("#selected").height());
        //是否是城市,目前 的判断标准是是否有code（省级的code），如果后面有区的选择请注意修改
        var code;
        if(code = commonFunc.getQueryString(window.location.href,'code')){
            this.handleCity(code)
        }else{//否则是省份
            _this.handleProvince();
        }
    }
    ,getProvinceObj:function(code){
        var loc = chinaLocation.data;
        var len = loc.length;
        for(var i = 0; i < len; i++){
            if(loc[i].code == code){
                return loc[i];
            }
        }
        return null;
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
        if(sessionStorage['cityName']){
            $("#selectedValue").text(sessionStorage['provinceName']+'-'+sessionStorage['cityName']);
        }

        //点击后跳转到城市页面
        $(document).on("tap","#province .common_row",function(){
            var code = $(this).attr("code");
            //var name = $(this).find(".name").text();
            window.location.href = _this.fillCityUrl+"?code="+code;
        })
    }
    ,handleCity:function(code){
        var _this =this;
        var province = this.getProvinceObj(code);
        $("#selectedValue").text(province.name);
        $("title").text(province.name);
        if(!province){
            console.error("找不到当前省",province);
        }
        this.fillRow(province.cities,"city");
        //填写当前的省市名字
        $(document).on("tap","#city .common_row",function(){
            var cityCode = $(this).attr("code");
            //保存当前所有的信息到sessionStorage中
            sessionStorage['provinceCode'] = code;
            sessionStorage['cityCode'] = cityCode;
            sessionStorage['provinceName'] = province.name;
            sessionStorage['cityName'] = $(this).find(".name").text();
            window.location.href = _this.fillInfoUrl;
        });
    }

};
