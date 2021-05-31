export {};

//export がないとモジュール化何されないのでnameがエラーと判断されてしまう
let name = 'TypeScript'

let isFinished: boolean = true;
isFinished = false;
// isFinished = 1; これはboolean型ではないからエラーが起こる
console.log({ isFinished });