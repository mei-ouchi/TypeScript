import { Database } from "bun:sqlite";
import { createItem, getItem, initializeItemTable, updateTodoToDone, deleteItem, archiveItems } from "./db";
import { formatToItem } from "./format";

const db = new Database("sqlite.db");
initializeItemTable(db);

try{
  if(Bun.argv.length == 4){
  const content : string = Bun.argv.pop()??"";
  const command : string = Bun.argv.pop()??"";
  switch(command){
    case "memo":
      createItem(db, content, "memo");
      break;
    case "todo":
      createItem(db, content, "todo");
      break;
    case "done":
      updateTodoToDone(db, content);
      break;
    case "drop":
      deleteItem(db, content);
      break;
    default:
      throw new Error("不正なコマンドです");
  }
    printItems(db);
  }else if(Bun.argv.length == 2){
    printItems(db);
  }else if(Bun.argv.length == 3){
    const command: string = Bun.argv.pop()??"";
    switch(command){
      case "trim":
        archiveItems(db);
        break;
      default:
        throw new Error("不正なコマンドです");
    }
    printItems(db);
  }else{
    throw new Error("コマンドライン引数の数が違います");
  }
}catch(error){
  if(error instanceof Error){
    console.log(error.message);
  }
}

function printItems(db: Database){
  const items = getItem(db);
  items.forEach((item)=>{
    if(item.archived){
      return;
    }
    console.log(formatToItem(item));
  });
}

db.close();