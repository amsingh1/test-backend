const express = require("express")

const app = express()

const cors = require("cors")


const users = require("./users")

const dotenv = require("dotenv")

dotenv.config()

app.use(cors())
app.use(express.json())

app.get("/", (req, res) =>
    users.getall(req,res,)
)

app.put("/:id",(req,res)=>
users.updateuser(req,res,req.params.id))

app.post("/",(req,res)=>
users.createuser(req,res))

app.delete("/:id",(req,res)=>{
    users.deleteuser(req,res,req.params.id)
})

app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT} `))