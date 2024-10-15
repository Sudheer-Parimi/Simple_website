const express= require('express');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

const User= require('../models/user');

const router=express.Router();

router.post('/signup', async (req, res) => {
    const { username, password, confirmPassword } = req.body;

    if (!username || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Hashing the password
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // New user creation
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();


        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error', error:error.message});
    }
});

// Createing login route

router.post('/login',async(req,res)=>{
    const{username,password}=req.body;

    try{
        const user=await User.findOne({username});

        if(!user || !(await bcrypt.compare(password,user.password))){
            return res.status(400).json({message:'Invalid credentials'});
        }
        const token= jwt.sign({id:user._id},process.env.JWT_SECRET_KEY,{expiresIn: '1h'});
        
        res.json({token});
    }
    catch(error){
        res.status(500).json({error:'Internal server error',error:error.message});
    }
});

module.exports=router;