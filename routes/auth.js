const express = require('express')
const router = express.Router()
var mongoose = require('mongoose');
const User = require('../models/user');
var cors = require('cors');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

mongoose.connect(keys.MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('connected', function(){
  console.log("MongoDB Connected Successfully");
});
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.post('/signup',(req,res)=>{
    const {username,password,email} = req.body 
    if(!username || !password || !email){
	res.json({
	  status: 'fail'
	})
    }
    User.findOne({username:username})
    .then((Saveduser)=>{
        if(Saveduser){
	res.json({
	  status: 'fail'
	})
        }
        const user = new User({
            username,
            password,
            email
        })
        user.save()
        .then(user=>{
	   res.json({
	       status: 'success'
	    })
        })
        .catch(err=>{
	res.json({
	  status: 'fail'
	})
            console.log(err)
        })
       
    })
    .catch(err=>{
	res.json({
	  status: 'fail'
	})
      console.log(err)
    })
  })

  router.post('/signin',(req,res)=>{
    const {username,password} = req.body
    if(!username || !password){
	res.json({
	  status: 'fail'
	})
    }
    User.findOne({username:username})
    .then(User=>{
        if(!User){
	   res.json({
	       status: 'fail'
	    })
        }
        if(User.password === password){
	   res.json({
	       status: 'success'
	    })
        }
        else{
	   res.json({
	       status: 'fail'
	    })
        }
    })
})

module.exports = router;
const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3001)
