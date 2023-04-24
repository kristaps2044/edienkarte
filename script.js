const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.database("mydatabase.db");

const app = express;

db.run(`CREATE TABLE IF NOT EXISTS meals (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    menuPozicijas_name TEXT NOT NULL,
    menuPozicijas_info TEXT NOT NULL,
    menuPozicijas_cena DECIMAL(5,2) NOT NULL
  )`);

const data = {
    menuPozicijas_name: 'Crocodile stake',
    menuPozicijas_info: 'Coocked crocodile from Arizona with butter sauce',
    menuPozicijas_cena: 9.99
};
//b.get(`SELECT * FROM meals', (err, data) => {console.log('data', data)});


db.get('SELECT * from meals', (err, data) => {
    console.log('data', data);

    if (!data) {

      db.run(`
        INSERT INTO autors (name)
        VALUES('Leonardo da Vinci');
    `, (one, two) => {
       
      database.run(`
       // iesiidot gleznu
      `)


      });
    }
  })
