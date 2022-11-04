const mysql= require("mysql2")
const con =mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"mypassword",
    database:"test1"
})

con.connect((err)=>{

    if(err){

        console.log(`error in connection with DB ${err}` )
    }else {
        console.log("connected to DB")
    }
})

module.exports= con