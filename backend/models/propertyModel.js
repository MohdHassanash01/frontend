const { model, Schema } = require('../connection')

const mySchema = new Schema({

    owner: { type: String },
    location: { type: String },
    country: { type: String },
    city: { type: String },
    price: { type: Number },
    image: { type: String }
})


module.exports = model('property', mySchema)