$(function(){
    fillInfo.init();
});
var fillInfo = {
    url:{
        "fillAddress":  "fillInfo-address-province.html"//填写地址信息
        ,"fillType":"fillInfo-type.html"//考试类型
        ,"fillWishedProvince":"fillInfo-wishedProvince.html"//期望省份
        ,"fillMajor":"fillInfo-major-1.html"//意向专业（注意所有专业都指向同一个html，用参数区分）
        ,"fillConfirm":"fillInfo-confirm.html"//确认订单页面
    },
    init:function(){
        this.domEvent();
    }
    ,domEvent:function(){
        this.handleSection();
        this.handleType();
        this.handleProvince();
        this.handleMajor();
        this.handleConfirm();
    }
    ,handleSection:function(){
        var _this = this;
        //填充数据，如果已经有
        if(sessionStorage['cityName']){
            $("#selectedSection").text(sessionStorage['provinceName']+'-'+sessionStorage['cityName']).addClass("active");
        }
        $("#sectionWrapper").tap(function(){
            window.location.href = _this.url.fillAddress;
        })
    }
    //考试类型的处理
    ,handleType:function(){
        var _this = this;
        $("#typeWrapper").tap(function(){
            window.location.href = _this.url.fillType;
        });
    }
    //期望省份
    ,handleProvince:function(){
        var _this = this;
        if(sessionStorage['wishedProvinceCode']){
            $("#wishedProvince").text(sessionStorage['wishedProvinceName']).addClass("active");
        }
        $("#wishedProvinceWrapper").tap(function(){
            window.location.href = _this.url.fillWishedProvince;
        })

    }
    //意向专业
    ,handleMajor:function(){
        var _this = this;
        var jump = function(type){
            window.location.href = _this.url.fillMajor+"?type="+type;
        };
        $("#wishedMajorWrapper1").tap(function(){
            jump(1);
        });
        $("#wishedMajorWrapper2").tap(function(){
            jump(2);
        });
        $("#wishedMajorWrapper3").tap(function(){
            jump(3);
        });
    }
    ,handleConfirm:function(){
        var _this = this;
        $("#next").tap(function(){
            //确认相关的保存数据后跳转
            var checked = _this.checkData();
            if(checked.success){
                window.location.href = _this.url.fillConfirm;
            }else{
                alert(checked.msg);
            }

        });
    }
    ,checkData:function(){
        return {
            success:true
        };
    }
};