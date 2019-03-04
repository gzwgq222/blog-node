
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
}, { collection: 'example', versionKey: false});

module.exports = mongoose.model('example', exampleSchema);