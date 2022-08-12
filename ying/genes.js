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

let gcb = (t, s) => {
    const zl = {
        '00': ["00", "00", "00", "00"],
        '01': ["00", "00", "01", "01"], '10': ["00", "00", "01", "01"],
        '02': ["01", "01", "01", "01"], '20': ["01", "01", "01", "01"],
        '11': ["00", "01", "01", "11"],
        '12': ["01", "01", "11", "11"], '21': ["01", "01", "11", "11"],
        '22': ["11", "11", "11", "11"]
    };
    const z = {
        '00': ["0", "0", "0", "0"],
        '01': ["0", "0", "1", "1"], '10': ["0", "0", "1", "1"],
        '02': ["1", "1", "1", "1"], '20': ["1", "1", "1", "1"],
        '11': ["0", "1", "1", "2"],
        '12': ["1", "1", "2", "2"], '21': ["1", "1", "2", "2"],
        '22': ["2", "2", "2", "2"]
    };
    const n = [...t].map((x, i) => x + s[i]).map(x => z[x] || '');
    const r = J => J.reduce((x, i) => x.flatMap(y => i.map(z => `${y}${z}`)));
    let g = {};
    r(n).map(x => g.hasOwnProperty(x) ? g[x]++ : g[x]=1);
    let total = Object.values(g).reduce((c, x)=> c+x);
    Object.keys(g).map((x) => g[x]/=total);

    return g;
}
const gc = {'0': '00', '1': '01', '2': '11'};
let ab = (g = gcb('012', '111'), ne = {}) => { return Object.keys(g).map(x => ne[([...x].reduce((c, y) => c + (gc[y]), ''))] = g[x] * 100), ne};

// ch("000111",2)  =>  [0, 1, 2]
let ch = (a, s) => (Array.from({length: Math.ceil(a.length/s)}, (x, i) => parseInt(a[i*s]) + parseInt(a[i*s+1]))).join('');


// 011 =  [0,1,2]  [["0", "0", "0", "0"],["0", "1", "1", "2"],["2", "2", "1", "2"]]
let e = (m, n) => m.reduce(((x, t, s) => "" + x + n[s][t]), "");
const bn = {
    "000": 4, "001": 2, "010": 2, "011": 1, "101": 2, "110": 2, "102": 4,
    "120": 4, "111": 2, "112": 2, "121": 2, "211": 1, "212": 2, "221": 2, "222": 4
};
let t11 = (e, r, t) => bn[e + r + t] || 1;


