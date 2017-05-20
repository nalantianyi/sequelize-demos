/**
 * Created by nalantianyi on 2017/5/20.
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING, UUID} = Sequelize;

async function init() {
    //删除所有的已存在的表
    //HasOne关联表示一对一关系的外键存在于目标模型。
    const User = sequelize.define('user', {first_name: STRING,last_name:STRING}),
        Project = sequelize.define('project', {title: STRING});

    Project.belongsTo(User);
    await sequelize.sync({force: true});


    //一个Product和User在同一步中被创建：
    const product=await Project.create({title:'Chair',user:{first_name:'Mick',last_name:'Broadstone'}},{include:[User]});
    console.log(product.toJSON());

}
init();