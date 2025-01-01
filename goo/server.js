const express = require('express');
const bodyParser = require("body-parser");
const userRoute = require('./routes/userRoute.js');

const app = express();
const PORT = process.env.PORT ? process.env.PORT : 3000;

// Middlewares
app.use(express.json());
app.use('/user', userRoute); 

// app.get('/', (req, res)=>{
//     // console.log(res)
//     res.status(200);
//     res.send("Welcome to root URL of Server");
// });

// app.get('/hello', (req, res)=>{
//     res.set('Content-Type', 'text/html');
//     res.status(200).send("<h1>Hello GFG Learner!</h1>");
// });

// app.use(express.json());
// app.post('/', (req, res)=>{
//     const {name} = req.body;
    
//     res.send(`Welcome ${name}`);
// })

// app.use(bodyParser.json());
// app.use(
//     bodyParser.urlencoded({
//         extended: true
//     })
// )



app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);