
const mongoose = require('mongoose');

/**
 *  Mongoose里一切都始于 Schema
 *  Schema 集合/表结构
 *  model模型
 * */

const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  parentId: mongoose.ObjectId,
  title: {
    type: String,
    required: true
  }
},
{ 
  collection: 'example',
  versionKey: false
});

module.exports = mongoose.model('example', exampleSchema);