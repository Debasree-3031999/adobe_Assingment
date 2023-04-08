const express=require("express");

const {getData,getUserById,postData,updateDataByUserId,deleteDataByUserId} =require('../Controller/user.controller');

const userRouter=express.Router();

userRouter.post('/',postData);

userRouter.get('/analytics',getData);

userRouter.get('/:id',getUserById);

userRouter.put('/:id',updateDataByUserId);

userRouter.delete('/:id',deleteDataByUserId);

module.exports=userRouter;