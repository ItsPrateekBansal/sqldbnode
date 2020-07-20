const mysql = require('mysql2');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'myuser',
  password : 'myuser',
  database : 'mytestdb'
});

 connection.query(
   `CREATE TABLE IF NOT EXISTS persons(
     ID INT AUTO_INCREMENT PRIMARY KEY,
     NAME VARCHAR(50) NOT NULL,
     AGE INT NOT NULL,
     CITY VARCHAR(30)
   )`,
   function(err,results){
     if(err){
       console.error(err);
     }
     else{
       console.log("Table Created");
     }
   }
 )

 connection.end();
