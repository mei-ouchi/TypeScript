import { formatToItem } from "./format";


const file = Bun.file("output.txt");
const source = await file.text();

if(Bun.argv.length == 3){
  const memo: string=Bun.argv.pop()??"";
  const item: string=formatToItem(memo);

  const writer = file.writer();
  writer.write(source);
  writer.write("\n");
  writer.write(item);
  writer.end();

  const result = await file.text();
  console.log(result);
}else if(Bun.argv.length == 2){
  console.log(source);
}else{
  throw new Error("追加のコマンドライン引数は1つまでです");
}