import mongoose from "mongoose";
// import { Color } from "colors";
export const connectDB =async ()=>{
try {
const conn = await mongoose.connect(process.env.mongo_DB)
console.log(`Connected to database ${conn.connection.host}`)
} catch {error} {
    console.log("error")

}
} 