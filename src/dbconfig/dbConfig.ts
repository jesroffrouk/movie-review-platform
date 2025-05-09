import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGODB_URI!)
        const connection = mongoose.connection
        connection.on('connected',()=>{
            console.log("Mongo db connected");
        })
        connection.on('error',(error)=>{
            console.log("mongo db connection error :" + error)
            process.exit()
            })
    } catch (error) {
        console.log("something went wrong while connecting to database")
        console.log(error)
    }
}