function gcb1(t, s) {
    const z = {
        '00': ["0", "0", "0", "0"],
        '01': ["0", "0", "1", "1"], '10': ["0", "0", "1", "1"],
        '02': ["1", "1", "1", "1"], '20': ["1", "1", "1", "1"],
        '11': ["0", "1", "1", "2"],
        '12': ["1", "1", "2", "2"], '21': ["1", "1", "2", "2"],
        '22': ["2", "2", "2", "2"]
    };
    const n = (([...t].map((x, i) => x + s[i])).map(x => x)).map(x => z[x] || '');
    let a = [], c = new Array(n.length);
    c.fill(0);
    // 011 =  [0,1,2]  [["0", "0", "0", "0"],["0", "1", "1", "2"],["2", "2", "1", "2"]]
    let e = (m, n) => m.reduce(((x, t, s) => "" + x + n[s][t]), "");
    let u = e(c, n);
    
    n.reduce(
        ((c, x, i) => c + (x.reduce((a, y, j) => a + y + 'c', '')) + ' - ')
        , ''
    );


    // [0,0,0]  [["0", "0", "0", "0"], ["0", "1", "1", "2"], ["2", "2", "1", "2"]]
    let r = (e, r) => {
        for (let t = 0; t < e.length; t++) {
            let s = r[t].length - 1;
            if (e[t] + 1 <= s) return e[t]++, true;
            if (t + 1 > s) return false;
            e[t] = 0;
        }
    }
    // true c++;
    for (a.push(u); r(c, n);)
        u = e(c, n), a.push(u);
    //["001", "001", "002", "002", "011", "011", "012", "012", "011", "011", "012", "012", "021", "021", "022", "022", "001", "001", "002", "002", "011", "011", "012", "012", "011", "011", "012", "012", "021", "021", "022", "022", "101", "101", "102", "102", "111", "111", "112", "112", "111", "111", "112", "112", "121", "121", "122", "122", "101", "101", "102", "102", "111", "111", "112", "112", "111", "111", "112", "112", "121", "121", "122", "122"]
    let l = {};
    a.map(x => l.hasOwnProperty(x) ? l[x]++ : l[x]=1);

    return l;
}
/*====================================*/
this.backward = function (s) {
    const bz = { '0': ["00", "01", "10", "11"], '1': ["01", "10", "02", "20", "11", "12", "21"], '2': ["11", "12", "21", "22"] };
    const n = [...s].map(x => bz[x]);
    const e = (m, n) => m.reduce(((x, t, s) => "" + x + n[s][t]), "");
    const bn = {
        "000": 4, "001": 2, "010": 2, "011": 1, "101": 2, "110": 2, "102": 4,
        "120": 4, "111": 2, "112": 2, "121": 2, "211": 1, "212": 2, "221": 2, "222": 4
    };
    const t = (e, r, t) => bn[e + r + t] || 1;
    const r = J => J.reduce((x, i) => x.flatMap(y => i.map(z => `${y}${z}`)));

    let a = [], c = new Array(n.length);
    c.fill(0);
    let u = e(c, n);
    for (a.push(u); r(c, n);)
        u = e(c, n), a.push(u);
    let l = {};
    for (let e = 0; e < a.length; ++e) {
        let r = "", n = "", c = 1;
        for (let u = 0, l = 0; u < a[e].length; u += 2, ++l)
            r += a[e][u], n += a[e][u + 1], c *= t(s[l], a[e][u], a[e][u + 1]);
        let u = r + "-" + n, h = n + "-" + r;
        l.hasOwnProperty(u) || l.hasOwnProperty(h) || (l[u] = c)
    }

    /*r(n)
    let l = {};
    r(n).map(x => {
        //g.hasOwnProperty(x) ? g[x]++ : g[x] = 1;
        let r = "", n = "", c = 1;
        for (let u = 0, l = 0; u < a[e].length; u += 2, ++l)
            r += a[e][u], n += a[e][u + 1], c *= t(s[l], a[e][u], a[e][u + 1]);
        let u = r + "-" + n, h = n + "-" + r;
        l.hasOwnProperty(u) || l.hasOwnProperty(h) || (l[u] = c)
    });*/
    return l;
};



const dur = 0.5;
const spinI = 4;
const spinDur = 0.1;
const colorA = '#99f';
const colorB = '#f99';
const random01 = () => {
  return Math.random() > 0.5 ? 0 : 1;;
}
const parentOptions = [
  [
    {genes: '01 01 01 00', name: '01 01 01 00 red'},
    {genes: '01 01 01 00', name: '01 01 01 00 red'}
  ],
  [
    {genes: '11 00 00 01', name: 'Seed Red'},
    {genes: '11 00 00 01', name: 'Seed Red'}
  ],
  [
    {genes: '00 11 00 00', name: 'Seed Yellow'},
    {genes: '00 00 01 00', name: 'Seed White'}
  ],
  [
    {genes: '11 11 01 01', name: 'Island Tours Orange'},
    {genes: '11 11 01 01', name: 'Island Tours Orange'}
  ]
];
const FlowerCrosser = () => {
  const [species, setSpecies] = useState(FlowerNames.rose);

  const [parents, setParents] = useState(parentOptions[0]);
  const geneA = parents[0].genes;
  const geneB = parents[1].genes;

  const [choiceA, setChoiceA] = useState([-1, -1, -1, -1]);
  const [choiceB, setChoiceB] = useState([-1, -1, -1, -1]);

  const isCrossed = choiceA.indexOf(-1) === -1 && choiceB.indexOf(-1) === -1;

  const crossFlowers = () => {
    setChoiceA(choiceA.map(random01));
    setChoiceB(choiceB.map(random01));
  };

  const geneC = ['00', '00', '00', '00'].map((output, i) => {
    if (choiceA[i] === -1 || choiceB[i] === -1) {
      return output;
    }
    const result = geneA.split(' ')[i][choiceA[i]] + geneB.split(' ')[i][choiceB[i]];
    return result === '10' ? '01' : result;
  }).join(' ');

  const kbShortcuts = (e= React.KeyboardEvent(HTMLButtonElement)) => {
    if (e.which >= 49 && e.which <= 53) {
      setChoiceA([-1, -1, -1, -1]);
      setChoiceB([-1, -1, -1, -1]);
      setSpecies(FlowerNames.rose);
      setParents(parentOptions[e.which - 49]);
    }
  };
  return null;
};



