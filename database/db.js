const sqlite3 =  require('sqlite3').verbose();
const path = require('path')
const dbPath = path.resolve(__dirname, process.env.SQLITE_URL);

const db = new sqlite3.Database(dbPath, (err) => {
    if(err){
        return console.error(err.message);
    }
    console.log('Connected to the SQLite Database.')
});

module.exports = db;