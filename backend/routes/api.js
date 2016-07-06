var express = require('express');
var router = express.Router();

router.get('/posts',function(req,res){
  res.send({message:'TODO return all posts'});
})

router.post('/posts',function(req,res){
  res.send({message:'TODO create a new post'});
})

router.route('/posts/:id')
  .get(function(req,res){
    res.send({message:'TODO return post with '+req.params.id})
  })
  .post(function(req,res){
    res.send({message:'TODO create a new post with'+req.params.id})
  })

module.exports = router;
