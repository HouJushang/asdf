const app = require('./bin/app')
const router = require('./module/router');
const session = require('./bin/session')
const config = require('./config/www')

app.keys = ['asdfsecret'];
app.use(session.module(session.config, app));

require('./module')
app.use(router.routes()).use(router.allowedMethods());
app.listen(config.port);