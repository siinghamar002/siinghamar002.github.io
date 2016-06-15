
var express  = require('express'),
   mongoose = require('mongoose'),
   bodyParser = require('body-parser'),
    ejs      = require('ejs')

    // Mongoose Schema definition
//Update user model (todo)
    Schema = new mongoose.Schema({
      f_name    : String, 
      l_name   : String,
      num: Number,
      email_id   : String 
         
    }),

    User = mongoose.model('User', Schema);

    mongoose.connect('mongodb://pankaj:1234@ds013574.mlab.com:13574/panka_database');


    var app = express()
    
    app.use(bodyParser.json()); // get information from html forms
    app.use(bodyParser.urlencoded({extended: true}));
 

  app.get('/api', function (req, res) {
    res.json(200, {msg: 'OK' });
  })

app.get('/', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-find
    User.find({}, function ( err, users ){
        if(!err && users){
            res.render('users.ejs',{
                data :  users
            })
        } else {
            console.log(err)
        }
    });

});
app.get('/adduser',function(req,res)
{
  res.render('addUser.ejs')
})

  app.post('/api/user', function (req, res) {

      //update post function as per new model (todo)
        var user = new User(
        {
         f_name  : req.body.f_name ,
         l_name  : req.body.l_name ,
         num: req.body.num,
         email_id : req.body.email_id 
        
                });

  
    // http://mongoosejs.com/docs/api.html#model_Model-save
    user.save(function (err, data) {
        if(!err && data){
            console.log(data);
            res.status(200).json(data)
        } else {
            res.json(500, {msg: 'Something went wrong' });
            console.log(err)
        }
      
    });
  })

  app.delete('/api/users', function (req, res) {
    // http://mongoosejs.com/docs/api.html#query_Query-remove
    User.remove({ isPassedOut: true }, function ( err ) {
        if(!err){
            console.log("User deleted successfully")
        } else{
            console.log(err)
        }
    });
  })

  app.get('/userdetails/:id', function(req, res){
    User.findById( req.params.id, function ( err, user ) {
        if(!err && user){
            res.render('userDetail.ejs',{
                data : user
            })
        } else {
            console.log(err)
        }
    });
} )

  app.put('/api/users/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, user ) {
      user.isPassedOut = req.body.completed;
      // http://mongoosejs.com/docs/api.html#model_Model-save
      user.save( function ( err, data ){
          if(!err && data){
           res.status(200).json(data)
          } else {
              console.log(err)
          }
       
      });
    });
  });


app.get('/editusers/:id', function(req, res){
    User.findById( req.params.id, function ( err, user ) {
        if(!err && user){
            res.render('editUser.ejs',{
                data : user
            })
        } else {
            console.log(err)
        }
    });

})

  app.post('/api/edituser/:id', function (req, res) {
    User.findById( req.params.id, function ( err, user ) {
      user.f_name= req.body.f_name;
        user.l_name= req.body.l_name;
          user.num= req.body.num;
          user.email_id= req.body.email_id;
      user.save( function ( err, data ){
          if(!err && data){
          res.redirect('/')
          } else {
              console.log(err)
          }

      });
    });
  });

   app.get('/api/deleteUser/:id', function (req, res) {
    // http://mongoosejs.com/docs/api.html#model_Model.findById
    User.findById( req.params.id, function ( err, user ) {
      // http://mongoosejs.com/docs/api.html#model_Model.remove
      user.remove( function ( err ){
          console.log("User deleted successfully")
          res.redirect('/')
      });
    });
  })

app.listen(1338);
console.log('Magic happens on port 1338');

