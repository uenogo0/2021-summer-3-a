import {
    ClientMySQL,
    NessieConfig,
} from "https://deno.land/x/nessie@2.0.1/mod.ts";

/** Select one of the supported clients */
// const client = new ClientPostgreSQL({
//     database: "nessie",
//     hostname: "localhost",
//     port: 5432,
//     user: "root",
//     password: "pwd",
// });

const client = new ClientMySQL({
    hostname: "localhost",
    port: 3306,
    username: "root",
    password: "Passw0rd",
    // password: "pwd", // uncomment this line for <8
    db: "deno-dev",
});

//export default client;

// const client = new ClientSQLite("./sqlite.db");

/** This is the final config object */
const config: NessieConfig = {
    client,
    migrationFolders: ["./db/migrations"],
    seedFolders: ["./db/seeds"],
};

export default config;

// const configMySql = {
//     migrationFolder: `./migrations`,
//     connection: {
//       hostname: "localhost", // hostからDockerのMySQLコンテナに繋ぐ
//       port: 3306,
//       username: "root",
//       password: "Passw0rd",
//       db: "deno-dev",
//     },
//     dialect: "mysql",
//   };

//   export default configMySql;