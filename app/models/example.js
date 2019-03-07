
const { mongoose, connection, autoIncrement } = require('../../mongoose')
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
// 自增 ID 插件配置
exampleSchema.plugin(autoIncrement.plugin, {
	model: 'example',
	field: 'id',
	startAt: 1,
	incrementBy: 1,
});
module.exports = connection.model('example', exampleSchema);
