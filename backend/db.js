// db.js
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'db', 'dua_main.sqlite'), (err) => {
  if (err) console.error('Error connecting to DB:', err.message);
  else console.log('Connected to SQLite DB.');
});

module.exports = db;
