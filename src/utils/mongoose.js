import { connect, connection } from "mongoose";

const conn = {
    isConnected : false
}

export const dbConnection = async () => {
    if(conn.isConnected) return
  
    const url = process.env.NODE_ENV === "development"? process.env.MONGO_LOCAL_URL : process.env.MONGO_CLOUD_URL
   
    const db = await connect(url)
    
    conn.isConnected = true

}

connection.on("connected",()=>{
    console.log("DB is connected")
})

connection.on("error",(err)=>{
    console.log(err)
})