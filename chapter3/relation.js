/**
 * Created by nalantianyi on 2017/5/19.
 * 各种关联操作
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING, UUID} = Sequelize;

async function init() {
    //删除所有的已存在的表


    //BelongsTo - 属于
    const Player = sequelize.define('player', {name: STRING});
    const Team = sequelize.define('team', {name: STRING});
    Player.belongsTo(Team);

    //外键
    const User = sequelize.define('user', {name: STRING}, {underscored: true}),
        Company = sequelize.define('company', {uuid: {type: UUID, primaryKey: true}});
    User.belongsTo(Company);


    await sequelize.sync({force: true});


}
init();