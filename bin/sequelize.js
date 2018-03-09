const config = require('../config/dataBase.js')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(`mysql://${config.name}:${config.password}@${config.host}:${config.port}/${config.database}`);

sequelize.authenticate().then(() => {
    console.log('Sequelize connection has been established successfully.');
}).catch(err => {
    console.error('authenticateError:', err.name);
});
module.exports = sequelize;
// sequelize.sync();