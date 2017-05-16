/**
 * Created by nalantianyi on 2017/5/16.
 */

/**
 * 1.连接
 * @type {*}
 */
const Sequelize = require('sequelize');
const config = require('../config');
const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});
module.exports={sequelize,Sequelize};



