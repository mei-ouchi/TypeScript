const greet = "Hello!";
//lengthプロパティにアクセス、文字数カウント
const count = greet.length;
console.log(count);
//メソッドチェーニング
const greetString = greet.toUpperCase().replace("!", "!!");
console.log(greetString);

//?：プロパティが必ずしも存在しない
type Citizen = {
  name: string;
  age: number;
  gerder?: "female" | "male";
}

//引数が渡されない場合にエラーになるのを防ぐ
function printGender(gender?: "female" | "male"){
  switch(gender){
    case "female":
      return "女性";
    case "male":
      return "男性";
    default:
      return "その他";
  }
}
console.log(printGender());
