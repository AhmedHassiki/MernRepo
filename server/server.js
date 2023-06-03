const express = require("express");
const Products = require('./routes/product')
const User = require('./routes/userRoute')
const Cart = require('./routes/cartRoute')

const app = express();
require('dotenv').config();
const connectDB = require('./config/connectDB');
connectDB();

app.use(express.json());
app.use('/api/product', Products);
app.use('/api/auth', User );
app.use('/api/cart', Cart );

const PORT = process.env.PORT || 4040;

app.listen(PORT,(err)=>{
    err? console.log(err) : console.log(`server is listening on ${PORT}`)
})


