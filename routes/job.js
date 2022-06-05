const express = require('express');
const router = express.Router();
const Job = require('../models/job');
const requireLogin = require('../config/requirelogin');
const mongoose = require('mongoose');

router.get('/',(req,res) => {
    Job.find()
    .then((Jobs)=>{
        res.json({Jobs})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/',requireLogin,(req,res) => {
    const {biodata,title,description,salary} = req.body 
    if(!biodata || !title || !description || !salary){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    const job = new Job({
        biodata,
        title,
        description,
        salary,
        user:req.user
    })
    job.save()
    .then(result=>{
        res.json({job:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/:id',(req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No job with id: ${id}`);    
    Job.findOne({_id:id})
    .exec((err,job) => {
        if(err || !job){
            return res.status(422).json({error:err})
        }
        res.json({job})        
    })
})

router.put('/:id',requireLogin,(req,res) => {
    const {id} = req.params;
    const {biodata,title,description,salary} = req.body;
    const updatedJob = {biodata,title,description,salary,_id:id};
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No job with id: ${id}`);    
    Job.findByIdAndUpdate(id,updatedJob,{new:true})
    .exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.delete('/:id',requireLogin,(req,res)=>{
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No job with id: ${id}`);    
    Job.findOne({_id:id})
    .populate("user","_id")
    .exec((err,job)=>{
        if(err || !job){
            return res.status(422).json({error:err})
        }
        if(job.user._id.toString() === req.user._id.toString()){
              job.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})

module.exports = router;
