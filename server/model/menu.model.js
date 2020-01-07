const mongoose = require('mongoose');

const schema = mongoose.Schema;

const menuListSchema = new schema({
 name:String, 
 description:String,
 cost:Number
});

const menuSchema = new schema({
    dinner : [menuListSchema],
    dessert: [menuListSchema],
    beverages:[menuListSchema]
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;

