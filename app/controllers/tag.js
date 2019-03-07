const Tag = require('../models/tag')

const taglist = async function() {
  const query = this.request.body
  console.log(1, query)
  const data = await Tag.find()
  this.status = 200
  this.body = {
    code: 1000,
    data
  }

}
const createtag = async function() {
  const req = this.request.body
  console.log(6, req)
  this.state = 200
  const result = await Tag.create(req)
  this.body = {
    code: 1000,
    desc: '新增成功'
  }
}
const deletetag = async function() {
  const query = this.request.body
  await Tag.remove(query)
  this.state = 200
  this.body = {
    code: 1000,
    desc: '请求成功'
  }
}

module.exports = {
  taglist,
  createtag,
  deletetag
}