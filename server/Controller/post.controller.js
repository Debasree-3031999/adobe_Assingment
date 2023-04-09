const User=require('../Model/user.model');
const Post=require('../Model/post.model');

//post data
const postData=async(req,res)=>{
    try {
        let post=await Post.create(req.body);
        return res.status(201).send({createPost:post})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:error})
    }
};

// get post by id
const getPostById=async(req,res)=>{
    try {
        const post=await Post.findById(req.params.id).populate().lean().exec();
        return res.status(200).send({getPostById:post})
    } catch (error) {
        console.log(error)
        return res.status(500).send({message:"something went wrong when get post by id"})
    }
}

// put post by id
const putPostById = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id,req.body).lean().exec();
        return res.status(200).send({ putPostById: post })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "something went wrong when put post by id" })
    }
}

// delete post by id
const deletePostById = async (req, res) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id,req.body).lean().exec();
        return res.status(200).send({ deletePostById: post })
    } catch (error) {
        console.log(error)
        return res.status(500).send({ message: "something went wrong when delete post by id" })
    }
}

module.exports={
    postData,
    getPostById,
    putPostById,
    deletePostById
}