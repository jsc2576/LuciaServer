let mongoose = require('mongoose');
mongoose.Promise = global.Promise;

let Schema = mongoose.Schema;
let LuciaSchema = new Schema({
  title: String,
  date: Date,
  type: String
});

mongoose.connect('mongodb://localhost:27017/Lucia');

module.exports = mongoose.model('Lucia', LuciaSchema, 'LuciaCollection');
