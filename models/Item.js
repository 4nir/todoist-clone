const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create Schema
const ItemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//we have no access to the file, so we 
//have to export to it can be brought in to 
//other files

module.exports = Item = mongoose.model('item', ItemSchema);