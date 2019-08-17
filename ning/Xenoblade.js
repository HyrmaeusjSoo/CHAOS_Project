



    (()=>{
        let zuida = simulator(0.01, 'ss', 15, 999);
        console.log('zd:'+ zuida +' : '+ xfjs((1/zuida*100),'0'));
        let shishi = simulator(0.01, 'ss', 10, 240);
        console.log('ss:' + shishi +' : '+ xfjs((1/shishi*100),'0'));
        let xiyou = simulator(0.01, 'xy', 10, 240);
        console.log('xy:' + xiyou +' : '+ xfjs((1/xiyou*100),'0'));
        let putong = simulator(0.01, 'pt', 10, 240);
        console.log('pt:' + putong +' : '+ xfjs((1/putong*100),'0'));
        let zuixiao = simulator();
        console.log('zx:' + zuixiao +' : '+ xfjs((1/zuixiao*100),'0'));
    })();

    /**
     * monitiaoxieyiren - jisuanzonggailv
     */
    function simulator(yr,hx,xx,yq) {
        //let shitiao = zenogl(0.1, hxgl('pt'), xxgl(), yqgl());
        let shitiao = zenogl(yr,hx,xx,yq);
        return shitiao;
    }

    /**
     * tiaoxieyirenzonggailv
     * baifenzhigailv = yirenchushi * hexinjiacheng * xinxiangzhishu * yunqizhishu
     */
    function zenogl(yr,hx,xx,yq) {
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
    