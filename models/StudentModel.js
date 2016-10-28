var db = require('./db');
var bookshelf = require('bookshelf')(db);
var InstructorModel = require('./InstructorModel');

var StudentModel = bookshelf.Model.extend({
  tableName: 'students',
  instructor: function(result) {
    return this.belongsTo(InstructorModel);
  }
});

module.exports = StudentModel;