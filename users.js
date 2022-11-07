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

    mysqlConnect.query("INSERT INTO users SET user_name= ?, user_id=?, email=?,org=?", data, (err,result)=>{
        if (err) {
                    res.send("error"+ err)
                } else {
                    res.send(result)
                }
    })
},
    updateuser: function (req,res,params) {
        const data = [req.body.user_name, req.body.user_id, params]
        mysqlConnect.query("UPDATE users SET user_name= ?, user_id=? where id =?",data,

            (err, result) => {
                if (err) {
                    res.send("error"+ err)
                } else {
                    res.send(result)
                }

            })
    },
deleteuser: function(req,res,params){

    mysqlConnect.query("DELETE FROM users WHERE id=" + params, (err,result)=>{
        if (err) {
            res.send("error"+ err)
        } else {
            res.send(result)
        }
    })
    
}



}

module.exports = Users