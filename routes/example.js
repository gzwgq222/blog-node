
var router = require('koa-router')()


var example_controller = require('../app/controllers/example');

router.get('/example/info', example_controller.getExample);
router.post('/example/add', example_controller.postExample);

module.exports = router;