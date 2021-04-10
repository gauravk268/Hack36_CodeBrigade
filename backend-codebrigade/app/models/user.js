const mongoose = require('mongoose');
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const validate = require('mongoose-validator');
const moment=require('moment');
// var passwordValidator = [
//     validate({
//         validator: 'matches',
//         arguments: /^(?=.*?[a-z])(?=.*[A-Z])(?=.*[\d])(?=.*[\W]).{8,25}$/,
//         message : 'Password must have one lowercase, one uppercase, one special character, one number and minimum 8 and maximum 25 character'
//     }),
//     validate({
//         validator: 'isLength',
//         arguments: [8,25],
//         message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters'
//     })
// ];

var UserSchema = new mongoose.Schema({
    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 1,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: '{VALUE} is not a valid email'
      }
    },
    password: {
      type: String,
      require: true,
      minlength: 6
    },
    date: {
      type: Date, 
      default: moment(new Date()).format('YYYY-MM-DD')
    },
    tokens: [{
      access: {
        type: String,
        required: true
      },
      token: {
        type: String,
        required: true
      }
    }]
  });

UserSchema.methods.generateAuthToken = function () {
    var user = this;
    var access = 'auth';
    var token = jwt.sign({_id: user._id.toHexString(), access}, 'abc123').toString();
  
    user.tokens.push({access, token});
  
    return user.save().then(() => {
      return token;
    });
  };



UserSchema.methods.removeToken = function (token) {
var user = this;

return user.update({
    $pull: {
    tokens: {token}
    }
});
};

UserSchema.statics.findByToken = function (token) {
var User = this;
var decoded;

try {
    decoded = jwt.verify(token, 'abc123');
} catch (e) {
    return Promise.reject();
}

return User.findOne({
    '_id': decoded._id,
    'tokens.token': token,
    'tokens.access': 'auth'
});
};

UserSchema.statics.findByCredentials = function (email, password) {
    var User = this;
  
    return User.findOne({email}).then((user) => {
      if (!user) {
        return Promise.reject();
      }
  
      return new Promise((resolve, reject) => {
        // Use bcrypt.compare to compare password and user.password
        bcrypt.compare(password, user.password, (err, res) => {
          if (res) {
            resolve(user);
          } else {
            reject();
          }
        });
      });
    });
  };

UserSchema.pre('save', function (next) {
    var user = this;
    now = new Date();
    if(!this.date) this.date = now;
    if (user.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash;
          next();
        });
      });
    } else {
      next();
    }
  });
UserSchema.methods.comparePassword = function(password){
    return bcrypt.compareSync(password, this.password);
};



var User = mongoose.model('User', UserSchema);

module.exports = {User}