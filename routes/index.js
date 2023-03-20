var express = require('express');
var router = express.Router();
var Cart = require('../models/cart');
var Category = require('../models/category');
const keys = require('../config1/keys')
const stripe = require('stripe')('sk_test_IbxDt5lsOreFtqzmDUFocXIp0051Hd5Jol');
var Product = require('../models/product');
var Order = require('../models/order');
var xlsx = require('xlsx')
var multer = require('multer')
const fs = require('fs')
var path = require('path');
var User = require('../models/user');
var moment = require('moment')



var storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/')
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})



var upload = multer({
    storage:storage
})





router.get('/',function(req, res, next){
  var successMsg = req.flash('success')[0];
  Product.find({type:'sneakers',status2:'foreground',status3:'foreground'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('index1',{products: productChunks,successMsg: successMsg, noMessages: !successMsg})
  })
 
  
})


/*
router.get('/',function(req, res, next){
  var successMsg = req.flash('success')[0];
  var productChunks = [];
  var chunkSize = 1;
  var arr = []
  Product.find({type:'heels'},function (err, docs) {
    for(var i = 0; i< docs.length;i++){
      let name = docs[i].name
      let color = docs[i].color

      Product.find({name:name,color:color},function(err,locs){
        let size = locs.length;
        console.log(size,'locs length')
        if(size == 1){
         arr.push(locs[0])
        }else{
       for(let i = size - 1;i<locs.length;i++){
         arr.push(locs[i])
         console.log(arr,'arr')
       }
        }
     
      
      })
     
    }
    for (var i = 0; i < arr.length; i += chunkSize) {
      productChunks.push(arr.slice(i, i + chunkSize));
  }
  res.render('index1',{products: productChunks,successMsg: successMsg, noMessages: !successMsg})
    
   
  })
 
  
})


*/

router.get("/logout", (req, res) => {
  req.logout(req.user, err => {
    if(err) return next(err);
    res.redirect("/");
  });
});





router.get('/size',function(req,res){

  //var color = req.body.codeX
name = req.query.code
color = req.query.codeX
  Product.find({name:name,color:color},function(err,docs){
    console.log(docs,'flocs')
    res.send(docs);
    
  })
})


router.get('/fill',function(req,res){
var name = req.query.name
var color = req.query.color
var size = req.query.size

Product.find({name:name, color:color, size:size},function(err,docs){
  res.send(docs[0])
})


  
  })
  





