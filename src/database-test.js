const fs = require('fs');
const Database = require('better-sqlite3');

async function setup() {
    const db = new Database('src/migrations/taskiq.sqlite', { verbose: console.log });
    const migration = fs.readFileSync('src/migrations/001-taskiq.sql', 'utf8');
    db.exec(migration);
    const sql = await db.prepare('SELECT * FROM task1')
    const persons = sql.all()
    console.log( JSON.stringify(persons , 0, 2) );
}

setup()