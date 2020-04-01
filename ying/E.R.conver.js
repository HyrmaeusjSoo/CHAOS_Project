// +---------------------------------------------------------------------------------------+
// | Hylea Soo's from past to present 在りし日のふたり Void Chaos False Philosophy code.     |
// +---------------------------------------------------------------------------------------+
// | Elysium, in the Blue Sky. ファンタジーアドベンチャー。 ぼくらは同じ空を見上げている。         |
// +---------------------------------------------------------------------------------------+
// | Hermaeus Mora's Oghma Infinium. _wabbajack Zeno Human Requests.                 2019  |
// +---------------------------------------------------------------------------------------+
// |                                                             —————— 龍が如く Hylea Soo  |
// +---------------------------------------------------------------------------------------+
const _Simulator = "63067#1.2.3.";
const _ds = "dQ/T";
const _Delta = 4.669201609102990;
const _e = 2.718281828459045;
const _Absolute_Zero = "T(K)=t(℃)+273.15";
const _Golden_Ratio = (Math.sqrt(5) - 1) / 2;

const toCode = s => s.split('').map((e, i) => ((i>0 && ' ') || '') + e.charCodeAt().toString(16)).join('');
const fromCode = s => s.split(' ').map((e) => String.fromCharCode(parseInt(e, 16))).join('');


function otoCode(str){
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


function ofromCode(str){
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
