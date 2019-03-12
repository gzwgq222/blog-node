const Tag = require('../models/tag')

const taglist = async function() {
  let name = this.request.query.name
  const page = Number(this.request.query.page) || 10
  const params = name ? {name} : {}
  const data = await Tag.find(params, {_id: 0}).limit(page)
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