import { Router } from "../../deps.ts";

export const routerApi = new Router();

routerApi.get("/", (ctx) => {
  ctx.response.body = {
    route: "/",
    description: "default deno oak app",
  };
});
