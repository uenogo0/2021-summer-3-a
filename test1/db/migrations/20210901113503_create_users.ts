import { AbstractMigration, Info, ClientMySQL} from "https://deno.land/x/nessie@2.0.1/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
        await this.client.execute(`DROP TABLE IF EXISTS users`);
        await this.client.query("CREATE TABLE users (id int AUTO_INCREMENT, name varchar(256), password varchar(256),favorite int NOT NULL, follow int NOT NULL,follower int NOT NULL ,PRIMARY KEY(id))");
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        await this.client.query("DROP TABLE users");
    }
}