const getRandomSpecies = () => {
  return [
    FlowerNames.rose,
    FlowerNames.hyacinth,
    FlowerNames.tulip,
    FlowerNames.windflower,
    FlowerNames.cosmos,
    FlowerNames.pansy,
    FlowerNames.mum,
    FlowerNames.lily,
  ][Math.floor(Math.random() * 8)];
};

const getRandomGenes = () => {
  return [1, 1, 1, 1].map(p => {
    const roll = Math.random();
    if (roll > 0.667) {
      return '00';
    }
    if (roll > 0.333) {
      return '01';
    }
    return '11';
  }).join(' ');
};




const FlowerNames = {
    rose: "rose", 
    cosmos: "cosmos",
    lily: "lily",
    pansy: "pansy",
    hyacinth: "hyacinth",
    tulip: "tulip",
    mum: "mum",
    windflower: "windflower",
}

const SeedGenes = {
    [FlowerNames.windflower]: {
        "white": "01 00 00 01",
        "orange": "00 00 11 00",
        "red": "00 11 00 00",
    },
    [FlowerNames.mum]: {
        "white": "01 00 00 01",
        "yellow": "00 00 11 00",
        "red": "00 11 00 00",
    },
    [FlowerNames.tulip]: {
        "white": "01 00 00 01",
        "yellow": "00 00 11 00",
        "red": "01 11 00 01",
    },
    [FlowerNames.hyacinth]: {
        "white": "01 00 00 01",
        "yellow": "00 00 11 00",
        "red": "01 11 00 01",
    },
    [FlowerNames.pansy]: {
        "white": "01 00 00 01",
        "yellow": "00 00 11 00",
        "red": "00 11 00 00",
    },
    [FlowerNames.lily]: {
        "white": "11 00 00 11",
        "yellow": "00 00 11 00",
        "red": "01 11 00 01",
    },
    [FlowerNames.cosmos]: {
        "white": "01 00 00 01",
        "yellow": "01 00 11 01",
        "red": "00 11 00 00",
    },
    [FlowerNames.rose]: {
        "white": "00 00 01 00",
        "yellow": "00 11 00 00",
        "red": "11 00 00 01",
    },
}

