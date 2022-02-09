const express = require('express');
const app = express();
const cors = require('cors');

//helps us decode the body from an HTTP request
const bodyParser = require('body-parser');

const PORT = 5000;

//where we will keep users
const users = []
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.get('/',(req,res)=>{
res.send('hello from the server')
});
app.post('/user',(req,res)=>{
    const user = req.body;
    //pushing data to database
    users.push(user);
})

app.get('/getUser',(req,res)=>{
res.json(users);
})
app.listen(PORT,()=>{
console.log(`server is running on port ${PORT}`)
})