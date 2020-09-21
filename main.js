const express = require('express');
const app = express()
const cors = require('cors');
const post = require('./consume_api/dummy.json');
const port = 3000;
const ip = '127.0.0.1';

app.use(express.json())
app.use(cors());

app.get('/api',(req,res)=>{
    console.log(req.url)
    res.status(200).json(post);
})

app.listen(port,ip,(console.log(`http://${ip}:${port}/api running ...`)));
