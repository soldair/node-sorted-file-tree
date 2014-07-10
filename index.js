var walkdir = require('walkdir');
var bs = require('binarysearch');

module.exports = function(dir,opts,cb){
  if(typeof opts == 'function'){
    cb = opts;
    opts = {};
  }

  var cmp = function(v1,v2){
    return v1>v2?1:(v2>v1?-1:0);
  }

  var tree = [];
  walkdir(dir,opts||{}).on('path',function(path){
    bs.insert(tree,path,cmp);
  }).on('end',function(){
    once(false,tree);
  }).on('error',function(err){
    once(err);
  });

  function once(err,data){
    cb(err,data);
    cb = function(){};
  }

}

