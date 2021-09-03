import { Query,Where } from "https://deno.land/x/sql_builder/mod.ts";
import { Client } from "https://deno.land/x/mysql/mod.ts";

  
import {
  assertEquals
} from "https://deno.land/std@0.51.0/testing/asserts.ts";

// Post 型定義
interface Post {
  id: number;
  author: number;
  content: string;
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

const client = await new Client().connect(connectionParam);

async function testQueryInsert() {
  const builder = new Query();
  const records = [
    {
      author: 1,
      content: "foo",
      id: 1
    },
    {
      id: 2,
      author: 2,
      content: "bar"
    }
  ];

  const sql = builder
    .table("posts")
    .insert(records)
    .where(Where.field("id").eq(1))
    .select("*")
    .build();

    console.log(sql);
    const { rows } = await client.execute(sql) as { fields: any; rows: Post[] };
    console.log(rows);
};


testQueryInsert();