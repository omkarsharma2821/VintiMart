const mongoose = require('mongoose');
const url = "mongodb+srv://omkarsharma2821:omkar123@cluster0.jwxneht.mongodb.net/miniprojectdatabase?retryWrites=true&w=majority";

mongoose.connect(url)
.then((result) => {
    console.log('Database connected');

}).catch((err) => { 
    console.log('err');   

});

module.exports = mongoose;

// collection is equal to table and documents are equal to rows 
// post me data hidden rhta hai in body post jyda data send kr skte hai 
// get me url me nor secure data 
