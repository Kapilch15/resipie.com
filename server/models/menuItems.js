const mongoose = require('mongoose');


const menuItemSchema = mongoose.Schema({
    itemName: {
       type: String,
       required: true,
    },
    price: {
        type: Number,
        required:true
    },
})

module.exports = mongoose.model("menuItem", menuItemSchema); 