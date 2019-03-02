var router = require('koa-router')();

router.prefix('/users');

router.get('/', function *(ctx, next) {
  console.log(2, ctx)
  this.body = 'hello, world koa';
});

router.get('/bar', function *(next) {
  this.body = 'this is a users/bar response!';
});

module.exports = router;
