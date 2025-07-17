console.log("Hello world!");

let word = "hello";
let hello: string="こんにちは";
console.log(word);
console.log(hello);

const wordList1 = ["hi", "学習", 7];
const wordList2: string[] = ["おはよう", "こんにちは", "こんばんは"];
console.log(wordList1);
console.log(wordList2);

//常に1を返す関数
function one(){
  return 1;
}
console.log(one());

//引数を指定、返り値は推論される
function add(n:number){
  return n+1;
}
console.log(add(5));

//返り値を明示
function stringAdd(n:string): string{
  return n+"one";
}
console.log(stringAdd("five"));

//関数を式として変数に代入
const addOne = function(n:number){
  return n+1;
}
console.log(addOne(5));

//アロー関数
const addTwo = (n:number) => {
  return n+2;
}
console.log(addTwo(5));

//関数本体が単文なら上のアロー関数をより省略できる
const addThree = (n:number) => n+3;
console.log(addThree(5));
