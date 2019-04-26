const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Apollo',(err) => {
    if(!err) 
        console.log('connection successful....')
    else 
        console.log('error in db connection', err)    
});

module.exports = {mongoose};