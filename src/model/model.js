const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, ()=> {
    console.log("Server Started");
});

// Connexion à la base de donnée

const db = mysql.createConnection(
    {
        host: '127.0.0.1',
        port: '3306',
        user: 'root',
        password: '',
        database: 'hackatonynov'
    }
)

// vérification si l'utilisateur est connecté ou non

db.connect((err) => {
    if(!err){
        console.log("Database connected successfully")
    } else {
        console.log("Unable te connect to DB")
    };
})

function queryPromise(sql, values=[]){
    return new Promise((resolve, reject) => {
        db.query(sql, values, (error, results) => {
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        })
    });
}