const express=require('express');

const {postData,getPostById,putPostById,deletePostById}=require('../Controller/post.controller');

const postRouter=express.Router();

postRouter.get('/:id',getPostById);

postRouter.post("/",postData);

postRouter.put("/:id",putPostById);

postRouter.delete("/:id",deletePostById);

module.exports=postRouter;