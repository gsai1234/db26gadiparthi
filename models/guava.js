const mongoose = require("mongoose") 
const guavaSchema = mongoose.Schema({ 
guava_type: String, 
weight: Number, 
cost: Number 
}) 
 
module.exports = mongoose.model("guava",guavaSchema)