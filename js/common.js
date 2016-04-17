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
};