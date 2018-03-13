const router = require('../router');
const menuModel = _loadModel('menu');
router.get('/admin/menu', async (ctx) => {
    try {
        const result = await menuModel.findAll();
        ctx.body = _successResponse('菜单列表获取成功', result);
    } catch (e) {
        ctx.body = _errorResponse('error')
    }
})
router.post('/admin/menu', async (ctx) => {
    try {
        const result = await menuModel.create(ctx.request.body)
        ctx.body = _successResponse('菜单添加成功', result);
    } catch (e) {
        ctx.body = _errorResponse('error')
    }
})
router.put('/admin/menu', async (ctx) => {

})
router.delete('/admin/menu', async (ctx) => {

})