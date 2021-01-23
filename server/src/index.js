require('dotenv').config();
const app = require('./app');
require('./database');

async function main() {
    await app.listen(process.env.PORT || app.get('port'));
    console.log("Server on port", app.get('port'));
}

main();