/**
 * Created by nalantianyi on 2017/5/20.
 * 本实例对比hasone与belongsto的区别
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING, UUID} = Sequelize;

async function init() {
    //删除所有的已存在的表

    const Player = sequelize.define('player', {name: STRING}),
        Coach = sequelize.define('coach', {name: STRING}),
        Team = sequelize.define('team', {name: STRING});

    //HasOne 和 BelongsTo 插入外键的位置有所不同。HasOne 会向目标模型中插入关联键，而BelongsTo 会向源模型中插入关联键。
    /*
     假设Player模型通过teamId列与其团队建立联系，每个团队的教练Coach信息通过coachId列存储。在这些 1:1 场景中需要以不同的方式建立关系，
     因为模型外键的存储位置不同。
     当信息关联是存在于当前源模型时，我们可以使用belongsTo。在上面示例中，Player适合使用belongsTo，因为它有teamId列。
     */

    /**
     * 分析：
     * 在此处，一个教练与队伍是1：1关系，一个队员属于一个队伍
     * player中有teamId team中有coachId
     */
    Player.belongsTo(Team);
    Coach.hasOne(Team);//此处使用Team.belongsTo(Coach); 也完全OK 只是逻辑上的区别


    await sequelize.sync({force: true});


}
init();