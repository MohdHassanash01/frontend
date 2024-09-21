const mongoose = require("mongoose")

const url = "mongodb+srv://mohdashrafhassan098:R9ivhcm2VvsHqVAn@cluster0.zlpks.mongodb.net/"

// connect to the database
 // asynchronous - return a promise
mongoose.connect(url)
.then(() => {
console.log("connect to database");

})
.catch((err) => {
console.log(err);

})

module.exports = mongoose;