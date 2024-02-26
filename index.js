import express from 'express';
import mongoose from 'mongoose';
import noteRoute from './routes/noteRoute.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(express.json());
const port = 2000

app.use('/api/Notes', noteRoute);

app.listen(port ,()=>{
    console.log(`this server is running on port ${port}`);

})
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log("The database is connected");
})