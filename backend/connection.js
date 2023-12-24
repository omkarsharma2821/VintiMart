const dotenv=require('dotenv');
const mongoose=require('mongoose')
dotenv.config();

// console.log(process.env. DB_URL)

mongoose.connect(process.env.DB_URL)
.then((result) => {
console.log('database connected')    

}).catch((err) => {
   console.log(err); 
});

module.exports = mongoose;

// collection is equal to table and documents are equal to rows 
// post me data hidden rhta hai in body post jyda data send kr skte hai 
// get me url me nor secure data 
