/**
 * Created by nalantianyi on 2017/5/16.
 * 预加载
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING} = Sequelize;

const User = sequelize.define('user', {name: STRING})
    , Task = sequelize.define('task', {name: STRING})
    , Tool = sequelize.define('tool', {name: STRING});

Task.belongsTo(User);
User.hasMany(Task);
User.hasMany(Tool, {as: 'Instruments'});
async function init() {
    await sequelize.sync({force: true});
    // this is where we continue ...
    console.log('sync done!');
    //新建user
    const user = await User.create({name: 'zhangjinhe'});
    console.log(user.toJSON());
    const task = await Task.create({name: 'A Task', userId: user.get('id')});
    console.log(task.toJSON());
    //关联查询

}
init();