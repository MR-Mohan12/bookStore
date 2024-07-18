import express  from "express"
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/bookRoute.js"
import userRoute from "./route/userRoute.js"


const app = express();
app.use(cors());
app.use(express.json());


import mongoose from "mongoose";
dotenv.config();


const PORT = process.env.PORT || 3000 
const MongoDBURI  = process.env.MongoDBURI;

// connect to MongoDb

try {
     mongoose.connect(MongoDBURI);
     console.log("Connected to mongoDB Successfully");
} catch (error) {
    console.log("Error",error);
}

//defining Routes
app.use("/book",bookRoute)
app.use("/user",userRoute);
app.use("/login",userRoute);



app.listen(PORT,()=>{
    console.log(`Server is  listening on port${PORT}`);
});

