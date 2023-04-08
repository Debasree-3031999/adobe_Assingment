

const User=require('../Model/user.model');
const Post=require('../Model/post.model');

//all user get data
const getData=async(req,res)=>{
    try {
        const user=await User.find().lean().exec();
        return res.status(200).send({userget:user})
    } catch (error) {
        return res.status(500).send({message:"something went wrong"})
    }
};

//all user post data
const postData=async(req,res)=>{
    try {
        const user=await User.create(req.body);
        return res.status(201).send({userpost:user})
    } catch (error) {
        return res.status(500).send({message:"something went wrong to posting user data"})
    }
}

//get user using id
const getUserById=async(req,res)=>{
    try {
        const user= await User.findById(req.params.id).lean().exec();
        return res.status(200).send({getUserById:user})
    } catch (error) {
        
    }
}

//update data by user Id

const updateDataByUserId=async(req,res)=>{
    try {
        const user=await User.findByIdAndUpdate(req.params.id).lean().exec();
        return res.status(200).send({updateDataByUserId:user})
    } catch (error) {
        return res.status(500).send({message:"something went wrong  when updateing user by id "})
    }
}

// delete  data by user id

const deleteDataByUserId = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).lean().exec();
        return res.status(200).send({ updateDataByUserId: user })
    } catch (error) {
        return res.status(500).send({ message: "something went wrong  when deleting user by id " })
    }
}



module.exports={
    getData,
    postData,
    getUserById,
    updateDataByUserId,
    deleteDataByUserId,
}