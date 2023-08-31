const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log('connected to database!');
    })
    .catch((error) => {
        console.log(error);
    });


mongoose.connection.on('error', (error) => {
    console.log(error);
});

mongoose.connection.once('open', async () => {
    console.log('opened!')
})


