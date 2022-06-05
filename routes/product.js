const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = require('../models/product');
const requireLogin = require('../config/requirelogin');

router.get('/',(req,res) => {
    Product.find()
    .then((products)=>{
        res.json({products})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.post('/',requireLogin,(req,res)=> {
    const {name,description,image,price,quantity,Days_For_Rent,address,contactNo,category} = req.body 
    if(!name || !description || !image || !price || !quantity|| !Days_For_Rent || !address || !contactNo || !category){
      return  res.status(422).json({error:"Plase add all the fields"})
    }
    const product = new Product({
        name,description,
        image,
        price,
        quantity,
        Days_For_Rent,
        address,
        contactNo,
        category,
        user:req.user
    })
    product.save()
    .then(result=>{
        res.json({product:result})
    })
    .catch(err=>{
        console.log(err)
    })
})

router.get('/:id',(req,res) => {
    const {id} = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);    
    Product.findOne({_id:id})
    .exec((err,product) => {
        if(err || !product){
            return res.status(422).json({error:err})
        }
        res.json({product})        
    })
})

router.put('/:id',requireLogin,(req,res) => {
    const {id} = req.params;
    const {name,description,image,price,quantity,address,contactNo,Days_For_Rent,category,babyage} = req.body;
    const updatedProduct = {name,description,image,price,quantity,address,contactNo,Days_For_Rent,category,babyage,_id:id};
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);    
    Product.findByIdAndUpdate(id,updatedProduct,{new:true})
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
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);    
    Product.findOne({_id:id})
    .populate("user","_id")
    .exec((err,product)=>{
        if(err || !product){
            return res.status(422).json({error:err})
        }
        if(product.user._id.toString() === req.user._id.toString()){
              product.remove()
              .then(result=>{
                  res.json(result)
              }).catch(err=>{
                  console.log(err)
              })
        }
    })
})

module.exports = router;