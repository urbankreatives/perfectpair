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
/*const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;*/
const jwt = require('jsonwebtoken');
const JWT_KEY = "jwtactive987";
const JWT_RESET_KEY = "jwtreset987";
//const connectEnsureLogin = require('connect-ensure-login')



router.get('/profile', isLoggedIn, function (req, res, next) {
    Order.find({user: req.user}, function(err, orders) {
        if (err) {
            return res.write('Error!');
        }
        var cart;
        orders.forEach(function(order) {
            cart = new Cart(order.cart);
            order.items = cart.generateArray();
        });
        res.render('prof', { orders: orders });
    });
});

  
module.exports = router;


function isLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/auth/signin');
    }
    next();
    }
    
  
  
  