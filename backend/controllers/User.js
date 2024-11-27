const express = require('express');
const router = express.Router();
const User = require('../models/User')

router.post('/getintouch' , async(req , res)=>{
    try {
       
        const {fullName , email , phoneNumber , organizationName , description} = req.body;
        const user = new User({fullName , email , phoneNumber , organizationName , description});
        const responseData = await  user.save();

        res.send({
            status:true,
            message:"Successfully Recieved",
            data:responseData
        });
       
    } catch (error) {
        console.log(error.message);
       return  res.status(500).json({
            status:false,
            message:error.message,
           
        })
    }
})

module.exports = router;