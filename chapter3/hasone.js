/**
 * Created by nalantianyi on 2017/5/19.
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING, UUID} = Sequelize;

async function init() {
    //删除所有的已存在的表
    //HasOne关联表示一对一关系的外键存在于目标模型。
    const Uesr = sequelize.define('user', {name: STRING}),
        Project = sequelize.define('project', {name: STRING});

    Project.hasOne(Uesr);


    await sequelize.sync({force: true});


}
init();