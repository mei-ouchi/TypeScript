import OpenAI from "https://deno.land/x/openai@v4.62.1/mod.ts";

const openai = new OpenAI({
  apiKey: Deno.env.get("OPENAI_API_KEY"),
});

const RECIPE_ROUTE = new URLPattern({pathname: "/:name"});

async function headler(req: Request){
  const match = RECIPE_ROUTE.exec(req.url);
  const name: string = match?.pathname.groups.name ?? "おでん";
  const completion = await openai.chat.completions.create({
    messages: [
      {role: "system", content: "レシピ作成アシスタント"},
      {role: "user", content: name},
    ],
    model: "gpt-4o-mini",
  });
  const content = completion.choices[0].message.content;
  const response = new Response(content, {
    headers: {
      "content-type": "text/plain;charset=utf-8",
    },
  });
  return response;
}
Deno.serve(headler);