import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const connection = mongoose
.connect(process.env.MONGO_URI)
.then(function(){
    console.log("connected");
})
.catch(function(err){
    console.log(err);
});

export default connection;