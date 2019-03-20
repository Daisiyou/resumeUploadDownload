const router = require('koa-router')();
const  downloadControl = require('./controllers/download')
const  indexContronl = require('./controllers/index')


router.get('/',indexContronl.index)
router.get('/hello',indexContronl.hello)
router.get('/down',downloadControl.download)


module.exports = router;
