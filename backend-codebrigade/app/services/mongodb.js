// const mongoose = require('mongoose');

// exports.connect = () => {
//     mongoose.connect('mongodb://localhost:27017/foody', { useNewUrlParser: true, useFindAndModify: false ,useUnifiedTopology: true }, function (err) {
//         if(err) {
//             console.log(err);
//         } else {
//             console.log('Successfully connected to database.');
//         }
//     });
// }

var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
