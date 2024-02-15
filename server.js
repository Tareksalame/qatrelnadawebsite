const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const db = require('mongoose');
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Connect to MongoDB database
const dbURI = process.env.MONGODB_URI;
app.use(express.static('nada/build'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
db.connect(dbURI);



const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'miniuforu@gmail.com',
      pass: 'ebradgkyfidnmywd',
    },
  });
  

const OrderSchema = db.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phoneNumber:String,
    city:String,
    street:String,
    house:String,
    orderNumber:String,
    finalPrice:Number,
    setTakeAwayOrShipping:String,
    cart:Object
});

const OrderModel = db.model('Order',OrderSchema);

function sendToTheCostumer(arr) {
    const mailOptions = {
        from: 'miniuforu@gmail.com',
        to: arr.email,
        subject: 'Welcome' + ' ' + arr.firstName,
        text:'Thank You For Choosing us,\nwe will call you back soon.\nif you have any question\nyou can contact us on Whatsapp\n' ,
      };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
      
  }





app.post('/BuyNow',async(req,res)=>
{
    let firstName  = req.body.firstName
    let lastName   = req.body.lastName
    let email      = req.body.email
    let phoneNumber= req.body.phoneNumber
    let city       = req.body.city
    let street     = req.body.street
    let house      = req.body.house
    let orderNumber= req.body.orderNumber
    let finalPrice = req.body.finalPrice
    let setTakeAwayOrShipping = req.body.setTakeAwayOrShipping
    let cart       = req.body.cart
    let arr = {
        firstName:firstName,
        lastName:lastName  , 
        email:email      ,
        phoneNumber:phoneNumber,
        city:city       ,
        street   :street  ,
        house      :house,
        orderNumber:orderNumber,
        finalPrice:finalPrice,
        setTakeAwayOrShipping:setTakeAwayOrShipping,
        cart:cart
    }
    const temp = await OrderModel.insertMany({
        firstName,
        lastName  , 
        email      ,
        phoneNumber,
        city       ,
        street     ,
        house      ,
        orderNumber,
        finalPrice,
        setTakeAwayOrShipping,
        cart       
    })
    if(temp !== null)
    {
        sendToTheCostumer(arr)
        res.json('done')
    }
    else
    {
        res.json('error')
    }
})



app.get('/*',(req,res)=>
{
    res.sendFile(path.join(__dirname, 'nada/build', 'index.html'));
})

app.listen(
    process.env.PORT,()=>console.log('Server Is Running On Port', process.env.PORT)
)