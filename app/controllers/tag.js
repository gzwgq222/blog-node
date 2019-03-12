const Tag = require('../models/tag')

const taglist = async function() {
  const name = this.request.query.name,
        page = Number(this.request.query.page) || 10,
        /**
         * 正则表达式中使用变量
         * 一定要使用eval将组合的字符串进行转换
         * 不能直接将字符串拼接后传入给表达式
         * 否则没有报错信息，只是结果为空
         * 以下两种写法等同
         */
        params = name ? {name: eval(`/${name}/i`)} : {},
        // params = name ? {name: {$regex: name, $options: '$ix'}} : {},
        total = await Tag.find()
                         .count(),
        data = await Tag.find(params, {_id: 0})
                        .limit(page)
                        .skip()
                        .sort({id: 1})
  this.status = 200
  this.body = {
    code: 1000,
    data,
    total
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