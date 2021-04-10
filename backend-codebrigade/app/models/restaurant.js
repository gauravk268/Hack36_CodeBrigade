const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');


var RestaurantSchema = new mongoose.Schema({
    name : {
      type : string,
      unique : true,
    },
    dishes : {
      type : Array,
      default : [],
    }
  });


  var Restaurant = mongoose.model('Restaurant', RestaurantSchema);

  module.exports = {Restaurant}  
