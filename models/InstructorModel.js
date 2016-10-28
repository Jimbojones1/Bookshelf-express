var db = require('./db');
var bookshelf = require('bookshelf')(db);

var InstructorModel = bookshelf.Model.extend({
  tableName: 'instructors'
});

module.exports = InstructorModel;