import mongoose from "mongoose"
export const connectToDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to Database'.bgCyan.white)
    }catch(err){
        console.log('Error Connecting To Database'.bgRed.white);
    }
}