import { Application, Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";

const app = new Application();
const router = new Router();

app.get("/", (ctx) => {
  return {"hello": "world"};
});
await app.run();
