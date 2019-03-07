
const { mongoose, connection, autoIncrement } = require('../../mongoose')
/**
 *  Mongoose里一切都始于 Schema
 *  Schema 集合/表结构
 *  model模型
 * */
const Schema = mongoose.Schema
const tagSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  }
},
{ 
  collection: 'tag',
  versionKey: false
});
// 自增 ID 插件配置
tagSchema.plugin(autoIncrement.plugin, {
	model: 'tag',
	field: 'id',
	startAt: 1,
	incrementBy: 1,
});
module.exports = connection.model('tag', tagSchema)
