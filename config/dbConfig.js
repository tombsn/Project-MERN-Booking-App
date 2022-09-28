const url_db = process.env.url_db;
const mongoose = require('mongoose');
mongoose.set('runValidators', true);

try {
    mongoose.connect(
        url_db, 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
    )
    .catch((err) => {
        console.log(err);
    })

    // Test if connection is ok 
    var db = mongoose.connection;
    db.once("open", function() {
        console.log("Connection to mongo db is OK");
    });
} catch(err) {
    console.log(err);
}