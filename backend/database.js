const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.3xwef.mongodb.net/intervencion?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
}).then(
    db => console.log('Database is connected')
).catch(
    err => console.log(err)
);