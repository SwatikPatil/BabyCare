const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    Days_For_Rent:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    contactNo:{
        type:Number,
        required:true
    },
    babyage:{
        type:String,
        required:false
    },
    category: {
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

module.exports = mongoose.model("Product",ProductSchema);