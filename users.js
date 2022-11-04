const mysqlConnect = require("./config")

Users = {
    getall: function (req, res) {
        mysqlConnect.query("select * from users", (err, result) => {
            if (err) {
                res.send("error")
            } else {
                res.send(result)
            }

        })


    },
createuser: function(req,res){
    const data = req.body

    mysqlConnect.query("INSERT INTO users SET ?", data, (err,result)=>{
        if (err) {
                    res.send("error"+ err)
                } else {
                    res.send(result)
                }
    })
},
    updateuser: function (req,res,params) {
        const data = [req.body.first_name, req.body.last_name, params]
        mysqlConnect.query("UPDATE users SET first_name= ?, last_name=? where user_id =?",data,

            (err, result) => {
                if (err) {
                    res.send("error"+ err)
                } else {
                    res.send(result)
                }

            })
    },
deleteuser: function(req,res,params){

    mysqlConnect.query("DELETE FROM users WHERE user_id=" + params, (err,result)=>{
        if (err) {
            res.send("error"+ err)
        } else {
            res.send(result)
        }
    })
    
}



}

module.exports = Users