
app=require('express')()
const port = 8039
var server = app.listen(port, function () {
   
    console.log("Example app listening 127.0.0.1:", port);
 })
 var bodyParser = require('body-parser');
 
var datafull={"user1":{"username":"yuva","id":5651,"password":"1234"},
"user2":{"username":"sekhar","id":5652,"password":"1234"},
"user3":{"username":"sasi","id":5651,"password":"1234"},
"user4":{"username":"yuva","id":5651,"password":"1234"}}

var got=[{"id":1,"name":"yuva","m1":60,"m2":70,"m3":87,"m4":67,"m5":89},
{"id":2,"name":"sekhar","m1":60,"m2":70,"m3":87,"m4":67,"m5":89},
{"id":3,"name":"sasi","m1":60,"m2":70,"m3":87,"m4":67,"m5":89},
{"id":4,"name":"krishna","m1":60,"m2":70,"m3":87,"m4":67,"m5":89},
{"id":5,"name":"shiva","m1":60,"m2":70,"m3":87,"m4":67,"m5":89},
{"id":6,"name":"srikanth","m1":60,"m2":70,"m3":87,"m4":67,"m5":89},
{"id":7,"name":"mohan","m1":60,"m2":70,"m3":87,"m4":67,"m5":89},
{"id":8,"name":"kushwanth","m1":60,"m2":70,"m3":87,"m4":67,"m5":89},
{"id":9,"name":"bhanu","m1":60,"m2":70,"m3":87,"m4":67,"m5":89},
{"id":10,"name":"sri","m1":60,"m2":70,"m3":87,"m4":67,"m5":89}
];

 


app.get('/:id',function(req,res)
{
    num=req.params['id']
    for (i = 0; i < got.length; i++) {
        if (got[i].id == num) {

            res.status(200).send({ status: true, data: got[i], msg: 'Successfully retrive the data' })
        }
        else {
            res.status(500).send({ status: false, data: 'error', msg: 'User Not Found' });
        }
    }
    
});

   
    
    // var avg=got.m1+got.m2+got.m3+got.m4+got.m5;
    // per=avg/500*100;
    // got.per=per;
    // if(got.m2>35 && got.m3>35 && got.m1>35 && got.m4>35 && got.m5>35)
    // {
    // if(avg>80 && avg<100  )
    // {
    //     got.grade="a"
    // }
    // else if(avg>60 && avg<80)
    // {
    //     got.grade="b"
    // }
    // else if(avg>40 && avg<60)
    // {
    //     got.grade="c"
    // }
    // else if(avg>35 && avg<40)
    // {
    //     got.grade="d"
    // }
    // else
    // {

    //     got.grade="fail"
    // }}
    // else
    // {

    //     got.grade="fail"
    // }

   
    
   
//})
var urlencodedParser = bodyParser.urlencoded(
    { 
        extended: false
     }
    )
    app.use(bodyParser.json());
app.post('/post/:id',function(req,res)
{
    num=req.params['id'];
    console.log(num)
         data = {
            username:req.body.username,
            id:req.body.id,
            password:req.body.password

         };
        //  console.log(data)
        //  datafull[num]=data;
        //  console.log(datafull);
         res.json("hi")
    
        
})