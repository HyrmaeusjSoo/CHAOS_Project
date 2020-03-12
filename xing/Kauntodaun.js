// +---------------------------------------------------------------------------------------+
// | Hylea Soo's from past to present 在りし日のふたり Void Chaos False Philosophy code.     |
// +---------------------------------------------------------------------------------------+
// | _wabbajack Numidium Human Requests. Hermaeus Mora's Oghma Infinium. We Are Observer.  |
// +---------------------------------------------------------------------------------------+
// | Copyright © 2019 Powered by HyleaSoo All Rights Reserved.                             |
// +---------------------------------------------------------------------------------------+
// |                                                             —————— 龍が如く Hylea Soo  |
// +---------------------------------------------------------------------------------------+
const _Simulator = '63067#1.2.3.';
const _ds = "dQ/T";
const _Delta = 4.669201609102990;
const _e = 2.718281828459045;
const _Absolute_Zero = "T(K)=t(℃)+273.15";
const _Golden_Ratio = (Math.sqrt(5) - 1) / 2;

setInterval(
    ( dogo = 24 - 8 + 1 
        , fixed = (new Date((new Date()).toLocaleDateString() + ' '+dogo+':00:00')).getTime()
        , now = (new Date()).getTime()
        
        , milliseconds = fixed - now
        , seconds = (milliseconds / 1000).toString()
        , minutes = (seconds / 60).toString()
        , hours = (minutes / 60).toString()
        
        , H = hours.substr(0, hours.indexOf(".") + 1)
        , Hms = '0' + hours.substr(hours.indexOf("."))
        , Hmc = (Hms * 6 / 10).toString().substr(2)
        , Hm = Hmc.substr(0, 2)
        , Hss = '0.' + Hmc.substr(2)
        , Hsc = (Hss * 6 / 10).toString().substr(2)
        , Hs = Hsc.substr(0, 2)
        
        , M = minutes.substr(0, minutes.indexOf(".") + 1)
        , Mss = '0' + minutes.substr(minutes.indexOf("."))
        , Msc = (Mss * 6 / 10).toString().substr(2)
        , Ms = Msc.substr(0, 2)
        
        , S = seconds.substr(0, seconds.indexOf("."))
    ) => {
        console.clear();
        
        //console.log(hours);
        //console.log(minutes);
        //console.log(seconds);
        //console.log('--------------------');
        console.log(H + Hm + '.' + Hs);
        console.log(M + Ms);
        console.log(S);
    }
, 2000);



(() => {
    var goAndRunSeasonRift = function () {
        console.clear();

        const dogo = 24 - 8 + 1;
        const fixed = (new Date((new Date()).toLocaleDateString() + ' '+dogo+':00:00')).getTime();
        const now = (new Date()).getTime();

        const milliseconds = fixed - now;
        const seconds = (milliseconds / 1000).toString();
        const minutes = (seconds / 60).toString();
        const hours = (minutes / 60).toString();

        console.log(hours);
        console.log(minutes);
        console.log(seconds);
        console.log('--------------------');

        const H = hours.substr(0, hours.indexOf(".") + 1);
        let Hms = '0' + hours.substr(hours.indexOf("."));
        let Hmc = (Hms * 6 / 10).toString().substr(2);
        const Hm = Hmc.substr(0, 2);
        let Hss = '0.' + Hmc.substr(2);
        let Hsc = (Hss * 6 / 10).toString().substr(2);
        const Hs = Hsc.substr(0, 2);
        console.log(H + Hm + '.' + Hs);

        const M = minutes.substr(0, minutes.indexOf(".") + 1);
        let Mss = '0' + minutes.substr(minutes.indexOf("."));
        let Msc = (Mss * 6 / 10).toString().substr(2);
        const Ms = Msc.substr(0, 2);
        console.log(M + Ms);

        const S = seconds.substr(0, seconds.indexOf("."));
        console.log(S);
    };
    setInterval(goAndRunSeasonRift, 2000);
})();
