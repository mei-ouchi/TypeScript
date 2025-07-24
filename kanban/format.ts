import type { Item, Kind } from "./item";

export function symbolizeKind(kind: Kind): string{
  switch(kind){
    case "memo":
      return "-";
    case "todo":
      return "○";
    case "done":
      return "×";
  }
}

export function formatToItem(item: Item): string{
  const symbol = symbolizeKind(item.kind);
  return `${symbol} ${item.content}`;
}
