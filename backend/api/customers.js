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
            if(data == ''){
                
                return res.status(404).json({"status":404,"message":"ไม่พบข้อมูลที่ค้นหา"});
            }
            const result = {
                "status":200,
                "data":data
            }
            console.log(data);
            res.json(result);
        }
    });

});
//================================================================================================
router.get('/:text', function(req, res, next) {
    models.getByText(req.params.text, function(err,data){
        if(err){
            console.log(err); 
            res.send(err);
        }else{
            if(data == ''){
                
                return res.status(404).json({"status":404,"message":"ไม่พบข้อมูลที่ค้นหา"});
            }
            const result = {
                "status":200,
                "data":data
            }
            console.log(data);
            res.json(result);
        }
    });
});
//================================================================================================
router.get('/id/:id', function(req, res, next) {
    models.getById(req.params.id,function(err,data){
        if(err){
            console.log(err); 
            res.send(err);
        }else{
            if(data == ''){
                return res.status(404).json({"status":404,"message":"ไม่พบข้อมูลที่ค้นหา"});
            }
            const result = {
                "status":200,
                "data":data
            }
            console.log(data);
            res.json(result);
        }
     });
});
//================================================================================================
router.get('/name/:name', function(req, res, next) {
    models.getByName(req.params.name,function(err,data){
        if(err){
            console.log(err); 
            res.send(err);
        }else{
            if(data == ''){
                return res.status(404).json({"status":404,"message":"ไม่พบข้อมูลที่ค้นหา"});
            }
            const result = {
                "status":200,
                "data":data
            }
            console.log(data);
            res.json(result);
        }
    });
});
//================================================================================================
router.get('/sex/:sex', function(req, res, next) {
    models.getBySex(req.params.sex,function(err,data){
        if(err){
            console.log(err); 
            res.send(err);
        }else{
            if(data == ''){
                
                return res.status(404).json({"status":404,"message":"ไม่พบข้อมูลที่ค้นหา"});
            }
            const result = {
                "status":200,
                "data":data
            }
            console.log(data);
            res.json(result);
        }
    });
});
//================================================================================================
router.post('/new/',function(req,res){
    data = req.body;
    models.save(data,function(err){
        console.log('[บันทึก] '+data);
           if(err){ 
                console.log(err);
                res.send(err); 
            }else{ 
                return res.status(201).json({"status":201,"message":"บันทึกข้อมูลเรียนร้อยแล้ว"});
            }
        });

});
//================================================================================================
router.put('/:id',function(req,res){
    data = req.body;
    var id = req.params.id;
    models.getById(id,function(err,a){
        if(a != ''){
            console.log('[แก้ไข] id'+id);
            models.update(id,data,function(err){
                if(err){ 
                    console.log(err); 
                    res.send(err);
                }else{
                    return res.status(201).json({"status":201,"message":"แก้ไขข้อมูลเรียนร้อยแล้ว"});
                }
            });
        }else{
            return res.status(404).json({"status":404,"message":"ไม่พบข้อมูล"});
        }
    });
});
//================================================================================================
router.delete('/:id', function(req, res, next) {
    const id = req.params.id;
    models.getById(id,function(err,a){
        if(a != ''){
            console.log('[ลบ] id'+id);
            models.delete(id,function(err,data){
                if(err){
                    console.log(err);
                    res.send(err);
                }else{
                    return res.status(201).json({"status":201,"message":"ลบข้อมูลเรียนร้อยแล้ว"});
                }
            });
        }else{
            return res.status(404).json({"status":404,"message":"ไม่พบข้อมูล"});
        }
    });
});
//================================================================================================
module.exports = router;
