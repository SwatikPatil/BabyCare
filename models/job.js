const mongoose = require('mongoose');

const JobSchema = mongoose.Schema({
    biodata:{
        name:{
            type:String,
            required:true
        },
        Experience:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        photo:{
            type:String,
            required:true
        },
        contactno:{
            type:Number,
            required:true
        },
        aadharno:{
            type:Number,
            required:true
        }
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
})

module.exports = mongoose.model("Job",JobSchema);