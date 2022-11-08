
app = require('express')()
var cors = require('cors')
app.use(cors())
const port = 4039
var server = app.listen(port, function () {

    console.log("Example app listening 127.0.0.1:", port);
})
var abc=[]

var bodyParser = require('body-parser');
app.use(bodyParser.json());
var got = [{ "id": 1, "name": "yuva", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 },
{ "id": 2, "name": "sekhar", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 },
{ "id": 3, "name": "sasi", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 },
{ "id": 4, "name": "krishna", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 },
{ "id": 5, "name": "shiva", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 },
{ "id": 6, "name": "srikanth", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 },
{ "id": 7, "name": "mohan", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 },
{ "id": 8, "name": "kushwanth", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 },
{ "id": 9, "name": "bhanu", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 },
{ "id": 10, "name": "sri", "m1": 60, "m2": 70, "m3": 87, "m4": 67, "m5": 89 }
];

app.get('/view/:id', function (req, res) {
    num = req.params['id']

    for (i = 0; i < got.length; i++) {
        if(got[i]!=null)
        {
        if (got[i].id == num) {

          var  flag = true;
            result = got[i];
            //res.status(200).send({ status: true, data: got[i], msg: 'Successfully retrive the data' })
        }}
        else {

            //res.status(500).send({ status: false, data: 'error', msg: 'User Not Found' });
        }
    }
    if (flag == true) {
        res.status(200).json({ status: true, data: result, msg: 'Successfully retrive the data' })
    }
    else {
        res.status(500).json({ status: false, data: 'error', msg: ' oh shit User Not Found' });
    }
});
var urlencodedParser = bodyParser.urlencoded(
    {
        extended: false
    }
)

app.post('/post/:id', function (req, res) {
    num = req.params['id'];
    console.log(num)
    data = {
        id: req.body.id, name: req.body.name, m1: req.body.name, m2: req.body.name, m3: req.body.m3, m4: req.body.m4, m5: req.body.m5
    }
   var a=got.push(data)

   res.json(got)

})
app.put('/modi',function(req,res)
{
    
   
    data = {
        uid: req.body.id, name: req.body.name, m1: req.body.name, m2: req.body.name, m3: req.body.m3, m4: req.body.m4, m5: req.body.m5
    }
    val=data.uid
    for (i = 0; i < got.length; i++)
     {
        if(got[i]!=null)
        {
        if (got[i].id == val)
         {
            var  flags = true;
             got[i].name=data.name;
             
             
         }}
        else{

        }
    }
        if (flags == true) {
            res.status(200).send({ status: true, data: got, msg: 'Successfully retrive the data' })
        }
        else {
            res.status(500).send({ status: false, data: 'error', msg: ' oh shit User Not Found' });
        }
        //  res.send(got)
                
    
})
app.delete('/rem/:uid',function(req,res)
{
    
     var num=req.params['uid'];
     console.log(num)
    
     
       for (i = 0; i < got.length; i++)
      {
        if(got[i]!=null)
        {
        if (got[i].id == num)
         {
            console.log("ok")
          delete got[i] 
          
          pos=true;
         }}
        }     
           if (pos == true)
         {
           // delete got[ab];
           res.send(got)
           // res.status(200).send({ status: true, data: got, msg: 'Successfully de the data' })
        }
        else {
            res.status(500).send({ status: false, data: 'error', msg: ' oh shit User Not Found' });
        }
     

   
    
          
    
 })
      