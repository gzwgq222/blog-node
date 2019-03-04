
const Example = require('./../models/example');

const getExample = async function(next) {
  const data = await Example.find();
  console.log(1111)
  this.status = 200;
  this.body = {
    code: 1000,
    data
    // data: [
    //   {
    //     key: '1',
    //     name: '这都是什么生活',
    //     age: 18,
    //     address: 'New York No. 1 Lake Park',
    //     tags: ['nice', 'developer'],
    //   },
    //   {
    //     key: '2',
    //     name: '灰太狼',
    //     age: 32,
    //     address: 'London No. 1 Lake Park',
    //     tags: ['node', 'koa', 'mongodb'],
    //   },
    //   {
    //     key: '3',
    //     name: '真香',
    //     age: 321,
    //     address: 'Sidney No. 1 Lake Park',
    //     tags: ['vue', 'react'],
    //   }
    // ]
  }
}

const postExample = async function(next) {
  this.status = 200;
  const req = this.request.body
  console.log(req)
  // if (!req.msg || typeof req.msg != 'string') {
  //   this.status = 401;
  //   this.body = {
  //     msg: 'post request!!',
  //     desc: `parameter error！！msg: ${req.msg}`,
  //     data: req
  //   }
  //   return;
  // }

  const result = await Example.create(req);

  this.body = {
    code: 1000,
    desc: 'insert success!',
    data: result
  }
}

module.exports = {
  getExample,
  postExample
}