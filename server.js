const express=require('express');
const mongoose =require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const authRoutes=require('./routes/auth');

require('dotenv').config();

const app=express();

app.use(cors());

// using body parser middleware
app.use(bodyParser.json());

// connecting to mongoDB

mongoose.connect(process.env.MONGODB_URI,{ serverSelectionTimeoutMS: 5000 })
    .then(()=> console.log('Connected to mongoDB'))
    .catch(error=> console.log(error));

app.get('/',(req,res)=>{
    console.log("Website is working");
    res.send("Hello Welcome to the website");
});

// Authentication routes

app.use('/api/auth',authRoutes);

const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server is running in port ${PORT}`);
});


