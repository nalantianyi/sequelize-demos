/**
 * Created by nalantianyi on 2017/5/17.
 * 模型属性移除
 *
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING} = Sequelize;

const User = sequelize.define('user', {
    firstName: STRING,
    lastName: STRING
});

async function init() {
    await User.sync({force: true});
    await User.create({firstName: 'XXXXX', lastName: 'xxxx'});

    const user = await User.findOne();
    console.log(user.toJSON());
    await User.removeAttribute('firstName');
    const _user = await User.findOne();
    console.log(_user.toJSON());


}
init();