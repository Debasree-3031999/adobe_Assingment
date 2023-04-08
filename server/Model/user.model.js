const mongoose=require("mongoose");

const UserSchema=new mongoose.Schema({
    name: { type: String, required: true },
     email: { type: String, required: true},
    bio: { type: String, required: false },

},
{
    timestamps:{createdAt:'createOn',updatedAt:'ModifiedOn' }
},
{
    versionKey: false,
    timestamps: true,
})

const User=mongoose.model("user",UserSchema);
module.exports =User;