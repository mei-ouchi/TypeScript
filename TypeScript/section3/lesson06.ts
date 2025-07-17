//as constで再代入できない
const greeting = "hello" as const;
//greeting = "こんにちは" => ✕
const talk = {
  greet: "hello",
  opener: "how are you",
} as const;
//talk.greet = "こんにちは" => ✕
//talk.opener = "元気ですか" => ✕

let Greet: "hello" | "こんにちは" = "hello";
Greet = "こんにちは";// =>OK
//Greet = "bonjour";  =>NG

type Greeting = "hello" | "こんにちは" | "bonjour";
function startGreet(greeting: Greeting){
  console.log(greeting);
  if(greeting == "hello"){
    console.log("how are you");
  }else if(greeting == "こんにちは"){
    console.log("お元気ですか");
  }else{
    console.log("vous allez bien");
  }
}
startGreet("hello");
startGreet("こんにちは");
startGreet("bonjour");

//型ガード
function printAll(messages: string | string[] | null){
  if(typeof messages == "string"){
    console.log(messages);
  }else if(Array.isArray(messages)){
    for(const message of messages){
    console.log(message);
    }
  }else{
    console.log("no messages");
  }
}
printAll("hello world!");
printAll(["morning", "hello", "evening"]);
printAll(null);

type Success = {
  status: "success";
  count: number;
}
type Failure = {
  status: "failure";
  message: string;
}
function printMessage(result: Success | Failure){
  switch(result.status){
    case "success":
      console.log("成功");
      console.log("Count:", result.count);
      break;
    case "failure":
      console.log("失敗");
      console.log("message:", result.message);
      break;
  }
}
printMessage({status:"success", count:5});
printMessage({status:"failure", message:"失敗"});

//型ガード関数
type Spicy = {
  name: string;
  level: number;
}
type Mild = {
  name: string;
}
//型の判断：受け取った引数curryにlevelプロパティがあればcurryはSpicy
function isSpicy(curry: Spicy | Mild): curry is Spicy{
  return "level" in curry;
}
const keemaCurry = {
  name: "キーマカレー",
  level: 5,
} satisfies Spicy;
if(isSpicy(keemaCurry)){
  if(keemaCurry.level > 3){
    console.log(`${keemaCurry.name}辛いよ。大丈夫？`);
  }
}

//unknown型
function logResponse(response: unknown){
  if(response === null){
    console.log(null);
  }else if(typeof response === "object"){//ここでいうオブジェクト型には通常のオブジェクトや配列などが含まれる
    console.table(response);
  }else{
    console.log(response);
  }
}
const user = {
  id: 1,
  name: "太郎",
};
logResponse(null);
logResponse(user);
logResponse("Response");
