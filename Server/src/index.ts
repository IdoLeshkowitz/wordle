
import {connect} from "./db";
import app from "./app";
import config from "./config";

async function main() {
    const {db, host, port} = config();
    await connect(db);
    app.listen(+port, host, () => {
        console.log(`Server is running on http://${host}:${port}`);
    });
}
main().catch(console.error);