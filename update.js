//update.js
app=require('express')()
var server = app.listen(7009, function () {
   
    console.log("app listening 127.0.0.1:7009")
 })
 var bodyParser = require('body-parser');
 var urlencodedParser = bodyParser.urlencoded(
    { 
        extended: false
     }
    )
    app.use(bodyParser.json());
    app.put('/:id',function(req,res)
    {
        
        var data={"user1":{"username":"yuva","id":5651,"password":"1234"},
"user2":{"username":"sekhar","id":5652,"password":"1234"},
"user3":{"username":"sasi","id":5653,"password":"1234"},
"user4":{"username":"yuva","id":5654,"password":"1234"}}



        var data = [
            {
                "userId": 1,
                "details": { "username": "yuva", "id": 5651, "password": "1234" }
            },
            {
                "userId": 2,
                "details": { "username": "sekhar", "id": 5652, "password": "1234" }
            },
            {
                "userId": 3,
                "details": { "username": "sasi", "id": 5653, "password": "1234" }
            },
            {
                "userId": 4,
                "details": { "username": "yuva", "id": 5654, "password": "1234" }
            }
        ]
         num=req.params['id'];
         upda =  {uid:req.body.user1.id}
         val=upda.uid
       
         data[num].id=val;
         res.send(data)   
     })