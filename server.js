import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import { connectToDB } from './config/database.js';
import cors from 'cors'
import authRoutes from './routes/authRoutes.js'

const app = express();
dotenv.config();
app.use(express.json())
app.use(cors())

app.listen(process.env.PORT, ()=> {
    console.log('Server Running on port '.bgGreen.white,process.env.PORT.bgGreen.white);
})

connectToDB();
app.get('/',(req,res) => {
    res.send('Welcome')
})

app.use('/api',authRoutes)

app.use((req,res)=>{
    return res.send('Invalid response')
})
