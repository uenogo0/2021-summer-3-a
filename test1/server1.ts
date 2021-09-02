import { listenAndServe } from "https://deno.land/std/http/server.ts";
import {
  acceptWebSocket,
  acceptable,
  WebSocket,
  isWebSocketCloseEvent,
} from "https://deno.land/std/ws/mod.ts";
listenAndServe({ port: 8080 }, async (request) => {
  if (request.method === "GET" && request.url === "/") {
    const file = await Deno.open("./static/index.html");
    request.respond({
      status: 200,
      headers: new Headers({
        "content-type": "text/html",
      }),
      body: file,
    });
  }
  if (request.method === "GET" && request.url === "/favicon.ico") {
    request.respond({
      status: 302,
      headers: new Headers({
        location: "https://deno.land/favicon.ico",
      }),
    });
  }
  if (request.method === "GET" && request.url === "/ws") {
    if (acceptable(request)) {
      acceptWebSocket({
        conn: request.conn,
        bufReader: request.r,
        bufWriter: request.w,
        headers: request.headers,
      }).then(wsHandler);
    }
  }
});
console.log("http://localhost:8080/");
const clients = new Map<number, WebSocket>();
let clientId = 0;
async function wsHandler(ws: WebSocket): Promise<void> {
  const id = ++clientId;
  clients.set(id, ws);
  dispatch(`[${id}]さんが入室しました`);
  for await (const msg of ws) {
    if (typeof msg === "string") {
      dispatch(`[${id}] > ${msg}`);
    } else if (isWebSocketCloseEvent(msg)) {
      clients.delete(id);
      dispatch(`[${id}]さんが退室しました`);
      break;
    }
  }
}
function dispatch(msg: string): void {
  for (const client of clients.values()) {
    client.send(msg);
  }
}