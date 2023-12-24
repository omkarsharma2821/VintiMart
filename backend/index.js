// import express

const express = require('express');
const userRouter = require('./routers/userRouter');
const furnitureRouter  = require('./routers/furnitureRouter');
const orderRouter  = require('./routers/orderRouter');
const contactRouter  = require('./routers/contactRouter');
const utilRouter  = require('./routers/util');
const cors = require('cors');

//intialize express

const app = express();
const port = 5000;

//  middlewares express
app.use(express.json()); // if not put data will be undefined 
app.use(cors({
    origin: [`${process.env.REACT_APP_VINTIMART_URL}`]
}));
app.use('/user', userRouter);
app.use('/furniture', furnitureRouter);
app.use('/order', orderRouter);
app.use('/contact', contactRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));
// asynchornous wait nhi krta dusre function ka phle ho jata hai


// routes

app.get('/', (req, res) => {
    res.send('resposnse from express');
});
app.get('/home',(req, res) => {
    res.send('resposnse from home');
});
app.get('/add',(req, res) => {
    res.send('resposnse from add');
});
app.get('/getall',(req, res) => {
    res.send('resposnse from getall');
});

app.listen(port, () => {
    console.log('server started');
});
