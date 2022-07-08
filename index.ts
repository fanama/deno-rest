import { Application } from "./deps.ts";
import { routerApi } from "./interface/router/api.ts";

import { port } from "./config.ts";

const app = new Application();

app.use(routerApi.routes());
await app.listen({ port });

app.addEventListener("listen", () => {
  console.log(`Listening on: localhost:${port}`);
});
