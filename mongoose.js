const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
const config = require('./config')

const connection = mongoose.createConnection(config.db, { useNewUrlParser: true }, err => {
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
