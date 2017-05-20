/**
 * Created by nalantianyi on 2017/5/20.
 * 一对多
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING, UUID} = Sequelize;

async function init() {
    //删除所有的已存在的表
    const User = sequelize.define('user', {name: STRING}),
        Project = sequelize.define('project', {name: STRING});

    Project.hasMany(User, {as: 'Workers'});

    await sequelize.sync({force: true});


    const user1=await User.create({name:'zjh'});
    const user2=await User.create({name:'jx'});

    const project=await Project.create({name:'ztesoft'});
    await project.setWorkers([user1,user2]);
    const users=await project.getWorkers();
    const usersJson=users.map((user)=>{return user.toJSON()});
    console.log(usersJson);


    const projects=await Project.findAll({include:[{model:User}]});
    console.log(projects);

}
init();