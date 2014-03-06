'use strict';

var request = require('request');
var fs = require('fs');

exports.index = function(req, res){
  res.render('home/index', {title: 'Express Template'});
};

exports.email = function(req, res){
  var key = process.env.MAILGUN;
  var url = 'https://api:' + key + '@api.mailgun.net/v2/sandbox7244.mailgun.org/messages';
  var post = request.post(url, function(err, response, body){
    res.redirect('/');
  });
  var form = post.form();
  form.append('from', 'chyld.medford@gmail.com');
  form.append('to', req.body.to);
  form.append('subject', req.body.subject);
  //form.append('text', req.body.body);
  form.append('html', req.body.body);
  form.append('attachment', fs.createReadStream(__dirname + '/../static/img/money.jpg'));
  form.append('attachment', fs.createReadStream(__dirname + '/../static/img/startup.jpg'));
};

