const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/api/chk',(req,res)=>
{
    let mobileNumber = req.body.mobileNumber; 
    let otpNumber =  Math.floor((Math.random()*99999) + 10000);
    console.log(otpNumber);

    const twilio = require('twilio');
    const accountSid = "AC1d949a979d300735b367f90d27eae347";
    const authToken  = "683d4d07768ce5fe7eaf980ad0744ce4";

    let client = new twilio(accountSid, authToken);

    client.messages.create({
        body: 'Hello from Node',
        to: '+919922855024',  // Text this number
        from: '(812) 461-6296 ' // From a valid Twilio number
    })
    .then((message) => console.log(message));
    




    //res.set('content-type','text/plain');
    //res.send(req.body);
});




app.listen(port,()=>console.log(`Server is up and running at ${port}`));





// const twilio = require('twilio');
// const accountSid = "AC1d949a979d300735b367f90d27eae347";
// const authToken  = "683d4d07768ce5fe7eaf980ad0744ce4";

// let client = new twilio(accountSid, authToken);

// client.messages.create({
//     body: 'Hello from Node',
//     to: '+919922855024',  // Text this number
//     from: '(812) 461-6296 ' // From a valid Twilio number
// })
// .then((message) => console.log(message));