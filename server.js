import { Server } from "https://js.sabae.cc/Server.js";
class MyServer extends Server {
    api(path, req) {
        console.log("path = ", path, "req = ", req)
        switch (path) {
            case "/api/follow": {
                const resp = {
                    count: 1
                }
                console.log("resp = ", resp)
                return resp
            }
        }
    }
}
new MyServer(8001);