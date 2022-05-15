 // import mysql
 // konek database

 const mysql = require("mysql2")

 //datavase credential
 const connection = mysql.createConnection({
     host : 'localhost',
     user : 'wahyu93',
     password : 'wahyu1993',
     database : 'mobile_legend'
 })

 //integrating
 connection.connect((error) => {
     if(error) throw error
     console.log('database connected!')
 })

 module.exports = connection