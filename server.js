import { Server } from "https://js.sabae.cc/Server.js";
import {
    Insert_posts,Search_posts,Update_favorite,Delete_posts
}from "./posts.ts";
import {
    Insert_users,Search_users,Delete_users
}from "./users.ts";
class MyServer extends Server {
  api(path, req) {


    switch (path) {
        case "/data/": {
            Insert_posts(1," ",req.data);
            return {
              }
        }
        case "/api/send": {
            Update_favorite(1,req.data);
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
                img0: process.argv[5],
                img1: process.argv[5],
                img2: "toriaezu.png",
                img3: "toriaezu.png",
                img4: "toriaezu.png",
                img5: "toriaezu.png",
                img6 : "toriaezu.png",
                img7 : "toriaezu.png",
                img8: "toriaezu.png",
                essay1: "とりあえず",
                essay2: "コメント",
                essay3: "テストコメント",
                essay4: "あいうえお",
                essay5: "てすと",
                essay6: "コメント",
                essay7: "とりあえず",
                essay8: "あいうえお",
                essay9: "コメント",
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
new MyServer(8890);

