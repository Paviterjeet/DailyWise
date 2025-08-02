import e from "express";
import dotenv from "dotenv";

dotenv.config();

const app = e();

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.listen(process.env.PORT || 4000,()=>{
    console.log(`http://localhost:${process.env.PORT || 4000}`)
})

