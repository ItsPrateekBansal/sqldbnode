const mysql = require('mysql2');
const insert = {
  name: process.argv[2],
  age: parseInt(process.argv[3]),
  city: process.argv[4]
}

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'myuser',
  password : 'myuser',
  database : 'mytestdb'
});

connection.query(
  `INSERT INTO persons(NAME,AGE,CITY) VALUES(
    '${insert.name}',
    ${insert.age},
    '${insert.city}'
  )`,
  function(err,results){
    if(err){
      console.error(err);
    }
    else{
      console.log("Inserted Successfully");
    }
  }
)

connection.end();
