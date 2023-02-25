var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Cart = require('../models/cartX');
var Cart2 = require('../models/cart2');
var Category = require('../models/category');
var nodemailer = require('nodemailer');
var Product = require('../models/product');
var Order = require('../models/order');
var Make = require('../models/make');
var Models = require('../models/models');
var xlsx = require('xlsx')
var multer = require('multer')
const fs = require('fs')
var path = require('path');
var passport = require('passport');
var moment = require('moment')
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
const jwt = require('jsonwebtoken');
const JWT_KEY = "jwtactive987";
const JWT_RESET_KEY = "jwtreset987";
//const connectEnsureLogin = require('connect-ensure-login')



router.get('/signup',function(req,res){
    res.render('user/signup')
  })
    
  
  
   router.post('/signup',function(req,res){
   
    email = req.body.email;
    password = req.body.password;
    mobile = req.body.mobile
    fullname = req.body.fullname
         req.check('email','Enter email ').notEmpty();
         req.check('mobile','Enter Phone Number ').notEmpty();
         req.check('fullname','Enter FullName ').notEmpty();
         req.check('password','Enter password').notEmpty();
         var errors = req.validationErrors();
              
         if (errors) {
     
           req.session.errors = errors;
           req.session.success = false;
           res.render('user/signup',{ errors:req.session.errors})
         
       }
       User.findOne({'email':email})
       .then(user =>{
           if(user){ 
         // req.session.errors = errors
           //req.success.user = false;
           
          req.session.message = {
            type:'errors',
            message:'email already in the system'
          }     
          
             res.render('user/signup', {
                 user:req.body, message:req.session.message 
             }) 
           
     }
     else  {   
               
    
  
         const token = jwt.sign({email,password, mobile, fullname  }, JWT_KEY, { expiresIn: '100000m' });
         const CLIENT_URL = 'http://' + req.headers.host;
   
         const output = `
         <h2>Please click on below link to activate your account</h2>
         <a href="${CLIENT_URL}/auth/activate/${token}">click here</a>
         <h1> User credentials</h1>
         <p>email:${email}</p>
         <p>password:${password}</p>
         <p><b>NOTE: </b> The above activation link expires in 1 week.</p>
         `;
   
         const transporter = nodemailer.createTransport({
           service: 'gmail',
           auth: {
               user: "cashreq00@gmail.com",
               pass: "itzgkkqtmchvciik",
           },
           port:465,
           host:'smtp.gmail.com'
         });
         
   
         // send mail with defined transport object
         const mailOptions = {
             from: '"Admin" <cashreq00@gmail.com>', // sender address
             to: email, // list of receivers
             subject: "Perfect Pair Account Verification ✔", // Subject line
             html: output, // html body
         };
   
         transporter.sendMail(mailOptions, (error, info) => {
             if (error) {
               console.log(error)
          req.session.message = {
            type:'errors',
            message:'confirmation email not sent'
          }
          
          res.render('user/signup',{message:req.session.message,
          
       })
       
             }
             else {
                 console.log('Mail sent : %s', info.response);
  
                 
                 req.session.message = {
                  type:'success',
                  message:'confirmation email sent'
                }
                
                res.render('user/signup',{message:req.session.message,
                
             })
             }
         })
        // res.redirect('/multi')
    
                   
     }
    })
  
  
   })
  
  
  
  
   router.get('/activate/:token',(req,res)=>{
    const token = req.params.token;
    var a = moment();
    var year = a.format('YYYY')
    let errors = [];
    if (token) {
        jwt.verify(token, JWT_KEY, (err, decodedToken) => {
            if (err) {
                
                req.session.message = {
                    type:'errors',
                    message:'Incorrect or expired link! Please register again'
                  } 
                  res.render('user/signup',{message:req.session.message});
            }
            else {
              const { email, password,fullname, mobile } = decodedToken;
                User.findOne({ email: email }).then(user => {
                    if (user) {
                        //------------ User already exists ------------//
                    
                        req.session.message = {
                            type:'errors',
                            message:'User  already registered! Please log in.'
                          }  
                          res.render('user/signup',{message:req.session.message});
                 
                        
                    }
                    else  {      
  
                      var user = new User();
                      
                      user.email = email;
                      user.num=0;
                      user.mobile =mobile;
                      user.fullname = fullname;
                      user.category = 'null';
                      user.role = 'client'
                      user.photo='propic.jpg'
                      user.password = user.encryptPassword(password)
                      user.save()
                        .then(user =>{
                  
                            
                            
                          req.session.message = {
                            type:'success',
                            message:'Account Registered'
                          }  
                          res.render('user/signin',{message:req.session.message});
                      
  
  
                    })
                        .catch(err => console.log(err))
                      }
                      
                        })
                       }
                });
              }
    });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
    router.get('/signin', function (req, res, next) {
      var messages = req.flash('error');
      res.render('user/signin', { messages: messages, hasErrors: messages.length > 0});
  });
  
  router.post('/signin', passport.authenticate('local.signin', {
    failureRedirect: '/auth/signin',
    failureFlash: true,
    successRedirect:'/cart',
    keepSessionInfo: true
  })/*, function (req, res, next) {
   /*
    const redirectUrl = req.session.returnTo;
    res.redirect(redirectUrl);
    console.log(req.session,'zvafa wangu'); // doesnt have returnTo inside anymore ?
    res.redirect( '/cart');
   // delete req.session.returnTo;
    
  }*/);
  

  /*
  router.get("/auth", passport.authenticate("discord"), {
    failureRedirect:"/auth/forbidden", keepSessionInfo: true }), (req, 
 res)  => {
 console.log(req.session); // doesnt have returnTo inside anymore ?
 res.redirect(req.session.returnTo || '/');
 delete req.session.returnTo;
};*/
  
  
module.exports = router;


function isLoggedIn(req, res, next) {
  if (!req.isAuthenticated()) {
req.session.returnTo = req.originalUrl
    return res.redirect('/auth/signin')
  }
  else{
      next()
  }
  }
  
  