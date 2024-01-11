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
// app.use(cors({
//     origin: [`${process.env.REACT_APP_VINTIMART_URL}`]
// }));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'https://vintimart-9x78.onrender.com');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
app.use('/user', userRouter);
app.use('/furniture', furnitureRouter);
app.use('/order', orderRouter);
app.use('/contact', contactRouter);
app.use('/util', utilRouter);

// app.use(express.static('path/to/upload/folder'))
// app.use(express.static('/https://vintimart.onrender.com/uploads'));
// app.use(express.static('./uploads'));
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

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
