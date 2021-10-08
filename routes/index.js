var express = require('express');
var router = express.Router();
var logger = require('../logger');

var users = [
  'jktest', 'jktest2',
  //'jcbryce', 'hcbyrd', 'macallahan1', 'rmclark', 'tacouto', 'thdao', 'tddegennaro', 'hdominique', 'jeduffy', 'ajetienne', 'mforster', 'jmgaliano', 'gagreco', 'rhanif', 'jrmannarino', 'amartin1', 'jepassanante', 'rpetrosino', 'asazhin', 'jzemlanicky'
  'laatkinson', 'mbadalamente', 'tjcarta', 'cacooper', 'hadewhurst', 'cjflores1', 'agil', 'rmhayes', 'srippolito', 'dnirwin', 'hketsela', 'amills1', 'naorekhov', 'hrajan', 'ajsanteramo', 'bcsullivan', 'ndvazquez', 'jrwilkinson'
];
users.sort();

// Home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CSC375 / SER300 Collaborative Web App', users: users });
});

// Init router for each user
users.forEach(function (username) {
  require('./users/' + username)(router, username);
});

router.get('/api/add', function(req, res, next) {
  var n1 = parseInt(req.query.n1);
  var n2 = parseInt(re1.query.n2);
  logger.info('/api/add Used to add ' + n1 + ' and ' + n2);
  res.json({answer: n1 + n2});
});

module.exports = router;