router.get('/sneakers',function(req, res, next){
  Product.find({type:'sneaker'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})



router.get('/heels',function(req, res, next){
  Product.find({type:'heels'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})


router.get('/flat',function(req, res, next){
  Product.find({type:'flat shoe'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})


router.get('/login',function(req,res){
  res.render('login')
})

router.get('/sbags',function(req, res, next){
  Product.find({type:'sling bag'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})


router.get('/hbags',function(req, res, next){
  Product.find({type:'hand bag'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})


router.get('/cbags',function(req, res, next){
  Product.find({type:'hand bag'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})

router.get('/berets',function(req, res, next){
  Product.find({type:'beret'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})



router.get('/sqhats',function(req, res, next){
  Product.find({type:'beret'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})

router.get('/bhats',function(req, res, next){
  Product.find({type:'beret'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})

router.get('/sunhats',function(req, res, next){
  Product.find({type:'beret'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})

router.get('/chats',function(req, res, next){
  Product.find({type:'beret'},function (err, docs) {
      var productChunks = [];
      var chunkSize = 1;
      for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i + chunkSize));
      }
      res.render('shopX',{products: productChunks})
  })
 
  
})







router.get('/addX',function(req,res){
   
    Product.find(function(err,docs){
        res.render('add',{products:docs})
    })
    
})





router.post('/addX',upload.single('file'),function(req, res, next) {

  
        req.check('name','Enter Product Name').notEmpty();
        req.check('price','Enter Price').notEmpty().isNumeric();
        req.check('description','Enter Description').notEmpty();
        req.check('color','Enter Color').notEmpty();
        req.check('category1','Enter Category').notEmpty();
    
    
        if(!req.file){
           
            
              req.session.message = {
                type:'errors',
                message:'Select File!'
              }     
                res.render('add', {message:req.session.message
                })
           
                 
                }
                   
    var errors = req.validationErrors();
    if (errors) {
   
    
      req.session.errors = errors;
      req.session.success = false;
      res.render('add',{ errors:req.session.errors})
        
    
    }
    
                else{
                    const imageFile = req.file.filename;
            
                    var product = new Product();
                            product.name = req.body.name;
                            product.price = req.body.price
                            product.description = req.body.description;
                           
                            product.category= req.body.category1;
                            product.color = req.body.color;
                            product.filename = imageFile;
                            product.status = 'new'
                      
                          
                           
                            product.save()
                              .then(productId =>{
    
                                res.redirect('/addX')
                              })
                            }
               
    })




router.get('/sec2',function(req, res, next){
    Product.find({},function (err, docs) {
        var productChunks = [];
        var chunkSize = 1;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shopX',{products: productChunks})
    })
   
    
})




router.get('/search',function(req,res){
    res.redirect('/')
})

router.post('/search',function(req,res){
   var name=req.body.s
console.log(name,'name')  
  Product.find({},function (err, gocs) {
    Product.find({name:name},function (err, docs) {
        var arr =[]
        arr = gocs
let filename = docs[0].filename
let  name = docs[0].name
let id = docs[0]._id
let price = docs[0].price
let title = docs[0].title

console.log(filename,name, 'klopp')

Product.find({title:title},function (err, docs) {
    var productChunks = [];
    var chunkSize = 4;
    for (var i = 0; i < 4; i += chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
  


res.render('searc',{name:name, filename:filename,id:id,price:price, products:productChunks,arr:arr})
//res.redirect('/search/:id')

    })
})

});
})




router.get('/cart',isLoggedIn, function(req, res, next) {

    if (!req.session.cart) {
        return res.render('cartX', {products: null});
    } 
     var cart = new Cart(req.session.cart);
     console.log(cart.generateArray(),'vhura cart')
     res.render('cartX', {products: cart.generateArray(), totalPrice: cart.totalPrice});
 });




router.get('/about',function(req,res){
    res.render('about')
})

router.get('/reg',function(req,res){
  res.render('register')
})


router.get('/contact',function(req,res){
  res.render('contact2')
})

  router.get('/review/:id',function(req,res){
    var id = req.params.id
    var productChunks = [];
    var chunkSize = 1;
    var arr = []
    var productChunksX = [];
    var chunkSizeX = 1;
    Product.find({_id:id},function(err,docs){
        let name = docs[0].name
        let type=docs[0].category
        let color = docs[0].color
       // console.log(color, 'color')
    Product.find({name:name,status3:'foreground'},function(err,gocs){
      for (var i = 0; i < 9; i += chunkSizeX) {
        productChunksX.push(gocs.slice(i, i + chunkSizeX));
    }
        let num  = gocs.length;

        Product.find({name:name,status2:'foreground',},function(err,tocs){
        for(var i = 0; i<tocs.length;i++){
          arr.push(tocs[i])
        }
      //  console.log(num,'name')
        //console.log(docs,"docs")
        Product.find({category:type,status2:'foreground'},function (err, locs) {
    
          for (var i = 0; i < 9; i += chunkSize) {
              productChunks.push(locs.slice(i, i + chunkSize));
          }
  
      
        res.render('review',{products:productChunksX,num:num,pro:docs[0],productsX: productChunks, arr:arr})
      })
    })
    })
    })
    })


    router.get('/rev/:id',function(req,res){
      var id = req.params.id
      Product.find({_id:id},function(err,docs){
        //console.log(docs,'flocs')
        res.send(docs[0]);
        
      })
    })


 

router.get('/wrk',function(req, res, next){
    Product.find({},function (err, gocs) {
    Product.find({title:'Worksuit'},function (err, docs) {
        var arr =[]
        arr = gocs
        var productChunks = [];
        var chunkSize = 4;
        for (var i = 0; i < docs.length; i += chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('catg/wrksuit', {title: 'Worksuits', products: productChunks,arr:arr});
    });
})
   
})

router.get('/invoice',function(req,res){
  res.render('create')
})

router.get('/add-to-cart/:id', function(req, res, next) {
  var m = moment()
  var date = moment().toString();
    var productId = req.params.id;
 
    console.log(productId,'smolich')
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    var total

    var quantity, qty ,sixth
    sixth = cart.items[productId]
//console.log(sixth.length,'66')
  /* quantity =  cart.items[productId].item.quantity
   qty = cart.items[productId].qty
   console.log(qty,'qty')*/
   //if( sixth == undefined ){

    Product.findById(productId, function(err, product) {
     let quan = product.quantity
     console.log(quan,'medics')
      if( sixth == undefined && quan > 0 ){
        cart.add(product,product.price, product.id,  date,quantity);
        req.session.cart = cart;
       // console.log(cart.items[productId].item.quantity,'pakati pehusiku')
    
        /*console.log(product.id,'product')
        console.log(productId,'productId')*/
      
       
        //res.send(cart);
       // console.log(req.session.cart);
       res.send(cart);
    
  }
  else if(sixth){

    quantity =  cart.items[productId].item.quantity
    qty = cart.items[productId].qty
if(quantity > qty){
  cart.add(product,product.price, product.id,  date,quantity);
req.session.cart = cart;
// console.log(cart.items[productId].item.quantity,'pakati pehusiku')

/*console.log(product.id,'product')
console.log(productId,'productId')*/


//res.send(cart);
// console.log(req.session.cart);
res.send(cart);
}


    //console.log(qty,'qty')
  }
})
 // 
});

router.get('/add-to-cartX/:id', function(req, res, next) {
  var m = moment()
  var date = moment().toString();
    var productId = req.params.id;
  
  console.log(productId,'smolich')
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  var total

  Product.findById(productId, function(err, product) {
     if (err) {
         return res.redirect('/sec');
     }
     cart.add(product, product.id,  date);
      req.session.cart = cart;
      console.log(product.id,'product')
      console.log(productId,'productId')
  
      res.send(cart.items[productId]);
     // console.log(req.session.cart);
      res.redirect('/cart');
  });
});











//autocomplete teacherName & uid

router.get('/autocompleteTS/', function(req, res, next) {


    var regex= new RegExp(req.query["term"],'i');
    
    var uidFilter =Product.find({name:regex},{'name':1}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
    
    
    uidFilter.exec(function(err,data){
    
    
    console.log('data',data)
    
    var result=[];
    
    if(!err){
     if(data && data.length && data.length>0){
       data.forEach(user=>{
    
        
     
    
          
         let obj={
           id:user._id,
           label: user.name,
    
       
         /*  name:name,
           surname:surname,
           batch:batch*/
          
          
       
         
          
    
           
         };
        
         result.push(obj);
         console.log('object',obj.id)
       });
    
     }
    
     res.jsonp(result);
     console.log('Result',result)
    }
    
    })
    
    });


//this routes autopopulates teachers info from the id selected from automplet1
router.post('/autoTS',function(req,res){
    var fullname = req.body.code
    
    
    
    Products.find({name:fullname},function(err,docs){
    if(docs == undefined){
     res.redirect('/autoTS')
    }else
    
      res.send(docs[0])
    })
    
    
    })
    
    



   //adding product categories
   router.get('/addCategory', function(req,res){
 res.render('categoryX')
    
  })
  
  
  
  router.post('/addCategory', function(req,res){
    var category1 = req.body.category1;
  
  
      req.check('category1','Enter Category').notEmpty();
     
    
      
      var errors = req.validationErrors();
           
      if (errors) {
      
        req.session.errors = errors;
        req.session.success = false;
        res.render('categoryX',{ errors:req.session.errors,})
        
    }
    else{
      
        Category.findOne({'category1':category1})
        .then(clax =>{
            if(clax){ 
             
           req.session.message = {
            type:'errors',
             message:'Category already exists'
           }     
              res.render('categoryX', {
                 message:req.session.message 
          
            })
            }else
    
      var cat = new Category();
    
      cat.category1 = req.body.category1;
      
    
    
      cat.save()
        .then(cat =>{
        
          req.session.message = {
            type:'success',
            message:'Category added'
          }  
          res.render('categoryX',{message:req.session.message,});
      
    
      })
    
        .catch(err => console.log(err))
      
      
      })
    }
    
    
    
    
    
    
    })
  
  
  
 






router.get('/test',function(req,res){
  res.render('cart9')
})

router.get('/add-to-cart1/:id', function(req, res, next) {
    var productId = req.params.id;
    var m = moment()
  var date = moment().toString();
    var cart = new Cart(req.session.cart ? req.session.cart : {});
var quantity 
    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
       quantity = product.quantity - 1
        cart.add(product,product.price, product.id, date, quantity);
        req.session.cart = cart;
       // console.log(req.session.cart);
        res.redirect('/cart');
    });
});


router.get('/add-to-cart2/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/mbr');
    });
});

router.get('/add-to-cart3/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    Product.findById(productId, function(err, product) {
       if (err) {
           return res.redirect('/');
       }
        cart.add(product, product.id);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/tom');
    });
});

router.get('/reduce/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});
    cart.reduceByOne(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});

router.get('/remove/:id', function(req, res, next) {
    var productId = req.params.id;
    var cart = new Cart(req.session.cart ? req.session.cart : {});

    cart.removeItem(productId);
    req.session.cart = cart;
    res.redirect('/cart');
});


/*
router.get('/checkout', function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/cart');
    }
    var cart = new Cart(req.session.cart);
    var errMsg = req.flash('error')[0];
    res.render('checkout', {total: cart.totalPrice, errMsg: errMsg, noError: !errMsg});
});
*/

router.post('/checkout',isLoggedIn,  function(req, res, next) {
    if (!req.session.cart) {
        return res.redirect('/cart');
    }
    var cart = new Cart(req.session.cart);
    
    var stripe = require("stripe")(
        "sk_test_IbxDt5lsOreFtqzmDUFocXIp0051Hd5Jol"
    );
var id =req.user._id;
var email = req.user.email
var fullname = req.user.fullname
var mobile = req.user.mobile
   

    stripe.charges.create({
        amount: cart.totalPrice * 100,
        currency: "usd",
        source:  "tok_mastercard", // obtained with Stripe.js
        description: "Test Charge"
    }, function(err, charge) {
        if (err) {
       
            console.log(err.message)
            console.log(req.body.slot,'ma1')
            return res.redirect('/cart');
        }
        var order = new Order({
           

          
         
          cart : cart,
          email: email,
          buyerName: fullname,
          buyerMobile: mobile,
          userId :id,
          amount :cart.totalPrice
        });
        order.save(function(err, result) {
          

let ord6 =[]
var id = req.user._id
User.find({_id:id},  function(err,nocs){

let num = nocs[0].num


Order.find({},function(err,docs){
var size = docs.length - 1

let cart=[]
 let cart2=[]
 let prop = []
  for(var i = 0; i<docs.length;i++){
 





 cart2.push(docs[i].cart)
 let name = docs[i].buyerName
 let mobile = docs[i].buyerMobile

 if(i == size){
  console.log(cart2.length, 'cart length')
 for(var x=0;x<cart2.length;x++){
   
   let properties = Object.keys(cart2[x].items);
  
let sz = properties.length - 1
  for(var c = 0; c<properties.length;c++){
    prop.push(properties[c])
 
    if(c == sz){


let psize= Object.keys(cart2[x].items)

let psizeX = psize.length




let count = -1
for(num;num<prop.length;num++){
count++


if(count <=psizeX){

ord6.push(cart2[x].items[prop[num]])

User.findByIdAndUpdate(id,{$set:{num:num}},  function(err,docs){


})

}
else if (count>psizeX){
break;

}



}


}

  }


 }

 console.log(ord6.length,'length')

 for(var q=0;q<ord6.length;q++){


// let ord = new Order2()
let idV = ord6[q].item._id
let proQty = ord6[q].qty
Product.find({_id:idV},function(err,mocs){
let qtyV = mocs[0].quantity
let nqty = qtyV - proQty

Product.findByIdAndUpdate(idV,{$set:{quantity:nqty}},function(err,klocs){

})
})


 }

 
}

  }



 
})

})

            req.flash('success', 'Successfully bought product!');
            console.log('success', 'Successfully bought product!');
            req.session.cart = null;
            res.redirect('/');
        });
    }); 
});

/*
router.get('/VI',isLoggedIn,function(req,res){



let ord6 =[]
var id = req.user._id
User.find({_id:id},  function(err,nocs){

let num = nocs[0].num


Order.find({},function(err,docs){
var size = docs.length - 1

let cart=[]
 let cart2=[]
 let prop = []
  for(var i = 0; i<docs.length;i++){
 





 cart2.push(docs[i].cart)
 let name = docs[i].buyerName
 let mobile = docs[i].buyerMobile

 if(i == size){
  console.log(cart2.length, 'cart length')
 for(var x=0;x<cart2.length;x++){
   
   let properties = Object.keys(cart2[x].items);
  
let sz = properties.length - 1
  for(var c = 0; c<properties.length;c++){
    prop.push(properties[c])
 
    if(c == sz){


let psize= Object.keys(cart2[x].items)

let psizeX = psize.length




let count = -1
for(num;num<prop.length;num++){
count++


if(count <=psizeX){

ord6.push(cart2[x].items[prop[num]])

User.findByIdAndUpdate(id,{$set:{num:num}},  function(err,docs){


})

}
else if (count>psizeX){
break;

}



}


}

  }


 }

 console.log(ord6.length,'length')

 for(var q=0;q<ord6.length;q++){


// let ord = new Order2()
let idV = ord6[q].item._id
let proQty = ord6[q].qty
Product.find({_id:idV},function(err,mocs){
let qtyV = mocs[0].quantity
let nqty = qtyV - proQty

Product.findByIdAndUpdate(idV,{$set:{quantity:nqty}},function(err,klocs){

})
})


 }

 
}

  }



  res.redirect('/user')
})

})

})




/*

router.post('/checkout',isLoggedIn,  function(req, res, next) {
  if (!req.session.cart) {
      return res.redirect('/cart');
  }
  var cart = new Cart(req.session.cart);
  
  var stripe = require("stripe")(
      "sk_test_IbxDt5lsOreFtqzmDUFocXIp0051Hd5Jol"
  );
var id =req.user._id;
var email = req.user.email
var fullname = req.user.fullname
var mobile = req.user.mobile
 

  stripe.charges.create({
      amount: cart.totalPrice * 100,
      currency: "usd",
      source:  "tok_mastercard", // obtained with Stripe.js
      description: "Test Charge"
  }, function(err, charge) {
      if (err) {
     
          console.log(err.message)
          console.log(req.body.slot,'ma1')
          return res.redirect('/cart');
      }
      var order = new Order({
         

        
       
        cart : cart,
        email: email,
        buyerName: fullname,
        buyerMobile: mobile,
        userId :id,
        amount :cart.totalPrice
      });
      order.save(function(err, result) {
          req.flash('success', 'Successfully bought product!');
          console.log('success', 'Successfully bought product!');
          req.session.cart = null;
          res.redirect('/');
      });
  }); 
});

*/




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

//pk_test_RBqRxgcTy9sSIwuiB62CEC5v00OTSiSYKr
//sk_test_IbxDt5lsOreFtqzmDUFocXIp0051Hd5Jol