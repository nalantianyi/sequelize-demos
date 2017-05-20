/**
 * Created by nalantianyi on 2017/5/20.
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING, UUID} = Sequelize;

async function init() {
    //删除所有的已存在的表
    //HasOne关联表示一对一关系的外键存在于目标模型。
    const Tag = sequelize.define('tag', {name: STRING}),
        Project = sequelize.define('project', {title: STRING});

    Project.hasMany(Tag);
    await sequelize.sync({force: true});


    //一个Product和User在同一步中被创建：
    const product = await Project.create({title:'Chair',tags:[{name:'zjh'},{name:'jx'}]},{include:[Tag]});
    console.log(product.toJSON());

}
init();