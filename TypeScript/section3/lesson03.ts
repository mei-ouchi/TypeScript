console.log("1+2=", 1+2);
//=>1+2=3

console.log("3/2=", 3/2);
//=>3/2=1.5

console.log("true && false = ", true && false);
//=>true && false = false

console.log("true || false = ", true || false);
//=>true || false = true

console.log("abc");
//=>abc

console.log([1, 2, 3]);
//=>[1, 2, 3]

console.log({one:1, two:2, three:3});
//=>{one:1, two:2, three:3}

//値としてのオブジェクト
const mail1 = {
  name: "通常はがき",
  price: 85,
};
console.log(mail1);

//型エイリアスを使ったオブジェクトの型定義
type MailType = {
  name: string;
  price: number;
};

//型アノテーションされた変数を宣言してオブジェクトを代入
const mail2: MailType = {
  name: "定形郵便物",
  price: 110,
};
console.log(mail2);
//=>このように型アノテーションで宣言することでエラーを未然に防げたりする

//変数名がプロパティと一致する場合、省略可能
const stats = 200;
const message = "ok";
//2つのプロパティを持つオブジェクト
const response = {stats, message};
console.log(response);
