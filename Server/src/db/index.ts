import {Client, Pool} from "pg";


let client: Pool | undefined;

export async function connect({
                                  user,
                                  host,
                                  database,
                                  password
                              }: { user: string, host: string, database: string, password: string }) {
    const currentClient = new Pool({
        user,
        host,
        database,
        password,
    });
    console.log('Connecting to database...');
    await currentClient.connect();
    console.log('Connected to database');
    client = currentClient;
}

export default function getDb(): Pool {
    if (!client) {
        throw new Error('Database not connected');
    }
    return client;
}
