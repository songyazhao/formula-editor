export default [
  [
    {
      name: '加号',
      replaceWith: '+',
      background: './images/basic/1-1.svg',
    },
    {
      name: '减',
      replaceWith: '-',
      background: './images/basic/1-2.svg',
    },
    {
      name: '乘',
      replaceWith: '{/}times',
      background: './images/basic/1-3.svg',
    },
    {
      name: '点',
      replaceWith: '{/}cdot',
      background: './images/basic/1-4.svg',
    },
    {
      name: '除',
      replaceWith: '{/}div',
      background: './images/basic/1-5.svg',
    },
    {
      name: '绝对值',
      replaceWith: '{/}pm',
      background: './images/basic/1-6.svg',
    },
    {
      name: '大括号',
      replaceWith: '{/}mp',
      background: './images/basic/1-7.svg',
    },
    {
      name: '中括号',
      replaceWith: '=',
      background: './images/basic/1-8.svg',
    },
    {
      name: '小括号',
      replaceWith: '{/}neq',
      background: './images/basic/1-9.svg',
    },
    {
      name: '单左括号',
      replaceWith: '{/}approx',
      background: './images/basic/1-10.svg',
    }, // ?
    {
      name: '波浪线',
      replaceWith: '{/}equiv',
      background: './images/basic/1-11.svg',
    },
    {
      name: '无穷',
      replaceWith: '{/}forall',
      background: './images/basic/1-12.svg',
    },
    {
      name: '①',
      replaceWith: '{/}exists',
      background: './images/basic/1-13.svg',
    },
    {
      name: '②',
      replaceWith: '{/}infty',
      background: './images/basic/1-14.svg',
    },
    {
      name: '③',
      replaceWith: '{/}lt',
      background: './images/basic/1-15.svg',
    },
    {
      name: '×',
      replaceWith: '{/}gt',
      background: './images/basic/1-16.svg',
    },
    {
      name: '÷',
      replaceWith: '{/}le',
      background: './images/basic/1-17.svg',
    },
    {
      name: '∙',
      replaceWith: '{/}ge',
      background: './images/basic/1-18.svg',
    },
    {
      name: '不等于',
      replaceWith: '{/}propto',
      background: './images/basic/1-19.svg',
    },
    {
      name: '相似',
      replaceWith: '{/}otimes',
      background: './images/basic/1-20.svg',
    }, // 未实现
    {
      name: '大于等于',
      replaceWith: '{/}sim',
      background: './images/basic/1-21.svg',
    },
    {
      name: '小于等于',
      replaceWith: '{/}because',
      background: './images/basic/1-22.svg',
    },
    {
      name: '正负',
      replaceWith: '{/}therefore',
      background: './images/basic/1-23.svg',
    },
    {
      name: '负正',
      replaceWith: '{/}cdots',
      background: './images/basic/1-24.svg',
    },
    {
      name: '..',
      replaceWith: '{/}ldots',
      background: './images/basic/1-25.svg',
    }, // 背景图有问题
    {
      name: '因为',
      replaceWith: '{/}vdots',
      background: './images/basic/1-26.svg',
    },
    {
      name: '所以',
      replaceWith: '{/}ddots',
      background: './images/basic/1-27.svg',
    },
    {
      name: '度数',
      replaceWith: '{/}rightarrow',
      background: './images/basic/1-28.svg',
    }, // 基本
  ],
  [
    {
      name: '根式',
      replaceWith: '{}_{}^{}',
      background: './images/combination/2-1.svg',
    },
    {
      name: '⟨⟩',
      replaceWith: '{x}_{}',
      background: './images/combination/2-2.svg',
    },
    {
      name: '求和',
      replaceWith: '{x}^{}',
      background: './images/combination/2-3.svg',
    },
    {
      name: '∏',
      replaceWith: '{/}frac{}{}',
      background: './images/combination/2-4.svg',
    },
    {
      name: '极限',
      replaceWith: '{/}sqrt{}',
      background: './images/combination/2-5.svg',
    },
    {
      name: '积分',
      replaceWith: '{/}left|{}{/}right|',
      background: './images/combination/2-6.svg',
    },
    {
      name: '积分d',
      replaceWith: '{/}left{/}{{}{/}right{/}}',
      background: './images/combination/2-7.svg',
    },
    {
      name: '矩阵d',
      replaceWith: '{/}left[{}{/}right]',
      background: './images/combination/2-8.svg',
    },
    // { name: '矩阵d', replaceWith: '{/}begin{array}{c|c}a&b{/}{/}c&d{/}end{array}}'},
    // { name: '连加', replaceWith: '{/}underbrace{}_{}' },
    {
      name: '连加',
      replaceWith: '{/}left({}{/}right)',
      background: './images/combination/2-9.svg',
    }, // ?&#x23DF;
    {
      name: '尖角弧度',
      replaceWith: '{/}begin{cases}{l} {}\\\\{} {/}end{cases}',
      background: './images/combination/2-10.svg',
    }, // ?
    {
      name: 'over',
      replaceWith: '{/}sqrt[]{}',
      background: './images/combination/2-11.svg',
    },
    {
      name: '向量',
      replaceWith: '{/}left{/}langle{/}right{/}rangle',
      background: './images/combination/2-12.svg',
    },
    {
      name: 'C',
      replaceWith: '{/}sum_{}^{}{}',
      background: './images/combination/2-13.svg',
    },
    {
      name: 'A',
      replaceWith: '{/}prod_{}^{}{}',
      background: './images/combination/2-14.svg',
    },
    {
      name: '摄氏度',
      replaceWith: '{/}lim_{n{/}rightarrow{/}infty{}}',
      background: './images/combination/2-15.svg',
    },
    {
      name: 'Δ',
      replaceWith: '{/}int_{}^{}{}',
      background: './images/combination/2-16.svg',
    },
    {
      name: 'i',
      replaceWith: '{/}int{d}',
      background: './images/combination/2-17.svg',
    },
    {
      name: 'e',
      replaceWith: '{}{/}mid_{}^{}',
      background: './images/combination/2-18.svg',
    },
    {
      name: 'π',
      replaceWith: '{/}frac{d^{/}Box}{dx^{/}Box}',
      background: './images/combination/2-19.svg',
    },
    {
      name: 'α',
      replaceWith: '{/}frac{{/}partial}{{/}partial x} ',
      background: './images/combination/2-20.svg',
    },
    {
      name: 'β',
      replaceWith: '{/}underbrace{}_{}',
      background: './images/combination/2-21.svg',
    },
    {
      name: 'γ',
      replaceWith: '{/}overbrace{}^{{}}',
      background: './images/combination/2-22.svg',
    },
    {
      name: 'σ',
      replaceWith: '{/}widehat{a}',
      background: './images/combination/2-23.svg',
    },
    {
      name: 'λ',
      replaceWith: '{/}overline{AB}',
      background: './images/combination/2-24.svg',
    },
    {
      name: 'μ',
      replaceWith: '{/}overrightarrow{AB}',
      background: './images/combination/2-25.svg',
    },
    {
      name: 'ε',
      replaceWith: '{/}overset{ }{ }',
      background: './images/combination/2-26.svg',
    },
    {
      name: 'η',
      replaceWith: '{/}underset{ }{ }',
      background: './images/combination/2-27.svg',
    },
    {
      name: 'ρ',
      replaceWith: '{/}underset{ }{{/}overset{ }{ }}',
      background: './images/combination/2-28.svg',
    },
    {
      name: 'θ',
      replaceWith: '{/}dot{ }',
      background: './images/combination/2-29.svg',
    },
    {
      name: 'ω',
      replaceWith: '{/}underset{-}{ }',
      background: './images/combination/2-30.svg',
    },
    {
      name: 'φ',
      replaceWith: '{/}text{C}_{}^{}',
      background: './images/combination/2-31.svg',
    },
    {
      name: 'σ',
      replaceWith: '{/}text{A}_{}^{}',
      background: './images/combination/2-32.svg',
    },
    {
      name: 'λ',
      replaceWith: 'n!',
      background: './images/combination/2-33.svg',
    },
    {
      name: 'μ',
      replaceWith: "^{'}",
      background: './images/combination/2-34.svg',
    },
    {
      name: 'ε',
      replaceWith: "^{''}",
      background: './images/combination/2-35.svg',
    },
    {
      name: 'η',
      replaceWith: "^{'''}",
      background: './images/combination/2-36.svg',
    },
    {
      name: 'ρ',
      replaceWith: 'a^{/}circ',
      background: './images/combination/2-37.svg',
    },
    {
      name: 'θ',
      replaceWith: '{/}log_{}',
      background: './images/combination/2-38.svg',
    },
    {
      name: 'ω',
      replaceWith: '{/}max()',
      background: './images/combination/2-39.svg',
    },
    {
      name: 'φ',
      replaceWith: '{/}sin',
      background: './images/combination/2-40.svg',
    },
    {
      name: '尖角弧度3',
      replaceWith: '{/}begin{cases}{l} {}\\\\{}\\\\{} {/}end{cases}',
      background: './images/combination/2-41.svg',
    },
    {
      name: '尖角弧度4',
      replaceWith: '{/}begin{cases}{l} {}\\\\{}\\\\{}\\\\{} {/}end{cases}',
      background: './images/combination/2-42.svg',
    },
  ],
  [
    {
      name: '∈',
      replaceWith: '{/}in',
      background: './images/set/3-1.svg',
    },
    {
      name: '∉',
      replaceWith: '{/}notin',
      background: './images/set/3-2.svg',
    },
    {
      name: '∪',
      replaceWith: '{/}cup',
      background: './images/set/3-3.svg',
    },
    {
      name: '∩',
      replaceWith: '{/}cap',
      background: './images/set/3-4.svg',
    },
    {
      name: '⊂',
      replaceWith: '{/}subset',
      background: './images/set/3-5.svg',
    },
    {
      name: '⊃',
      replaceWith: '{/}supset',
      background: './images/set/3-6.svg',
    },
    {
      name: '⊆',
      replaceWith: '{/}subseteq',
      background: './images/set/3-7.svg',
    },
    {
      name: '⊇',
      replaceWith: '{/}supseteq',
      background: './images/set/3-8.svg',
    },
    {
      name: '不属于',
      replaceWith: '{/}notsub',
      background: './images/set/3-9.svg',
    },
    {
      name: '∅',
      replaceWith: '{/}nsubseteq',
      background: './images/set/3-10.svg',
    },
    {
      name: '∁',
      replaceWith: '{/}subsetneqq',
      background: './images/set/3-11.svg',
    },
    {
      name: 'Z',
      replaceWith: '{/}varnothing',
      background: './images/set/3-12.svg',
    },
    {
      name: 'R',
      replaceWith: '{{{/}complement}_{U}}',
      background: './images/set/3-13.svg',
    },
    {
      name: 'Q',
      replaceWith: '{/}mathbf{Z}',
      background: './images/set/3-14.svg',
    },
    {
      name: 'N',
      replaceWith: '{/}mathbf{R}',
      background: './images/set/3-15.svg',
    },
    {
      name: 'C',
      replaceWith: '{/}mathbf{Q}',
      background: './images/set/3-16.svg',
    },
    {
      name: 'N',
      replaceWith: '{/}mathbf{N}',
      background: './images/set/3-17.svg',
    },
    {
      name: 'N',
      replaceWith: '{/}mathbf{C}',
      background: './images/set/3-18.svg',
    },
    {
      name: 'C',
      replaceWith: '{{{/}mathbf{N}}^{*}}',
      background: './images/set/3-19.svg',
    },
    {
      name: 'N',
      replaceWith: '{{{/}mathbf{N}}_{+}}',
      background: './images/set/3-20.svg',
    },
  ],
  [
    {
      name: '¬',
      replaceWith: '{/}neg',
      background: './images/logic/4-1.svg',
    },
    {
      name: '∧',
      replaceWith: '{/}wedge',
      background: './images/logic/4-2.svg',
    },
    {
      name: '∨',
      replaceWith: '{/}vee',
      background: './images/logic/4-3.svg',
    },
    {
      name: '→',
      replaceWith: '{/}to',
      background: './images/logic/4-4.svg',
    },
    {
      name: '←',
      replaceWith: '{/}leftarrow',
      background: './images/logic/4-5.svg',
    },
    {
      name: '⟹',
      replaceWith: '{/}Rightarrow',
      background: './images/logic/4-6.svg',
    },
    {
      name: '⟸',
      replaceWith: '{/}Leftarrow',
      background: './images/logic/4-7.svg',
    },
    {
      name: '⟺',
      replaceWith: '{/}Leftrightarrow',
      background: './images/logic/4-8.svg',
    },
  ],
  [
    {
      name: '或',
      replaceWith: '{/}angle',
      background: './images/geometry/5-1.svg',
    },
    {
      name: '垂直',
      replaceWith: '{/}measuredangle',
      background: './images/geometry/5-2.svg',
    },
    {
      name: '相似',
      replaceWith: '{/}parallel',
      background: './images/geometry/5-3.svg',
    },
    {
      name: '全等',
      replaceWith: '{/}nparallel',
      background: './images/geometry/5-4.svg',
    },
    {
      name: '三角形',
      replaceWith: '//',
      background: './images/geometry/5-5.svg',
    },
    {
      name: '正三角形',
      replaceWith: '{/}bot',
      background: './images/geometry/5-6.svg',
    },
    {
      name: '角度',
      replaceWith: '{/}text{∽}',
      background: './images/geometry/5-7.svg',
    },
    {
      name: '锐角',
      replaceWith: '{/}text{≌}',
      background: './images/geometry/5-8.svg',
    },
    {
      name: '弧度',
      replaceWith: '{/}triangle',
      background: './images/geometry/5-9.svg',
    },
    {
      name: '或',
      replaceWith: '{/}text{Rt}{/}triangle',
      background: './images/geometry/5-10.svg',
    },
    {
      name: '垂直',
      replaceWith: '{/}bigcirc',
      background: './images/geometry/5-11.svg',
    },
    {
      name: '相似',
      replaceWith: '{/}odot',
      background: './images/geometry/5-12.svg',
    },
    {
      name: '全等',
      replaceWith: 'a^{/}circ',
      background: './images/geometry/5-13.svg',
    }, // ?
    {
      name: '三角形',
      replaceWith: '{/}overgroup{AB}',
      background: './images/geometry/5-14.svg',
    }, // ?
    {
      name: '正三角形',
      replaceWith: '{/}overrightarrow{ab}',
      background: './images/geometry/5-15.svg',
    }, // ?
    {
      name: '角度',
      replaceWith: '{/}widehat{AB}',
      background: './images/geometry/5-16.svg',
    }, // ?
  ],
  [
    {
      name: 'χ',
      replaceWith: '{/}uparrow',
      background: './images/chemistry/6-1.svg',
    },
    {
      name: 'δ',
      replaceWith: '{/}downarrow',
      background: './images/chemistry/6-2.svg',
    },
    {
      name: 'ε',
      replaceWith: '{/}Delta',
      background: './images/chemistry/6-3.svg',
    },
    {
      name: 'K',
      replaceWith: '={/}!={/}!=',
      background: './images/chemistry/6-4.svg',
    },
    {
      name: 'V',
      replaceWith: '{/}overset{{/}text{}}{{/}mathop{{/}={/}!={/}!=}}',
      background: './images/chemistry/6-5.svg',
    },
    {
      name: 'ϑ',
      replaceWith: '{/}underset{}{{/}overset{{/}text{}}{{/}={/}!={/}!=}}',
      background: './images/chemistry/6-6.svg',
    },
    {
      name: 'ζ',
      replaceWith: '{{{/}text{H}}_{{/}text{2}}}',
      background: './images/chemistry/6-7.svg',
    },
    {
      name: 'τ',
      replaceWith: '{{{/}text{H}}^{{/}text{+}}}',
      background: './images/chemistry/6-8.svg',
    },
    {
      name: 'υ',
      replaceWith: '{}_{{/}text{2}}^{{/}text{1}}{/}text{H}',
      background: './images/chemistry/6-9.svg',
    },
    {
      name: 'Ψ',
      replaceWith: '{/}text{H}_{{/}text{2}}^{{/}text{1}}',
      background: './images/chemistry/6-10.svg',
    },
    {
      name: 'ς',
      replaceWith: '{/}overset{{/}text{+1}}{{/}mathop{{/}text{H}}}',
      background: './images/chemistry/6-11.svg',
    },
    {
      name: 'Φ',
      replaceWith: '^{/}circ{/}text{C}',
      background: './images/chemistry/6-12.svg',
    },
    {
      name: 'Γ',
      replaceWith: '{/}xrightarrow{}',
      background: './images/chemistry/6-13.svg',
    },
    {
      name: 'Θ',
      replaceWith: '{/}xrightarrow[]{}',
      background: './images/chemistry/6-14.svg',
    },
    {
      name: 'Υ',
      replaceWith: '{/}xleftarrow{ }',
      background: './images/chemistry/6-15.svg',
    },
    {
      name: 'Ω',
      replaceWith: '{/}xleftarrow[]{}',
      background: './images/chemistry/6-16.svg',
    },
    {
      name: 'Ξ',
      replaceWith: '{/}overset{ }{{/}longleftrightarrow}',
      background: './images/chemistry/6-17.svg',
    },
    {
      name: 'Ψ',
      replaceWith: '{/}underset{ }{{/}longleftrightarrow}',
      background: './images/chemistry/6-18.svg',
    },
    {
      name: 'Γ',
      replaceWith: '{/}overset{ }{{/}underset{ }{{/}longleftrightarrow}}',
      background: './images/chemistry/6-19.svg',
    },
    {
      name: 'Θ',
      replaceWith: '{/}overset{}{{/}leftrightarrows}',
      background: './images/chemistry/6-20.svg',
    },
    {
      name: 'Υ',
      replaceWith: '{/}underset{}{{/}leftrightarrows}',
      background: './images/chemistry/6-21.svg',
    },
    {
      name: 'Ω',
      replaceWith: '{/}overset{ }{{/}rightleftharpoons}',
      background: './images/chemistry/6-22.svg',
    },
    {
      name: 'Ξ',
      replaceWith: '{/}underset{ }{{/}rightleftharpoons}',
      background: './images/chemistry/6-23.svg',
    },
    {
      name: 'Ψ',
      replaceWith: '{/}overset{ }{{/}underset{ }{{/}rightleftharpoons}}',
      background: './images/chemistry/6-24.svg',
    },
  ],
  [
    {
      name: '连加',
      replaceWith: '{/}alpha',
      background: './images/letters/7-1.svg',
    }, // ?&#x23DF;
    {
      name: '尖角弧度',
      replaceWith: '{/}beta',
      background: './images/letters/7-2.svg',
    }, // ?
    {
      name: 'over',
      replaceWith: '{/}chi',
      background: './images/letters/7-3.svg',
    },
    {
      name: '向量',
      replaceWith: '{/}delta',
      background: './images/letters/7-4.svg',
    },
    {
      name: 'C',
      replaceWith: '{/}varepsilon',
      background: './images/letters/7-5.svg',
    },
    {
      name: 'A',
      replaceWith: '{/}phi',
      background: './images/letters/7-6.svg',
    },
    {
      name: '摄氏度',
      replaceWith: '{/}varphi',
      background: './images/letters/7-7.svg',
    },
    {
      name: 'Δ',
      replaceWith: '{/}gamma',
      background: './images/letters/7-8.svg',
    },
    {
      name: 'i',
      replaceWith: '{/}eta',
      background: './images/letters/7-9.svg',
    },
    {
      name: 'e',
      replaceWith: '{/}iota',
      background: './images/letters/7-10.svg',
    },
    {
      name: 'π',
      replaceWith: '{/}kappa',
      background: './images/letters/7-11.svg',
    },
    {
      name: 'α',
      replaceWith: '{/}lambda',
      background: './images/letters/7-12.svg',
    },
    {
      name: 'β',
      replaceWith: '{/}mu',
      background: './images/letters/7-13.svg',
    },
    {
      name: 'γ',
      replaceWith: '{/}nu',
      background: './images/letters/7-14.svg',
    },
    {
      name: 'σ',
      replaceWith: 'o',
      background: './images/letters/7-15.svg',
    },
    {
      name: 'λ',
      replaceWith: '{/}pi',
      background: './images/letters/7-16.svg',
    },
    {
      name: 'μ',
      replaceWith: '{/}varpi',
      background: './images/letters/7-17.svg',
    },
    {
      name: 'ε',
      replaceWith: '{/}theta',
      background: './images/letters/7-18.svg',
    },
    {
      name: 'η',
      replaceWith: '{/}vartheta',
      background: './images/letters/7-19.svg',
    },
    {
      name: 'ρ',
      replaceWith: '{/}rho',
      background: './images/letters/7-20.svg',
    },
    {
      name: 'θ',
      replaceWith: '{/}sigma',
      background: './images/letters/7-21.svg',
    },
    {
      name: 'ω',
      replaceWith: '{/}varsigma',
      background: './images/letters/7-22.svg',
    },
    {
      name: 'φ',
      replaceWith: '{/}tau',
      background: './images/letters/7-23.svg',
    },
    {
      name: 'σ',
      replaceWith: '{/}upsilon',
      background: './images/letters/7-24.svg',
    },
    {
      name: 'λ',
      replaceWith: '{/}omega',
      background: './images/letters/7-25.svg',
    },
    {
      name: 'μ',
      replaceWith: '{/}xi',
      background: './images/letters/7-26.svg',
    },
    {
      name: 'ε',
      replaceWith: '{/}psi',
      background: './images/letters/7-27.svg',
    },
    {
      name: 'η',
      replaceWith: '{/}zeta',
      background: './images/letters/7-28.svg',
    },
    {
      name: 'ρ',
      replaceWith: '{/}Gamma',
      background: './images/letters/7-29.svg',
    },
    {
      name: 'θ',
      replaceWith: '{/}Delta',
      background: './images/letters/7-30.svg',
    },
    {
      name: 'ω',
      replaceWith: '{/}Theta',
      background: './images/letters/7-31.svg',
    },
    {
      name: 'φ',
      replaceWith: '{/}Xi',
      background: './images/letters/7-32.svg',
    },
    {
      name: 'λ',
      replaceWith: '{/}Upsilon',
      background: './images/letters/7-33.svg',
    },
    {
      name: 'μ',
      replaceWith: '{/}Phi',
      background: './images/letters/7-34.svg',
    },
    {
      name: 'ε',
      replaceWith: '{/}Psi',
      background: './images/letters/7-35.svg',
    },
    {
      name: 'η',
      replaceWith: '{/}Omega',
      background: './images/letters/7-36.svg',
    },
    {
      name: 'θ',
      replaceWith: '{/}R',
      background: './images/letters/7-37.svg',
    },
    {
      name: 'ω',
      replaceWith: '{/}N',
      background: './images/letters/7-38.svg',
    },
    {
      name: 'φ',
      replaceWith: '{/}Z',
      background: './images/letters/7-39.svg',
    },
    {
      name: '根式',
      replaceWith: '{/}Q',
      background: './images/letters/7-40.svg',
    },
    {
      name: '⊖',
      replaceWith: '{/}ominus',
      background: './images/letters/7-41.svg',
    },
  ],
  [
    {
      name: '④',
      replaceWith: '①',
      background: './images/symbols/8-1.svg',
    },
    {
      name: '⑤',
      replaceWith: '②',
      background: './images/symbols/8-2.svg',
    },
    {
      name: '⑥',
      replaceWith: '③',
      background: './images/symbols/8-3.svg',
    },
    {
      name: '⑦',
      replaceWith: '④',
      background: './images/symbols/8-4.svg',
    },
    {
      name: '⑧',
      replaceWith: '⑤',
      background: './images/symbols/8-5.svg',
    },
    {
      name: '⑨',
      replaceWith: '⑥',
      background: './images/symbols/8-6.svg',
    },
    {
      name: '⑩',
      replaceWith: '⑦',
      background: './images/symbols/8-7.svg',
    },
    {
      name: '⑧',
      replaceWith: '⑧',
      background: './images/symbols/8-8.svg',
    },
    {
      name: '⑨',
      replaceWith: '⑨',
      background: './images/symbols/8-9.svg',
    },
    {
      name: '⑩',
      replaceWith: '⑩',
      background: './images/symbols/8-10.svg',
    },
    {
      name: '⑧',
      replaceWith: '⑪',
      background: './images/symbols/8-11.svg',
    },
    {
      name: '⑨',
      replaceWith: '⑫',
      background: './images/symbols/8-12.svg',
    },
    {
      name: '⑧',
      replaceWith: '⑬',
      background: './images/symbols/8-13.svg',
    },
    {
      name: '⑨',
      replaceWith: '⑭',
      background: './images/symbols/8-14.svg',
    },
    {
      name: '⑩',
      replaceWith: '⑮',
      background: './images/symbols/8-15.svg',
    },
    {
      name: '⑧',
      replaceWith: '⑯',
      background: './images/symbols/8-16.svg',
    },
    {
      name: '⑨',
      replaceWith: '⑰',
      background: './images/symbols/8-17.svg',
    },
    {
      name: '⑩',
      replaceWith: '⑱',
      background: './images/symbols/8-18.svg',
    },
    {
      name: '⑧',
      replaceWith: '⑲',
      background: './images/symbols/8-19.svg',
    },
    {
      name: '⑨',
      replaceWith: '⑳',
      background: './images/symbols/8-20.svg',
    },
  ],
]