const Genes = {
  [FlowerNames.windflower]: {
    "00 00 00": "white",
    "00 00 01": "white",
    "00 00 11": "blue",
    "00 01 00": "orange",
    "00 01 01": "orange",
    "00 01 11": "blue",
    "00 11 00": "orange",
    "00 11 01": "orange",
    "00 11 11": "orange",
    "01 00 00": "red",
    "01 00 01": "red",
    "01 00 11": "blue",
    "01 01 00": "pink",
    "01 01 01": "pink",
    "01 01 11": "pink",
    "01 11 00": "orange",
    "01 11 01": "orange",
    "01 11 11": "orange",
    "11 00 00": "red",
    "11 00 01": "red",
    "11 00 11": "purple",
    "11 01 00": "red",
    "11 01 01": "red",
    "11 01 11": "purple",
    "11 11 00": "pink",
    "11 11 01": "pink",
    "11 11 11": "purple",
  },
  [FlowerNames.mum]: {
    "00 00 00": "white",
    "00 00 01": "white",
    "00 00 11": "purple",
    "00 01 00": "yellow",
    "00 01 01": "yellow",
    "00 01 11": "white",
    "00 11 00": "yellow",
    "00 11 01": "yellow",
    "00 11 11": "yellow",
    "01 00 00": "pink",
    "01 00 01": "pink",
    "01 00 11": "pink",
    "01 01 00": "yellow",
    "01 01 01": "red",
    "01 01 11": "pink",
    "01 11 00": "purple",
    "01 11 01": "purple",
    "01 11 11": "purple",
    "11 00 00": "red",
    "11 00 01": "red",
    "11 00 11": "red",
    "11 01 00": "purple",
    "11 01 01": "purple",
    "11 01 11": "red",
    "11 11 00": "green",
    "11 11 01": "green",
    "11 11 11": "red",
  },
  [FlowerNames.tulip]: {
    "00 00 00": "white",
    "00 00 01": "white",
    "00 00 11": "white",
    "00 01 00": "yellow",
    "00 01 01": "yellow",
    "00 01 11": "white",
    "00 11 00": "yellow",
    "00 11 01": "yellow",
    "00 11 11": "yellow",
    "01 00 00": "red",
    "01 00 01": "pink",
    "01 00 11": "white",
    "01 01 00": "orange",
    "01 01 01": "yellow",
    "01 01 11": "yellow",
    "01 11 00": "orange",
    "01 11 01": "yellow",
    "01 11 11": "yellow",
    "11 00 00": "black",
    "11 00 01": "red",
    "11 00 11": "red",
    "11 01 00": "black",
    "11 01 01": "red",
    "11 01 11": "red",
    "11 11 00": "purple",
    "11 11 01": "purple",
    "11 11 11": "purple",
  },
  [FlowerNames.hyacinth]: {
    "00 00 00": "white",
    "00 00 01": "white",
    "00 00 11": "blue",
    "00 01 00": "yellow",
    "00 01 01": "yellow",
    "00 01 11": "white",
    "00 11 00": "yellow",
    "00 11 01": "yellow",
    "00 11 11": "yellow",
    "01 00 00": "red",
    "01 00 01": "pink",
    "01 00 11": "white",
    "01 01 00": "orange",
    "01 01 01": "yellow",
    "01 01 11": "yellow",
    "01 11 00": "orange",
    "01 11 01": "yellow",
    "01 11 11": "yellow",
    "11 00 00": "red",
    "11 00 01": "red",
    "11 00 11": "red",
    "11 01 00": "blue",
    "11 01 01": "red",
    "11 01 11": "red",
    "11 11 00": "purple",
    "11 11 01": "purple",
    "11 11 11": "purple",
  },
  [FlowerNames.pansy]: {
    "00 00 00": "white",
    "00 00 01": "white",
    "00 00 11": "blue",
    "00 01 00": "yellow",
    "00 01 01": "yellow",
    "00 01 11": "blue",
    "00 11 00": "yellow",
    "00 11 01": "yellow",
    "00 11 11": "yellow",
    "01 00 00": "red",
    "01 00 01": "red",
    "01 00 11": "blue",
    "01 01 00": "orange",
    "01 01 01": "orange",
    "01 01 11": "orange",
    "01 11 00": "yellow",
    "01 11 01": "yellow",
    "01 11 11": "yellow",
    "11 00 00": "red",
    "11 00 01": "red",
    "11 00 11": "purple",
    "11 01 00": "red",
    "11 01 01": "red",
    "11 01 11": "purple",
    "11 11 00": "orange",
    "11 11 01": "orange",
    "11 11 11": "purple",
  },
  [FlowerNames.lily]: {
    "00 00 00": "white",
    "00 00 01": "white",
    "00 00 11": "white",
    "00 01 00": "yellow",
    "00 01 01": "white",
    "00 01 11": "white",
    "00 11 00": "yellow",
    "00 11 01": "yellow",
    "00 11 11": "white",
    "01 00 00": "red",
    "01 00 01": "pink",
    "01 00 11": "white",
    "01 01 00": "orange",
    "01 01 01": "yellow",
    "01 01 11": "yellow",
    "01 11 00": "orange",
    "01 11 01": "yellow",
    "01 11 11": "yellow",
    "11 00 00": "black",
    "11 00 01": "red",
    "11 00 11": "pink",
    "11 01 00": "black",
    "11 01 01": "red",
    "11 01 11": "pink",
    "11 11 00": "orange",
    "11 11 01": "orange",
    "11 11 11": "white",
  },
  [FlowerNames.cosmos]: {
    "00 00 00": "white",
    "00 00 01": "white",
    "00 00 11": "white",
    "00 01 00": "yellow",
    "00 01 01": "yellow",
    "00 01 11": "white",
    "00 11 00": "yellow",
    "00 11 01": "yellow",
    "00 11 11": "yellow",
    "01 00 00": "pink",
    "01 00 01": "pink",
    "01 00 11": "pink",
    "01 01 00": "orange",
    "01 01 01": "orange",
    "01 01 11": "pink",
    "01 11 00": "orange",
    "01 11 01": "orange",
    "01 11 11": "orange",
    "11 00 00": "red",
    "11 00 01": "red",
    "11 00 11": "red",
    "11 01 00": "orange",
    "11 01 01": "orange",
    "11 01 11": "red",
    "11 11 00": "black",
    "11 11 01": "black",
    "11 11 11": "red",
  },
  [FlowerNames.rose]: {
    "00 00 00 00": "white",
    "00 00 00 01": "white",
    "00 00 00 11": "white",
    "00 00 01 00": "white",
    "00 00 01 01": "white",
    "00 00 01 11": "white",
    "00 00 11 00": "purple",
    "00 00 11 01": "purple",
    "00 00 11 11": "purple",
    "00 01 00 00": "yellow",
    "00 01 00 01": "yellow",
    "00 01 00 11": "yellow",
    "00 01 01 00": "white",
    "00 01 01 01": "white",
    "00 01 01 11": "white",
    "00 01 11 00": "purple",
    "00 01 11 01": "purple",
    "00 01 11 11": "purple",
    "00 11 00 00": "yellow",
    "00 11 00 01": "yellow",
    "00 11 00 11": "yellow",
    "00 11 01 00": "yellow",
    "00 11 01 01": "yellow",
    "00 11 01 11": "yellow",
    "00 11 11 00": "white",
    "00 11 11 01": "white",
    "00 11 11 11": "white",
    "01 00 00 00": "red",
    "01 00 00 01": "pink",
    "01 00 00 11": "white",
    "01 00 01 00": "red",
    "01 00 01 01": "pink",
    "01 00 01 11": "white",
    "01 00 11 00": "red",
    "01 00 11 01": "pink",
    "01 00 11 11": "purple",
    "01 01 00 00": "orange",
    "01 01 00 01": "yellow",
    "01 01 00 11": "yellow",
    "01 01 01 00": "red",
    "01 01 01 01": "pink",
    "01 01 01 11": "white",
    "01 01 11 00": "red",
    "01 01 11 01": "pink",
    "01 01 11 11": "purple",
    "01 11 00 00": "orange",
    "01 11 00 01": "yellow",
    "01 11 00 11": "yellow",
    "01 11 01 00": "orange",
    "01 11 01 01": "yellow",
    "01 11 01 11": "yellow",
    "01 11 11 00": "red",
    "01 11 11 01": "pink",
    "01 11 11 11": "white",
    "11 00 00 00": "black",
    "11 00 00 01": "red",
    "11 00 00 11": "pink",
    "11 00 01 00": "black",
    "11 00 01 01": "red",
    "11 00 01 11": "pink",
    "11 00 11 00": "black",
    "11 00 11 01": "red",
    "11 00 11 11": "pink",
    "11 01 00 00": "orange",
    "11 01 00 01": "orange",
    "11 01 00 11": "yellow",
    "11 01 01 00": "red",
    "11 01 01 01": "red",
    "11 01 01 11": "white",
    "11 01 11 00": "black",
    "11 01 11 01": "red",
    "11 01 11 11": "purple",
    "11 11 00 00": "orange",
    "11 11 00 01": "orange",
    "11 11 00 11": "yellow",
    "11 11 01 00": "orange",
    "11 11 01 01": "orange",
    "11 11 01 11": "yellow",
    "11 11 11 00": "blue",
    "11 11 11 01": "red",
    "11 11 11 11": "white",
  }
};
