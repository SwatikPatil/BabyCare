const express = require('express');
const app = express();
const mongoose  = require('mongoose');
const PORT = process.env.PORT || 5000;
const {MONGOURI} = require('./config/keys');
const user = require('./routes/Auth');
const product = require('./routes/product');
const job = require('./routes/job');

app.use(express.json());

app.use('/user',user);
app.use('/products',product);
app.use('/job',job);

mongoose.connect(MONGOURI,{ useNewUrlParser:true,useUnifiedTopology: true  })
    .then(() => {
        console.log('MONGODB Connected')
        return app.listen({port:PORT})             
    })
    .then((res) => {
        console.log(`Server Running at http://localhost:${PORT}`)
    })
    .catch((err) => console.log(err))


