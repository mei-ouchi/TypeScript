//非同期関数、非同期メソッド
//const response = await fetch("https://www.w3.org");
//const html = await response.text();

//非同期関数の宣言
//async function responseText(url: string){
//  const response = await fetch(url);
//  const htmlText = await response.text();
//  return htmlText;
//}
//const htmlText = responseText("https://www.w3.org");

//ジェネリック型を使った型エイリアスの定義
function createSome<T>(value: T){
  return {value};
}
const some1 = createSome<string>("値その1");
const some2 = createSome("値その2");
console.log(some1);
console.log(some2);

//型引数の型制約
type Triplet<T extends number | string> = [T, T, T];
type TripleDigits = Triplet<number>;// =>OK
type TripleCharts = Triplet<string>;// =>OK
//type TripleBools = Triplet<boolean>; =>NG
