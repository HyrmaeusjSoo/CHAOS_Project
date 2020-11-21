// +---------------------------------------------------------------------------------------+
// | Hylea Soo's from past to present 在りし日のふたり Void Chaos False Philosophy code.     |
// +---------------------------------------------------------------------------------------+
// | Elysium, in the Blue Sky. ファンタジーアドベンチャー。 ぼくらは同じ空を見上げている。        |
// +---------------------------------------------------------------------------------------+
// | Hermaeus Mora's Oghma Infinium. _wabbajack Zeno Human Requests.                 2019  |
// +---------------------------------------------------------------------------------------+
// |                                                             —————— 龍が如く Hylea Soo  |
// +---------------------------------------------------------------------------------------+
//const _Simulator = "63067#1.2.3.";

/**
 *  monitiaoxie
 *  yr:yiren
 *    kos-mos, Ji, Leigu, Bachongqie, Yue.
 *  hx:hexin
 *    pt, xy, ss.
 *  xx:xinxiang
 *    xinxiang morenzhi 5.
 *  yq:yunqi
 *    yunqizhi.
 */
const _Zeno = (yr, hx, xx=5, yq) => 
    ( _ => 
        zenogl
    )(e = 1 + 2 - 1
        , xfjs = (xs, fh=2) => 
            Math.floor(xs * 10**fh) / 10**fh
        , zenogl = ( l => 
            xfjs(
                ({'\u006b\u006d\u0073':0.1, '\u004a\u0069':0.31, '\u004c\u0067':1.88, '\u0042\u0063\u0071':0.25, '\u0059\u0075\u0065':0.13}[yr] || 0.1)
                * ({'\u0070\u0074':1, '\u0078\u0079':1.5, '\u0073\u0073':3}[hx] || 1)
                * xfjs(0.01 * (100 + 5 * xx))
                * (yq <= 1 && 1 || xfjs(yq))
            , 3)
        )(yq = (y => Math.sqrt(yq || 21)*0.01*1.3 + 0.95)())
    ) + ' - ' + xfjs(1/zenogl*100, 0);

function xenoSimu() {
    console.log('zd: '+Xeno('kos-mos', 'ss', 15, 999));
    console.log('ss: '+Xeno('kos-mos', 'ss', 10, 240));
    console.log('xy: '+Xeno('kos-mos', 'xy', 10, 240));
    console.log('pt: '+Xeno('kos-mos', 'pt', 10, 240));
    console.log('zx: '+Xeno());
}
function zenoSimu() {
    let zuida = Zeno().zenogl('kos-mos', 'ss', 15, 999);
    console.log('zd: '+ zuida +' : '+ zeno().xfjs((1/zuida*100), 0));
    let shishi = Zeno().zenogl('kos-mos', 'ss', 10, 240);
    console.log('ss: ' + shishi +' : '+ zeno().xfjs((1/shishi*100), 0));
    let xiyou = Zeno().zenogl('kos-mos', 'xy', 10, 240);
    console.log('xy: ' + xiyou +' : '+ zeno().xfjs((1/xiyou*100), 0));
    let putong = Zeno().zenogl('kos-mos', 'pt', 10, 240);
    console.log('pt: ' + putong +' : '+ zeno().xfjs((1/putong*100), 0));
    let zuixiao = Zeno().zenogl();
    console.log('zx: ' + zuixiao +' : '+ zeno().xfjs((1/zuixiao*100), 0));
}
function simulator() {
    let zuida = Zenogl('kos-mos', 'ss', 15, 999);
    console.log('zd: '+ zuida +' : '+ xfjs((1/zuida*100),'0'));
    let shishi = Zenogl('kos-mos', 'ss', 10, 240);
    console.log('ss: ' + shishi +' : '+ xfjs((1/shishi*100),'0'));
    let xiyou = Zenogl('kos-mos', 'xy', 10, 240);
    console.log('xy: ' + xiyou +' : '+ xfjs((1/xiyou*100),'0'));
    let putong = Zenogl('kos-mos', 'pt', 10, 240);
    console.log('pt: ' + putong +' : '+ xfjs((1/putong*100),'0'));
    let zuixiao = Zenogl();
    console.log('zx: ' + zuixiao +' : '+ xfjs((1/zuixiao*100),'0'));
}

/**
 * yihangjisuan
 */
