import { AbstractMigration, Info, ClientMySQL } from "https://deno.land/x/nessie@2.0.1/mod.ts";

export default class extends AbstractMigration<ClientMySQL> {
    /** Runs on migrate */
    async up(info: Info): Promise<void> {
        await this.client.query(
            "ALTER TABLE posts ADD(content varchar(256))"
        );
    }

    /** Runs on rollback */
    async down(info: Info): Promise<void> {
        await this.client.query(
            "ALTER TABLE posts DROP content"
        );
    }
}
