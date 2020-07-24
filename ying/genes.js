

function GeneCalculator() {
    this.forward = function(t, s) {
        let n = [];
        for (let e = 0; e < t.length; ++e)
            switch (t[e] + s[e]) {
                case "00":
                    n.push(["0", "0", "0", "0"]);
                    break;
                case "01":
                case "10":
                    n.push(["0", "0", "1", "1"]);
                    break;
                case "02":
                case "20":
                    n.push(["1", "1", "1", "1"]);
                    break;
                case "11":
                    n.push(["0", "1", "1", "2"]);
                    break;
                case "12":
                case "21":
                    n.push(["1", "1", "2", "2"]);
                    break;
                case "22":
                    n.push(["2", "2", "2", "2"])
            }
        let a = [], c = new Array(n.length);
        c.fill(0);
        let u = e(c, n);
        for (a.push(u); r(c, n); )
            u = e(c, n),
            a.push(u);
        let l = {};
        for (let e = 0; e < a.length; ++e)
            l.hasOwnProperty(a[e]) ? ++l[a[e]] : l[a[e]] = 1;
        return l
    }
    ,
    this.backward = function(s) {
        let n = [];
        for (let e = 0; e < s.length; ++e)
            switch (s[e]) {
                case "0":
                    n.push(["00", "01", "10", "11"]);
                    break;
                case "1":
                    n.push(["01", "10", "02", "20", "11", "12", "21"]);
                    break;
                case "2":
                    n.push(["11", "12", "21", "22"])
            }
        let a = []
          , c = new Array(n.length);
        c.fill(0);
        let u = e(c, n);
        for (a.push(u); r(c, n); )
            u = e(c, n),
            a.push(u);
        let l = {};
        for (let e = 0; e < a.length; ++e) {
            let r = ""
              , n = ""
              , c = 1;
            for (let u = 0, l = 0; u < a[e].length; u += 2,
            ++l)
                r += a[e][u],
                n += a[e][u + 1],
                c *= t(s[l], a[e][u], a[e][u + 1]);
            let u = r + "-" + n
              , h = n + "-" + r;
            l.hasOwnProperty(u) || l.hasOwnProperty(h) || (l[u] = c)
        }
        return l
    };
    let e = function(e, r) {
        return e.reduce((function(e, t, s) {
            return "" + e + r[s][t]
        }
        ), "")
    }
    , r = function(e, r) {
        for (let t = e.length - 1; t >= 0; --t) {
            let s = r[t].length - 1;
            if (e[t] + 1 <= s)
                return ++e[t],
                !0;
            if (t - 1 < 0)
                return !1;
            e[t] = 0
        }
    }
    , t = function(e, r, t) {
        switch (e + r + t) {
            case "000":
                return 4;
            case "001":
            case "010":
                return 2;
            case "011":
                return 1;
            case "101":
            case "110":
                return 2;
            case "102":
            case "120":
                return 4;
            case "111":
                return 2;
            case "112":
            case "121":
                return 2;
            case "211":
                return 1;
            case "212":
            case "221":
                return 2;
            case "222":
                return 4;
            default:
                return 1
        }
    }
}



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

  const posRef = useRef({
    sourceA: [] as ClientRect[],
    sourceB: [] as ClientRect[],
  });

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

  const kbShortcuts = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.which >= 49 && e.which <= 53) {
      setChoiceA([-1, -1, -1, -1]);
      setChoiceB([-1, -1, -1, -1]);
      setSpecies(FlowerNames.rose);
      setParents(parentOptions[e.which - 49]);
    }
  };
  return null;
};

const getFlowerColorAndName = (species: FlowerNames, genes: string) => {
  const color = resolveFlowerColor({ species, genes});
  const speciesName = speciesNames[species];
  if ('aeiou'.split('').indexOf(color[0]) !== -1) {
    return `an ${color} ${speciesName}`;
  }
  return `a ${color} ${speciesName}`;
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
