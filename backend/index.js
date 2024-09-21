const express = require("express")
const Userrouter = require('./routers/UserRouter')
const propertyRouter = require('./routers/propertyRouter')
const cors = require("cors")
const app = express()
const port = 5000

// middleware

app.use(cors({
    origin:'http://localhost:3000'
}))
app.use(express.json())
app.use('/user',Userrouter)
app.use('/property',propertyRouter)



app.get("/",(req,res) => {
    res.send('hello world')
    // console.log(req);
})

app.get("/add",(req,res) => {
    res.send('response add')
    // console.log(req);
})


app.get("/add/getall",(req,res) => {
    res.send('all get')
    // console.log(req);
})

app.listen(port,() => {
    console.log("server started");
    
    },)