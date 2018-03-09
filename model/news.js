const sequelize = require('../bin/sequelize')
const Sequelize = require('sequelize');
module.exports = sequelize.define('news', {
    title: { type: Sequelize.STRING, allowNull: false },
    thumb: { type: Sequelize.STRING, allowNull: true },
});