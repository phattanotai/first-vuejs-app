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
            console.log(data);
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
    var data = {
        name:req.body.name,
        sex:req.body.sex,
        address:req.body.address,
        tel:req.body.tel,
        email:req.body.email
    }
    models.save(data,function(err){
           if(err){ 
                console.log(err);
                res.send(err); 
            }else{
                res.send("บันทึกแล้ว")
            }
        });

    });
    router.put('/',function(req,res){
        var data = {
            id:req.body.id,
            name:req.body.name,
            sex:req.body.sex,
            address:req.body.address,
            tel:req.body.tel,
            email:req.body.email
        }
        models.update(data,function(err){
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
