'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var db = require('./models/db');


gulp.task('db_create_instructor_table', function() {
  var sql = "create table instructors (id int not null auto_increment, " +
    "name varchar(12) not null, " +
    "email varchar(255), " +
    "primary key (id));";

  function cb(res) {
    console.log(res);
  }

  db.raw(sql).then(cb);
});
gulp.task('db_create_student_table', function() {
  var sql = "create table students ( " +
    "id int not null auto_increment, " +
    "name varchar(255) not null unique, " +
    "email varchar(255), " +
    "instructor_id int not null references instructors(id), " +
    "primary key (id) " +
  ");";
  function cb(res) {
    console.log(res);
  }
  db.raw(sql).then(cb);
});
gulp.task('db_create_user_table', function() {
  var sqlString = "create table user_accounts (" +
  "id int not null auto_increment, " +
  "email varchar(255) not null, " +
  "password_hash varchar(61) not null, " +
  "primary key (id) " +
  ");";
  //callback(response)
  function cb(res) {
    console.log(res);
  }
  db.raw(sqlString).then(cb);
  //db.raw(query).then(callback)
});
// section to drop SQL tables!
gulp.task('db_drop_user_table', function() {
  var sqlString = "drop table user_accounts;";
  //callback(response)
  function cb(res) {
    console.log(res);
  }
  db.raw(sqlString).then(cb);
  //db.raw(query).then(callback)
});
// nodemon it up!
gulp.task('Nodemon', restartServer);

function restartServer() {
  nodemon({
    script: './bin/www',
    ext: 'js hbs scss sql'
  });
};

gulp.task('default', ['Nodemon']);