const Tag = require('../models/tag')

const taglist = async function() {
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

module.exports = {
  taglist,
  createtag
}