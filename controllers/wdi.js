var express = require('express');
var ctrl = express.Router();
var InstructorModel = require('../models/InstructorModel');
var StudentModel = require('../models/StudentModel');

// console.log(InstructorModel);

/* GET home page. */
ctrl.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

ctrl.get('/create', createYourInstructors);
ctrl.post('/student', createStudentFromEther);

function createStudentFromEther(req, res, next) {
  var student = {
    name: req.body.name,
    email: req.body.email,
    instructor_id: req.body.instructor_id
  }
  new StudentModel(student).save().then(function(result) {
    console.log(result.instructor());
    res.json(result);
  });
};

function createYourInstructors(req, res, next) {
  var jim = { name: 'Jim', email: 'jimrocksatbanjo@oldtownschoolofmusic.org'};
  var james = { name: 'James', email: 'james@codeforcoffee.org' };
  new InstructorModel(jim).save().then(function(result) {
    new InstructorModel(james).save().then(function(anotherResult) {
      var staff = [];
      staff.push(result, anotherResult);
      res.json(staff);
    });
  });
};

module.exports = ctrl;