import express from 'express'
import colors from 'colors'
import dotenv from 'dotenv'
import { connectToDB } from './config/database.js';
import superAdminRoutes from './routes/superAdminRoutes.js'

const app = express();
dotenv.config();
app.use(express.json())

app.listen(process.env.PORT, ()=> {
    console.log('Server Running on port ',process.env.PORT);
})

connectToDB();

app.use('/api',superAdminRoutes)

app.use((req,res)=>{
    return res.send('Invalid response')
})
