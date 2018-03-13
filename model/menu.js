const sequelize = require('../bin/sequelize');
const Sequelize = require('sequelize');
const Menu = sequelize.define('menus', {
    name: { type: Sequelize.STRING, allowNull: false },
    parentid: { type: Sequelize.INTEGER, allowNull: false },
    router: { type: Sequelize.STRING, allowNull: false },
    listorder: {type: Sequelize.INTEGER, allowNull: true, defaultValue: 0}
});
module.exports = Menu;