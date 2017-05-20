/**
 * Created by nalantianyi on 2017/5/20.
 * 多对多(Belongs-To-Many)关联
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING, UUID} = Sequelize;

async function init() {
    //删除所有的已存在的表
    const User = sequelize.define('user', {name: STRING}),
        Project = sequelize.define('project', {name: STRING});

    Project.belongsToMany(User, {through: 'UserProject'});
    User.belongsToMany(Project, {through: 'UserProject'});

    await sequelize.sync({force: true});
    const user1 = await User.create({name: 'zjh'});
    const user2 = await User.create({name: 'jx'});

    const project1 = await Project.create({name: 'ztesoft'});
    const project2 = await Project.create({name: 'alibaba'});

    await user1.addProject(project1);
    await user1.addProject(project2);
    const projects4user1=await user1.getProjects();



}
init();