import { Server } from "https://js.sabae.cc/Server.js";
class MyServer extends Server {
  api(path, req) {


    switch (path) {
        case "/data/": {
            return {
              }
        }
        case "/api/send": {
            return {
                msg: req.data + "を受け取りました"
              }
        }
        break;
        //いいね
        case "/api/fav": {
            //req.data
            return {
                msg: req.data + "を受け取りました"
              }
        }
        
        break;
        //写真
        case "/api/camera": {
            //req.data
        }
        break;

        //写真
        case "/api/cameraC": {
            //req.data
            return {
                msg: req.data + "を受け取りました"
              }
        }
        break;
        //タイムライン
        case "/api/timeline": {
            const resp = {
                img0: "toriaezu.png",
                img1: "toriaezu.png",
                img2: "toriaezu.png",
                img3: "toriaezu.png",
                img4: "toriaezu.png",
                img5: "toriaezu.png",
                img6 : "road.png",
                img7 : "road.png",
                img8: "toriaezu.png",
                img9: "toriaezu.png",
                essay1: "テスト",
                essay2: "テスト",
                essay3: "テスト",
                essay4: "テスト",
                essay5: "テスト",
                essay6: "テスト",
                essay7: "テスト",
                essay8: "テスト",
                essay9: "テスト",
                fav1:46000,
                fav2:1000,
                fav3:17,
                fav4:3,
                fav5:1000,
                fav6:2300,
                fav7:6789,
                fav8:100,
                fav9:1008,
            }    
            return resp
        }
        break;
        //フォロー
        case "/api/follow": {
            const resp = {
                count: 1,
                FWcount: 2,
                LOcount: 3,
                LIcount: 4,
                WAcount: 5,
                AWcount: 6,
            }   
            
            console.log("resp = ", resp)
            return resp
            
        }
        break; 
    }
  }
}
new MyServer(8001);

