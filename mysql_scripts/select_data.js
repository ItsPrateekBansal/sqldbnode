const mysql = require('mysql2');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'myuser',
  password : 'myuser',
  database : 'mytestdb'
});

connection.query(
  "SELECT * FROM  persons",
  function(err,results,fields){
    if(err){
      console.error(err);
    }
    else{
      console.log("Read Successfully");
      console.log(results);
    }
  }
)
connection.end();
