if(0.3 > 2/7){
  console.log("条件文は真");
}

if(0.3 == 2/7){
  console.log("if条件文は真");
}else if(0.3 > 2/7){
  console.log("else if条件文は真");
}else{
  console.log("条件文はいずれも偽");
}

//try{
//  const readUndefined = undefined.value;
//  console.log("結果：", readUndefined);
//}catch(error){
//  console.log("エラー：", error);
//}
//=>エラー文が表示される

//for文で繰り返し、nの値が0～9になるまで計10回実行
for(let n=0; n<10; n++){
  console.log('1かける${n}は${n}');
}

//反復処理
const numbers = [2, 3, 5];
const numbersPlusTwo = numbers.map((n) =>{
  return n+2;
});
console.log(numbersPlusTwo);
