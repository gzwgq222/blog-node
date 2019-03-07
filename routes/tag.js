const router = require('koa-router')()
const tag = require('../app/controllers/tag')

router.get('/tag/list', tag.taglist)
router.post('/tag/create', tag.createtag)
router.post('/tag/delete', tag.deletetag)

module.exports = router