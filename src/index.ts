import express from 'express';
import testrouter from './routes/index'
const app = express();
const port = 3000;


app.use("/api",testrouter);


app.listen(port,()=>{
  console.log(`listening on port ${port}`)
})
app.get("/",(req,res)=>{
  res.send("hello");
})
app.get("/*",(req,res)=>{
  res.status(404).send("<h1>404 : ( </h1>");
})
