import { Query,Where } from "https://deno.land/x/sql_builder/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";

// Post 型定義
interface User {
  id: number;
  name: string;
  password: string;
  favorite: number;
  follow: number;
  follower: number;
  //created_at: string;
}

const connectionParam = {
  hostname: "localhost",
  port: 3306,
  username: "root",
  password: "Passw0rd",
  // password: "pwd", // uncomment this line for <8
  db: "deno-dev",
};

//const client = await new Client().connect(connectionParam);

async function Search_users(i: number) {
  
  const client = await new Client().connect(connectionParam);
  const builder = new Query();
  const sql = builder
    .table("users")
    .where(Where.field("id").eq(i))
    .select("*")
    .build();

  //console.log(sql);
  const { rows } = await client.execute(sql) /*as { fields: any; rows: Post[] }*/;
  console.log(rows);

  
  
};

async function Insert_users(n:string,p:string,fv:number,fl:number,fr:number):Promise<void>{
  const client = await new Client().connect(connectionParam);
  const records = [
    {
        id: null,
        name: n,
        password: p,
        favorite: fv,
        follow: fl,
        follower: fr
    }
  ];
  const builder = new Query();
  const sql = builder
    .table("users")
    .insert(records)
    .build();

  console.log(sql);
  const { rows } = await client.execute(sql) /*as { fields: any; rows: Post[] }*/;
}


async function Delete_users(i: number):Promise<void>{
  const client = await new Client().connect(connectionParam);
  let result = await client.execute(`delete from users where ?? = ?`, ["id", i]);


}



// Insert_users("aaa","bbb",1,1,1);
// Search_users(1);
// Delete_users(1);

export {
  Insert_users,Search_users,Delete_users
}