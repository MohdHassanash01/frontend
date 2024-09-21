const {model,Schema}  = require('../connection.js')

const  mySchema = new Schema({
    name:String,
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    

});


module.exports = model('users',mySchema)  // users is collection name


// 1) 100 - 199  /// informational responese
// 2) 200 - 299  // successfull response
// 3) 300 - 399  // redirect response
// 4) 400 - 499  // client error
// 5) 500 - 599   // server side err