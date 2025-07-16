console.log("Hello world!");

let word = "hello";
let hello: string="こんにちは";

const wordList = ["hi", "学習", 7];
const wordList2: string[] = ["おはよう", "こんにちは", "こんばんは"];

//常に1を返す関数
function one(){
  return 1;
}

//引数を指定、返り値は推論される
function add(n:number){
  return n+1;
}

//返り値を明示
function stringAdd(n:string): string{
  return n+"one";
}

//関数を式として変数に代入
const addOne = function(n:number){
  return n+1;
}

//アロー関数
const addTwo = (n:number) => {
  return n+2;
}

//関数本体が単文なら上のアロー関数をより省略できる
const addThree = (n:number) => n+3;