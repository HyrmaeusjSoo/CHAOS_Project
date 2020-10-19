// +---------------------------------------------------------------------------------------+
// | Hylea Soo's from past to present 在りし日のふたり Void Chaos False Philosophy code.     |
// +---------------------------------------------------------------------------------------+
// | Elysium, in the Blue Sky. ファンタジーアドベンチャー。 ぼくらは同じ空を見上げている。        |
// +---------------------------------------------------------------------------------------+
// | Hermaeus Mora's Oghma Infinium. _wabbajack Zeno Human Requests.                 2020  |
// +---------------------------------------------------------------------------------------+
// |                                                             —————— 龍が如く Hylea Soo  |
// +---------------------------------------------------------------------------------------+

const ACNH = (_ => {
    const TotalFlower = sf => fsc(sf, 'flower');
    const TotalTree = sf => tpc(sf, 'tree');
    const TotalShrub = sf => fsc(sf, 'shrub');
    const TotalPumpkin = sf => tpc(sf, 'pumpkin');
    const fsc = (sf, n) => Object.keys(sf[n]).reduce((c, x) => c + cfc(sf[n][x]), 0);
    const cfc = sf => sf.reduce((d, y) => d + y.qty, 0);
    const tpc = (sf, n) => sf[n].reduce((c, x) => c + x.qty, 0);

    return {TotalFlower, TotalTree, TotalShrub, TotalPumpkin};
})();




