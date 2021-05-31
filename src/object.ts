export {};

// アノテーションしてもバリューの型が異なっても、エラーが起きない
let profile1: object = { name: 'Ham' };
profile1 = { brithYear: 1976};

// プロパティに型指定ができる
let profile2: {
  name: string;
} = { name: 'Ham' };
profile2 = { name: 'Nimo'};
