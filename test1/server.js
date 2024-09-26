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
            Update_favorite(1,req.data);
            return {
                msg: req.data + "を受け取りました"
              }
        }
        break;
        //写真
        case "/api/camera": {
            Insert_posts(1," ",req.data);
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
            
            Search_posts(1,"url");

            const resp = {
                img0: process.argv[5],
                img1: "toriaezu.png",
                img2: "toriaezu.png",
                img3: "toriaezu.png",
                img4: "toriaezu.png",
                img5: "toriaezu.png",
                img6 : "road.png",
                essay: "テスト",
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

