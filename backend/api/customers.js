var express = require('express');
var models = require('../models/customer');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
    models.get(function(err,data){
        if(err){
            console.log(err); 
            res.send(err);
        }else{
            res.json(data);
        }
    });

});
router.get('/:text', function(req, res, next) {
    models.getByText(req.params.text, function(err,data){
        if(err){
            console.log(err); 
            res.send(err);
        }else{
            console.log(data);
            res.json(data);
        }
    });
});
router.get('/id/:id', function(req, res, next) {
    models.getById(req.params.id,function(err,data){
        if(err){
            console.log(err); 
            res.send(err);
        }else{
            console.log(data);
            res.json(data);
        }
     });
});

router.get('/name/:name', function(req, res, next) {
    models.getByName(req.params.name,function(err,data){
        if(err){
            console.log(err); 
            res.send(err);
        }else{
            console.log(data);
            res.json(data);
        }
    });
});
router.get('/sex/:sex', function(req, res, next) {
    models.getBySex(req.params.sex,function(err,data){
        if(err){
            console.log(err); 
            res.send(err);
        }else{
            console.log(data);
            res.json(data);
        }
    });
});

router.post('/new/',function(req,res){
    data = req.body;
    models.save(data,function(err){
           if(err){ 
                console.log(err);
                res.send(err); 
            }else{
                res.send("บันทึกแล้ว")
            }
        });

});
router.put('/:id',function(req,res){
    data = req.body;
    var id = req.params.id;
    models.update(id,data,function(err){
        if(err){ 
            console.log(err); 
            res.send(err);
        }else{
            res.send("แก้ไขแล้ว");
        }
    });
    
});
router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    models.delete(id,function(err,data){
        if(err){
            console.log(err);
            res.send(err);
        }else{
            res.send("ลบข้อมูล id :"+req.params.id +" แล้ว");
        }
    });
    
});



module.exports = router;
