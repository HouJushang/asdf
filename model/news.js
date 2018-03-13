const sequelize = require('../bin/sequelize');
const Sequelize = require('sequelize');
const NewsData = require('./news_data')
const News = sequelize.define('news', {
    title: { type: Sequelize.STRING, allowNull: false },
    thumb: { type: Sequelize.STRING, allowNull: true },
});
News.NewsData = News.hasOne(NewsData, {as: 'news_data', foreignKey : 'newsId'});
module.exports = News;