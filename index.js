/*ng new clothes - frontend mappába angular projekt létrehozás
ng serve
ng generate component main*/

const { response } = require('express');
const mongoose = require('mongoose')
const express = require('express');
/*const Product = require('./models/product');*/
const productSchema = require("./models/product")
const userSchema = require("./models/user")
const bodyParser = require("body-parser")
var cors = require("cors")

require('dotenv').config();

const app = express();

app.use(cors())
app.use(bodyParser.json())
var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());

var url = process.env.MONGODB
mongoose.connect(
    url, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    }
).then(()=>{
    console.log("csatlakoztunk")
})
.catch((err)=>{
    console.log("nemmjooooo")
})

const Product = mongoose.model('Product', productSchema)
const User = mongoose.model('User', userSchema)

/*
const tmp = new Product(
    {cloth_Id: 7, cloth_name: "Bézs ruha", 
    cloth_desc: "Lezser fazonú, bordáskötött ruha kerek nyakkal, mély karkivágással, oldalán magas hasítékkal.",
    cloth_image:"assets/outfit_2.jpg",
    cloth_price: 3500, 
    cloth_quantity:10}
)
tmp.save();
*/
/*
const tmp2 = new User({
    name: "szaboz",
    password: "PRF2021",
})
tmp2.save();
*/

var passport = require('passport'),
LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
    usernameField: 'name',
    passwordField: 'password'
},
  function(name, password, done) {
    User.findOne({ name: name }, function(err, user) {
        console.log(user)
        console.log(err)
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      user.comparePasswords(password, (err, isMatch) =>{
          if(err) return done(err, false);
          if(!isMatch) return done('Incorrect pw', false);

          return done(null, user);
      })
    });
  }
));


passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  app.post('/login', (req, res) =>{
    console.log(req.body)
    if(req.body.name) {
        passport.authenticate('local', (err, user)=>{
            if (err) return res.status(500).send(err);
            req.login(user, (err)=>{
                if(err) return res.status(500).send(err)
                return res.status(200).send("Authenticated!")
            })
        }) (req,res);
    } else {
        return res.status(400).send("Bad request")
    }
});

app.use(express.static("frontend/clothes/dist/clothes", {root: __dirname}))

app.get('/',(req, res)=>{
    res.sendFile("frontend/clothes/dist/clothes/index.html", {root: __dirname})
})

app.post('/products', (req, res) =>{
    Product.find({
        "cloth_quantity": { $gt:0 }
    }, (err, result) =>{res.send(result)
    })
})

app.post('/product/:cloth_Id', (req, res) =>{
    Product.findOne({
        "cloth_Id": req.body.cloth_Id
    }, (err, result) =>{res.send(result)
    })
})

app.post('/add_product', (req, res) => {
    console.log(req.body.product)
    Product.create(req.body.product)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
  })
  
  app.delete('/delete_product/:cloth_Id', (req, res) =>{
    Product.findOneAndRemove({
        "cloth_Id": req.body.cloth_Id
    }, (err, result) =>{res.send(result)
    })

}) 

var port = process.env.PORT

app.listen(port);