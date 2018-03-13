const app = require('./bin/app')
const router = require('./module/router');
const session = require('./bin/session')
const config = require('./config/www')
var koaBody = require('koa-body');

require('./util/globalFunction')

app.keys = ['asdfsecret'];
app.use(session.module(session.config, app));
require('./module');
app.use(koaBody());
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.port);