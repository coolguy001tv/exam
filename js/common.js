/**
 * Created by CoolGuy on 2016/4/17.
 */
var commonFunc = {
    //获取queryString
    //comment added by DingLi:
    //该方法存在BUG，当查询的子串中的键有包含关系时将可能出错
    //比如getQueryString("tname=dd&name=ff","name")将匹配到前面的字符串结果，即dd,实际上需要ff
    //使用者请自行留意
    getQueryString : function(url, name) { //获取url中"?"符后的字串
        var urlString = url;
        if(urlString != null) {
            var typeQu = name+"=";
            var urlEnd = urlString.indexOf(typeQu);
            if(urlEnd != -1) {
                var paramsUrl = urlString.substring(urlEnd+typeQu.length);
                var isEnd =  paramsUrl.indexOf('&');
                if(isEnd != -1) {
                    return paramsUrl.substring(0, isEnd);
                }else{
                    return paramsUrl;
                }
            }else {
                return null;
            }
        } else{
            return null;
        }
    }
    ,valid:{
        commonReg : {
            email : /^([a-zA-Z0-9]+[_|\_|\.|-]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
            number : /^\d+$/,
            phone : /^0{0,1}(13[^4]|15[^4]|14[57]|17[0-9]|18[0-9])[0-9]{8}$|134[0-8][0-9]{7}$/,
            code :  /^[0-9]{4}$/,
            pass :/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
            verify : /^[0-9]{6}$/,
            name : /^[\u4E00-\u9FA5]{2,5}$/,
            identify : /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/,
            bankCard : /^[0-9]{16,21}$/,
            question : /^[A-Za-z0-9\u4e00-\u9fa5]{1,16}$/,
            cvvCode : /^[0-9]{3,4}$/,
            validTime : /^[1-9]\d{3}((0\d)|(1[0-2]))$/,
            safe : /[~#$￥ˇ<>（）\s\?\*\&\\\|\/\[\]\{\}\\^%]/,
            payAmount : /^(0(?:[.](?:[1-9]\d?|0[1-9]))|[1-9]\d{0,8}(?:[.]\d{1,2}|$))$/
        },
        check : function(val, reg) {
            return this.commonReg[reg].test(val);
        }
    }
};