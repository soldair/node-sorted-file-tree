
var test = require('tape');
var s = require('./');

test('can walk',function(t){
  s('./',function(err,tree){
    t.error(err,'should not have error');
    t.ok(tree,'should have tree');

    var last = tree[0];
    for(var i=1;i<tree.length;++i){
      if(last > tree[i]) {
        t.fail('did not sort correctly "'+last+'" > "'+tree[i]+'"');
        break;
      }
      last = tree[i];
    }

    t.end();

  })
})
