
app=require('express')()



var server = app.listen(6009, function () {
   
    console.log("app listening 127.0.0.1:6009/1")
 })
 var bodyParser = require('body-parser');
 var urlencodedParser = bodyParser.urlencoded(
    { 
        extended: false
     }
    )
    app.use(bodyParser.json());
   app.use(identify)
    function identify(req,res,next)
    {
        
        if(req.headers.username=="yuva")
        {
            next()
        }
        else{
            res.end("not valid user")
        }

    }
    // app.use(function(req,res,next)
    // {
    //     console.log(req.body)
    //     next()
    // })
    app.get('/:id',function(req,res)
{  
      num=req.headers;
      console.log(num)
     res.send("ok coming to get")
 })