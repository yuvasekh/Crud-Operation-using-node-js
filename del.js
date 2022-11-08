//del.js
var data={"user1":{"username":"yuva","id":5651,"password":"1234"},
"user2":{"username":"sekhar","id":5652,"password":"1234"},
"user3":{"username":"sasi","id":5651,"password":"1234"},
"user4":{"username":"yuva","id":5651,"password":"1234"}}
app=require('express')()
var cors = require('cors')
app.use(cors())
var server = app.listen(9019, function () {
   
    console.log("app listening 127.0.0.1:9019")
 })
 var bodyParser = require('body-parser');
 var urlencodedParser = bodyParser.urlencoded(
    { 
        extended: false
     }
    )

 //app.use(bodyParser.json());

 app.get('/all', function (req, res) {
          
   // for (i = 0; i < got.length; i++) {
   // abc=data[i];
   // console.log(abc)
   // }
       res.status(200).json({ status: true, data: data, msg: 'Successfully retrive the data' })
   
  
});

 
 app.delete('/:id',function(req,res)
{
     num=req.params['id'];
     console.log(num)
     delete data[num]
     res.send(data)
 })