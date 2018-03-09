const Sequelize = require('sequelize');
const sequelize = require('../bin/sequelize')
module.exports = sequelize.define('newsData', {
    body: { type: Sequelize.TEXT, allowNull: false },
});