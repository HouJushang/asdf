const path = require('path')
const config = require('../config/app')
global._loadModel = function(fileName = 'index') {
    return require(path.join(config.appPath, 'model', fileName))
}
global._successResponse = function(message = '操作成功', data = {}){
    return {
        code: 'success',
        data,
        message
    }
}
global._errorResponse = function(message = '操作失败', data = {}){
    return {
        code: 'error',
        data,
        message
    }
}