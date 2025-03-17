let sql
const sqlite3 =require("sqlite3").verbose();

//connect to dB
const db = new sqlite3.Database('booking-form/test.db', sqlite3.OPEN_READWRITE,(err)=>{
    if (err) return console.error(err.message)
});

/*
//create table
sql =`CREATE TABLE users(id INTEGER PRIMARY KEY,first_name,last_name,username,password,email)`
db.run(sql)
*/

//Drop table
//db.run(`DROP TABLE users`)

//Insert data into table
/*
sql = `INSERT INTO users(first_name, last_name, username, password, email) VALUES (?,?,?,?,?)`;
db.run(
    sql,
    ["Meno","owoma","mo_user","1234","mno.ob@gmail.com"],
(err)=>{
    if (err) return console.error(err.message)
});
*/

//query the data
//sql =`SELECT * FROM users`

