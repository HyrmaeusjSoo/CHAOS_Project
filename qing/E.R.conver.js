/* 它他妈只能转个字符串，不能转带换行的文本 */

//将字符串转换成二进制形式，中间用空格隔开
function er(str){
    var result = [];
    var list = str.split("");
    for(var i=0;i<list.length;i++){
        if(i != 0){
            result.push(" ");
        }
        var item = list[i];
        var binaryStr = item.charCodeAt().toString(2);
        result.push(binaryStr);
    }
    return result.join("");
}

//将二进制字符串转换成Unicode字符串
function zi(str){
    var result = [];
    var list = str.split(" ");
    for(var i=0;i<list.length;i++){
         var item = list[i];
         var asciiCode = parseInt(item,2);
         var charValue = String.fromCharCode(asciiCode);
         result.push(charValue);
    }
    return result.join("");
}

//console.log(strToBinary("什么鬼")); //100111011000000 100111001001000 1001101100111100
//console.log(binaryToStr("100111011000000 100111001001000 1001101100111100")); //什么鬼