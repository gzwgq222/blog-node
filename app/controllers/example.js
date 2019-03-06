
const Example = require('./../models/example');

const getExample = async function(next) {
  console.log(18281281)
  const data = await Example.find();
  this.status = 200;
  this.body = {
    code: 1000,
    data
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