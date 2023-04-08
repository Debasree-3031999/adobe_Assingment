const mongoose=require("mongoose");

const PostSchema=new mongoose.Schema(
    {
        content:{type:String, required:true},
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        },
        like:{type:String,required:true}
    },
    {
        timestamps: { createdAt: 'createdOn', updatedAt: 'ModifiedOn' }
    },
    {
        versionKey: false,
        timestamps: true,
    }

)

const Post=mongoose.model("post",PostSchema);
module.exports=Post;