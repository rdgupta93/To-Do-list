const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
let newItems=[];
app.get('/',(req,resp)=>{
    let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let today = new Date();
    let day = today.toLocaleDateString("en-US", options);
    resp.render("list", {kindofday:day, newListItems:newItems});
})

app.post('/',(req,resp)=>{
    let newItem = req.body.newItem;
    newItems.push(newItem);
    resp.redirect('/');
})

app.listen(3000,()=>console.log("port is running at server 3000"))