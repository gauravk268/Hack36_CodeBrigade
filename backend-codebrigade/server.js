require('./app/config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');
const Mailer = require('./app/services/mailer');
var {mongoose} = require('./app/services/mongodb');
var {User} = require('./app/models/user');
var {authenticate} = require('./app/middleware/authenticate');
var MongoClient = require('mongodb').MongoClient;

var app = express();
const port = process.env.PORT ;

app.use(bodyParser.json());

app.post('/users/signup', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);
  
    user.save().then(() => {
      return user.generateAuthToken();
    }).then((token) => {
      res.header('x-auth', token).send(user);
    }).catch((e) => {
      res.status(400).send(e);
    })
  });


app.get('/users/me', authenticate, (req, res) => {
res.send(req.user);
});

app.post('/users/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
  
    User.findByCredentials(body.email, body.password).then((user) => {
      return user.generateAuthToken().then((token) => {
        res.header('x-auth', token).send(user);
        res.render('../frontend-codebrigade/public/src/components/Home', { user: req.user });
      });
    }).catch((e) => {
      alert('Login credentials are invaid!!');
      res.redirect('../frontend-codebrigade/public/src/components/login');
      // res.status(400).send();
    });
  });

app.post('/alert/',(req,res)=>{
  email = req.body.email;
  User.findOne({email}).then((user) => {
    if (!user) {
      return Promise.reject();
    }
    date = user.date;

    User.find({date},function(err,result){
        if(err){
          res.send(err);
          return ;
        }
        for (var i=0;i<result.length;i++ ){
          // console.log(result[i].email);    
          // console.log('1');
          Mailer.sendDm(result[i].email);
              
        }
        // return res.status(200).send() ;  
          });     
          User.find({date},function(err, result) {
              if (err) throw err;
              

                    MongoClient.connect( process.env.MONGODB_URI, function(err, db) {
                      if (err) throw err;
                      
                    for (var i=0;i<result.length;i++ ){
                      User.findOne({_id:result[i]._id},(err,docs)=>{
                          docs.remove();
                      })
                                            }
                    });
          
          return res.status(200).send() ;    
          });
   

  });

});

app.listen(port, () => {
console.log(`Started up at port ${port}`);
});

module.exports = {app};
  