// +---------------------------------------------------------------------------------------+
// | Hylea Soo's from past to present 在りし日のふたり Void Chaos False Philosophy code.     |
// +---------------------------------------------------------------------------------------+
// | Elysium, in the Blue Sky. ファンタジーアドベンチャー。 ぼくらは同じ空を見上げている。        |
// +---------------------------------------------------------------------------------------+
// | Hermaeus Mora's Oghma Infinium. _wabbajack Zeno Human Requests.                 2020  |
// +---------------------------------------------------------------------------------------+
// | 彩                                                           —————— 龍が如く Hylea Soo  |
// +---------------------------------------------------------------------------------------+
//const _Simulator = "63067#1.2.3.";

const ACNH = ( _ => {

    const ftspm = {1: 'flower', 2: 'tree', 3: 'shrub', 4:'pumpkin', 5:'meteor'};
    const TotalFlower = ac => fst(ac, ftspm[1]);
    const TotalTree = ac => tpc(ac, ftspm[2]);
    const TotalShrub = ac => fst(ac, ftspm[3]);
    const TotalPumpkin = ac => tpc(ac, t[4]);
    const FlowerBreed = (ac, a) => fsb(ac, a, ftspm[1]);

    const fst = (ac, n) => Object.keys(ac[n]).reduce((c, x) => c + fsc(ac[n][x]), 0);
    const fsc = ac => ac.reduce((d, y) => d + y.qty, 0);
    const fsb = (ac, a, n) => Object.keys(ac[n]).map(x => a.push({k: x, v: fsc(ac.flower[x])}));
    const tpc = (ac, n) => ac[n].reduce((c, x) => c + x.qty, 0);

    return {TotalFlower, TotalTree, TotalShrub, TotalPumpkin, FlowerBreed};

})();




