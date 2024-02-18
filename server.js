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
    takeAwayOrShipping:String,
    cart:Object
});



const OrderModel = db.model('Order',OrderSchema);

function sendToTheCostumer(arr) {
    // Constructing the HTML content for the email
    const emailContent = `
        <div style="text-align: center; border:1px solid #ccc; border-radius:10px;">
            <img src="https://nada-532bf3415b41.herokuapp.com/static/media/qatrelnada.0e5f6b3698134f8eea016fa547bb69fd.svg" alt="Shop Logo" style="max-width: 200px; margin-bottom: 20px;">
            <h2>!شكرًا على طلبك من قطر الندى</h2>
            <p>رقم الطلب: <span style:"font-wight:900;">${arr.orderNumber}</span></p>
            <h2>معلومات المشتري</h2>
            <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border: 1px solid #ccc;">
                    <thead>
                        <tr>
                        <td style="padding: 10px;">${arr.firstName} ${arr.lastName}</td>
                            <th style="padding: 10px;">الإسم</th>
                        </tr>
                        <tr>
                        <td style="padding: 10px;">${arr.house} ${arr.city} ${arr.street}</td>
                            <th style="padding: 10px;">العنوان</th>
                        </tr>
                        <tr>
                        <td style="padding: 10px;">${arr.phoneNumber}</td>
                        <th style="padding: 10px;">رقم الهاتف</th>

                        </tr>
                    </thead>
                </table>
            <h3>:تفاصيل الطلب</h3>
            <div style="text-align: center; margin: 0 auto; width: 80%;">
            <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border: 1px solid #ccc;">
                <thead>
                    <tr>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">سعر الكميّة</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">سعر الوحدة</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">الكميّة</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">رقم العطر البديل</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">اسم المنتج</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">صورة المنتج</th>
                    </tr>
                </thead>
    ${arr.cart.map((item) => { 
        if (item.product.replace) {
            return `
                    <tbody>
                        <tr>
                        <td style="padding: 10px;">${item.product.price * item.quantity}</td>
                        <td style="padding: 10px;">${item.product.price}</td>
                        <td style="padding: 10px;">${item.quantity}</td>
                        <td style="padding: 10px;">${item.product.replace}</td>
                        <td style="padding: 10px;">${item.product.real}</td>
                        <td style="padding: 10px;"><img src="https://nada-532bf3415b41.herokuapp.com/${item.product.womenImg}" alt="Item" style="max-width: 60px;"></td>
                        </tr>
                    </tbody>
            `;
        } else {
            return `
                    <tbody>
                        <tr>
                        <td style="padding: 10px;">${item.product.price * item.quantity}</td>
                        <td style="padding: 10px;">${item.product.price}</td>
                        <td style="padding: 10px;">${item.quantity}</td>
                        <td style="padding: 10px;">X</td>
                        <td style="padding: 10px;">${item.product.real}</td>
                        <td style="padding: 10px;"><img src="https://nada-532bf3415b41.herokuapp.com/${item.product.image}" alt="Item" style="max-width: 60px;"></td>
                        </tr>
                    </tbody>
            `;
        }
    }).join('')}
    </table>
</div>

                <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border: 1px solid #ccc;">
                    <thead>
                        <tr>
                            <td style="padding: 10px; font-size:25px;">${arr.takeAwayOrShipping}</td>
                            <th style="padding: 10px; font-size:25px;">طريقة التوصيل</th>
                        </tr>
                    </thead>
                </table>
                <table style="background-color: #f1f3f7; width: 100%; margin-bottom: 20px; border-collapse: collapse; border: 1px solid #ccc;">
                    <thead>
                        <tr>
                            <th style="padding: 10px; font-size:25px;">${arr.finalPrice}₪</th>
                            <th style="padding: 10px; font-size:25px;"> السعر النهائي <br> <span style:"font-size:15px">(لا يشمل التوصيل)</span> </th>
                        </tr>
                    </thead>
                </table>


        </div>
    `;

    const mailOptions = {
        from: 'miniuforu@gmail.com',
        to: arr.email,
        subject: '  شكرًا على طلبيتك / ' + arr.orderNumber  + '#',
        html:emailContent ,
      };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Error sending email:', error);
        } else {
          console.log('Email sent:', info.response);
        }
      });
      
  }


  // <img src="https://nada-532bf3415b41.herokuapp.com/static/media/qatrelnada.0e5f6b3698134f8eea016fa547bb69fd.svg" alt="Shop Logo" style="max-width: 200px; margin-bottom: 20px;">

  function sendToTheManager(arr) {
    // Constructing the HTML content for the email
    const emailContent = `
        <div style="text-align: center; border:1px solid #ccc; border-radius:10px;">
            <h2>!شكرًا على طلبك من قطر الندى</h2>
            <p>رقم الطلب: <span style:"font-wight:900;">${arr.orderNumber}</span></p>
            <h2>معلومات المشتري</h2>
            <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border: 1px solid #ccc;">
                    <thead>
                        <tr>
                        <td style="padding: 10px;">${arr.firstName} ${arr.lastName}</td>
                            <th style="padding: 10px;">الإسم</th>
                        </tr>
                        <tr>
                        <td style="padding: 10px;">${arr.house} ${arr.city} ${arr.street}</td>
                            <th style="padding: 10px;">العنوان</th>
                        </tr>
                        <tr>
                        <td style="padding: 10px;">${arr.phoneNumber}</td>
                        <th style="padding: 10px;">رقم الهاتف</th>

                        </tr>
                    </thead>
                </table>
            <h3>:تفاصيل الطلب</h3>
            <div style="text-align: center; margin: 0 auto; width: 80%;">
            <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border: 1px solid #ccc;">
                <thead>
                    <tr>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">سعر الكميّة</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">سعر الوحدة</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">الكميّة</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">رقم العطر البديل</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">اسم المنتج</th>
                    <th style="padding: 10px; border-bottom: 1px solid #ccc;">صورة المنتج</th>
                    </tr>
                </thead>
    ${arr.cart.map((item) => { 
        if (item.product.replace) {
            return `
                    <tbody>
                        <tr>
                        <td style="padding: 10px;">${item.product.price * item.quantity}</td>
                        <td style="padding: 10px;">${item.product.price}</td>
                        <td style="padding: 10px;">${item.quantity}</td>
                        <td style="padding: 10px;">${item.product.replace}</td>
                        <td style="padding: 10px;">${item.product.real}</td>
                        <td style="padding: 10px;"><img src="https://nada-532bf3415b41.herokuapp.com/${item.product.womenImg}" alt="Item" style="max-width: 60px;"></td>
                        </tr>
                    </tbody>
            `;
        } else {
            return `
                    <tbody>
                        <tr>
                        <td style="padding: 10px;">${item.product.price * item.quantity}</td>
                        <td style="padding: 10px;">${item.product.price}</td>
                        <td style="padding: 10px;">${item.quantity}</td>
                        <td style="padding: 10px;">X</td>
                        <td style="padding: 10px;">${item.product.real}</td>
                        <td style="padding: 10px;"><img src="https://nada-532bf3415b41.herokuapp.com/${item.product.image}" alt="Item" style="max-width: 60px;"></td>
                        </tr>
                    </tbody>
            `;
        }
    }).join('')}
    </table>
</div>

                <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse; border: 1px solid #ccc;">
                    <thead>
                        <tr>
                            <td style="padding: 10px; font-size:25px;">${arr.takeAwayOrShipping}</td>
                            <th style="padding: 10px; font-size:25px;">طريقة التوصيل</th>
                        </tr>
                    </thead>
                </table>
                <table style="background-color: #f1f3f7; width: 100%; margin-bottom: 20px; border-collapse: collapse; border: 1px solid #ccc;">
                    <thead>
                        <tr>
                            <th style="padding: 10px; font-size:25px;">${arr.finalPrice}₪</th>
                            <th style="padding: 10px; font-size:25px;"> السعر النهائي <br> <span style:"font-size:15px">(لا يشمل التوصيل)</span> </th>
                        </tr>
                    </thead>
                </table>


        </div>
    `;

    const mailOptions = {
        from: 'miniuforu@gmail.com',
        to: 'qatr.elnada.store@gmail.com',
        subject: '  شكرًا على طلبيتك / ' + arr.orderNumber  + '#',
        html:emailContent ,
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
    let takeAwayOrShipping = req.body.takeAwayOrShipping
    let cart       = req.body.cart
    let arr = {
        firstName:firstName,
        lastName:lastName  , 
        email:email      ,
        phoneNumber:phoneNumber,
        city:city       ,
        street:street  ,
        house:house,
        orderNumber:orderNumber,
        finalPrice:finalPrice,
        takeAwayOrShipping:takeAwayOrShipping,
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
        takeAwayOrShipping,
        cart       
    })
    if(temp !== null)
    {
        sendToTheCostumer(arr)
        sendToTheManager(arr)
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