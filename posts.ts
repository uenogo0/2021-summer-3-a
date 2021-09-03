import { Query,Where } from "https://deno.land/x/sql_builder/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";

// Post 型定義
interface Post {
  id: number;
  author: number;
  content: string;
  //created_at: string;
  url:string;
  favorite: number;
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

async function Search_posts(i: number,f:string){
  
  const client = await new Client().connect(connectionParam);
  const builder = new Query();
  const sql = builder
    .table("posts")
    .where(Where.field("id").eq(i))
    .select(f)
    .build();

  //console.log(sql);
  const { rows } = await client.execute(sql) as { fields: any; rows: Post[] };
  console.log(rows);

  
  
};

async function Insert_posts(a: number,c: string,u: string):Promise<void>{
  const client = await new Client().connect(connectionParam);
  const records = [
    {
      id: null,
      author: a,
      content: c,
      url: u,
      favorite: 0
    }
  ];
  const builder = new Query();
  const sql = builder
    .table("posts")
    .insert(records)
    .build();

  console.log(sql);
  const { rows } = await client.execute(sql) /*as { fields: any; rows: Post[] }*/;
}


async function Delete_posts(i: number):Promise<void>{
  const client = await new Client().connect(connectionParam);
  let result = await client.execute(`delete from posts where ?? = ?`, ["id", i]);


}

async function Update_favorite(i: number,f: number){
  const client = await new Client().connect(connectionParam);
  const builder = new Query();
  const sql = builder
    .table("posts")
    .where(Where.field("id").eq(i))
    .select("*")
    .update({ favorite: f })
    .build();
    console.log(sql);
    const { rows } = await client.execute(sql) /*as { fields: any; rows: Post[] }*/;
}


Insert_posts(1,"bob","./data/6f9eacf8-4f54-4e27-97fe-3d114902d5be.PNG");  //Insert_posts(author_id,content,picture_url);
// Search_posts(3,"content");          //Search_posts(posts_id,field);
// Update_favorite(2,100);             //Update_favorite(posts_id,favorite);
// Delete_posts(1);                    //Delete_posts(posts_id);

export {
  Insert_posts,Search_posts,Update_favorite,Delete_posts
}