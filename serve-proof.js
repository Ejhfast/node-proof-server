var exec = require('child_process').exec,
    express = require('express'),
    _ = require('underscore'),
    temp = require('temp'),
    server = express.createServer(),
    fs = require('fs');

var exc_cmd = "ccl -I ~/Brewless/acl2-sources/saved_acl2.dx86cl -e \"(acl2::acl2-default-restart)\" < ";
var boilerplate = "(in package \"ACL2\")\n(program)\n(include-book \"proof-checker\")\n\n"
var foot = function(tmp){ return "(proof-check \"" + tmp + "\" (assumptions) (rules) (proof) (constants) (required))\n" };

server.use(express.bodyParser());

server.post('/prove', function(req,res){
  
  console.log(req.body.post);
  
  // Initialize temporary file paths...
  
  var t1 = temp.path({path: '.'}),
      t2 = temp.path({path: '.'}),
      post = JSON.parse(req.body.post),
      out_str = "";
      
  console.log(post["rules"]);
      
  // Construct valid file string using post parameters
      
  _.each(['rules', 'assumptions', 'constants', 'required', 'proof'], function(key){
    out_str += "(defun "+key+" ()\n";
    if (post[key])
      out_str += "'("+post[key]+"))\n";
    else
      out_str += " nil)\n";
  });
  
  var file = boilerplate + out_str + foot(t1);
  console.log(file);
  
  // Execute proof program. Callback on completion, and read out the resulting file
    
  fs.writeFile(t2, file, function(err){
    if (err) throw err;
    exec(exc_cmd + t2, function callback(err, stdout, sderr){
          if (err) throw err;
          fs.readFile(t1, 'ascii', function(err,data){
            if (err) throw err;
            res.send({call:post, message:data});
          });
        });
  });
});

server.listen(3030);
