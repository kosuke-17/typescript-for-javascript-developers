export {};

let numbers: number[] = [1, 2, 3];

// 非推奨の型
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript'];

let nijigenHairetsu: number[][] = [
  [50, 100],
  [150, 300]
];

// uniontypes
let hairetsu: (number | boolean | string )[] = [1, false, 'Japan'];