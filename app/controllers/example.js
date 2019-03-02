
const Example_col = require('./../models/example');

const getExample = async function(next) {
  const req = this.request.query;
console.log(req, 121)
  const examples = await Example_col.find({}, { _id: 0 });

  this.status = 200;
  this.body = {
    msg: 'get request!!',
    data: {
      data: 111,
      examples,
    }
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