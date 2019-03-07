// 链接mongodb
const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')

const url = 'mongodb://119.23.63.123/test'
const connection = mongoose.createConnection(url, { useNewUrlParser: true, useCreateIndex: true }, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('芒果 真香 ...')
  }
})

let connect = () => {
  // 自增 ID 初始化
  autoIncrement.initialize(connection)
}
module.exports = {
  connect,
  mongoose,
  connection,
  autoIncrement
}
