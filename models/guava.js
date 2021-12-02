module.exports = mongoose.model("guava",guavaSchema)
const mongoose = require("mongoose")
const guavaSchema = mongoose.Schema({

guava_type:{
    type: String,
    minLength: 3,
    maxLength: 100
},

weight : {
    type:Number,
},

Cost: {
    type:Number,
    min:1,
    max:500
}
})
module.exports = mongoose.model("guava",guavaSchema)