import { AbstractMigration, Info, ClientMySQL} from "https://deno.land/x/nessie@2.0.1/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
        await this.client.query(`DROP TABLE IF EXISTS posts`);
        await this.client.query("CREATE TABLE posts (id int NOT NULL AUTO_INCREMENT, author int NOT NULL,PRIMARY KEY(id))");
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        await this.client.query("DROP TABLE posts");
    }
}
