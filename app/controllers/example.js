
const Example = require('./../models/example');

const getExample = async function(next) {
  const list = await Example.find({ _id: '5c7b960676c5a144b5627488' });
  console.log(1111)
  this.status = 200;
  this.body = {
    code: 1000,
    test: list,
    data: [
      {
        key: '1',
        name: '测试1',
        age: 18,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
      },
      {
        key: '2',
        name: '灰太狼',
        age: 32,
        address: 'London No. 1 Lake Park',
        tags: ['node', 'koa', 'mongodb'],
      },
      {
        key: '3',
        name: '真香',
        age: 321,
        address: 'Sidney No. 1 Lake Park',
        tags: ['vue', 'react'],
      }
    ]
  }
}

const postExample = async (ctx, next) => {
  const req = ctx.request.body;

  ctx.status = 200;
  if (!req.msg || typeof req.msg != 'string') {
    ctx.status = 401;
    ctx.body = {
      msg: 'post request!!',
      desc: `parameter error！！msg: ${req.msg}`,
      data: req
    }
    return;
  }

  const result = await Example_col.create({msg: req.msg});

  ctx.body = {
    msg: 'post request!!',
    desc: 'insert success!',
    data: result
  }
}

module.exports = {
  getExample,
  postExample
}