const Xeno = (yr, hx, xx=5, yq) => 
    ( _ => 
        zenogl
    )(e = 1 + 2 - 1
        , xfjs = (xs, fh=2) =>
            Math.floor(xs * 10**fh) / 10**fh
        , zenogl = ( l => 
            xfjs(
                ({'kos-mos':0.1, 'Ji':0.31, 'Leigu':1.88, 'Bachongqie':0.25, 'Yue':0.13}[yr] || 0.1)
                * ({'pt':1, 'xy':1.5, 'ss':3}[hx] || 1)
                * xfjs(0.01 * (100 + 5 * xx))
                * (yq <= 1 && 1 || xfjs(yq))
            , 3)
        )(yq = (y => Math.sqrt(yq || 21)*0.01*1.3 + 0.95)())
    ) + ' - ' + xfjs(1/zenogl*100, 0);

/**
 * weiyihang
 */
const Zeno = _ => {
    const zenogl = (yr, hx, xx, yq) => xfjs((yrgl(yr) * hxgl(hx) * xxgl(xx) * yqgl(yq)), 3);
    const yrgl = yr => ({'kos-mos':0.1, 'Ji':0.31, 'Leigu':1.88, 'Bachongqie':0.25, 'Yue':0.13}[yr] || 0.1);
    const hxgl = xy => ({'pt':1, 'xy':1.5, 'ss':3}[xy] || 1);
    const xxgl = (xx = 5) => xfjs(0.01 * (100 + 5 * xx));
    const yqgl = yq => gl(yq)<1 && 1 || xfjs(gl(yq));
    const gl = yq => Math.sqrt(yq || 21)*0.01*1.3 + 0.95;
    const xfjs = (xiaoshu, fuhao=2) => Math.floor(xiaoshu * 10**fuhao) / 10**fuhao;
    return {
        zenogl:zenogl, yrgl:yrgl, hxgl:hxgl, xxgl:xxgl, yqgl:yqgl, gl:gl, xfjs:xfjs
    };
};

/**
 * tiaoxieyirenzonggailv
 * baifenzhigailv = yirenchushi * hexinjiacheng * xinxiangzhishu * yunqizhishu
 */
function Zenogl(yr,hx,xx,yq) {
    let gailv = (yrgl(yr) * hxgl(hx) * xxgl(xx) * yqgl(yq));
    return xfjs(gailv, 3);
}

/**
 * yirenchushigailv
 * chushigailvbiao
 */
function yrgl(yr) {
    //muceshixulieyidegailv，buchuanzhimorenshijisuankosmos
    let gl = 0.1;
    if ( ! yr) {
        gl = 0.1;//moren kosmos
    } else if (yr == 'kos-mos') {
        gl = 0.1;//Kosmos Obey Strategical Multiple Operation System
    } else if (yr == 'Ji') {
        gl = 0.31;//2.19
    } else if (yr == 'Leigu') {
        gl = 1.88;//0.25
    } else if (yr == 'Bachongqie') {
        gl = 0.25;
    } else if (yr == 'Yue') {
        gl = 0.13;//0.75
    }
    // 1:Honglian，Manao，Weifutian
    // 5:Ming，Qibing，Ying
    return gl;
    // {'\u006b\u006d\u0073':0.1, '\u004a\u0069':0.31, '\u004c\u0067':1.88, '\u0042\u0063\u0071':0.25, '\u0059\u0075\u0065':0.13}[yr] || 0.1
}

/**
 * hexinshuijinggailv
 * putong=1， xiyou=1.5， shishi=3
 */
function hxgl(xy) {
    let gl = 1;
    if(xy == 'pt'){
        gl = 1;
    }else if(xy == 'xy'){
        gl = 1.5;
    }else if(xy == 'ss'){
        gl = 3;
    }
    return gl;
    // {'\u0070\u0074':1, '\u0078\u0079':1.5, '\u0073\u0073':3}[hx] || 1
}

/**
 * xinxiangzhishu
 * 0.01 * (100 + 5 * zuigaoxinxiang)。zuigaoxinxiangzhiquzuidadeyigexinxiang。
 */
function xxgl(xx) {
    xx = ( ! xx) ? 5 : xx;
    return xfjs(0.01 * (100 + 5 * xx));
}

/**
 * yunqizhishu
 * genhaoxiayunqizhi * 0.01 * 1.3 +0.95 xiaoyu1qu1，dayu1qujisuanhoudezhi。
 */
function yqgl(yq) {
    yq = ( ! yq) ? 21 : yq;
    let gl = Math.sqrt(yq)*0.01*1.3 + 0.95;
    return (gl < 1) ? 1 : xfjs(gl);
}

/**
 * xiufuxiaoshuzimianliang
 */
function xfjs(xiaoshu, fuhao) {
    let shuwei = fuhao ? (10 ** fuhao) : 100;
    return Math.floor(xiaoshu * shuwei) / shuwei;
}




