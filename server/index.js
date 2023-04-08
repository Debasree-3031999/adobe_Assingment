const express=require('express');
const connect=require('./Database/db');
require('dotenv').config();
const port=process.env.PORT||5000;
const cors=require('cors');
const userRouter=require('./Router/user.router');
const postRouter=require("./Router/post.router")


const app=express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


app.use('/users',userRouter);
app.use('/posts',postRouter)

app.listen(port,async()=>{
    try {
        await connect();
        console.log('connected to DB')
    } catch (error) {
        console.error(error.message)
    }
    console.log(  `listening on port ${port}`)
})