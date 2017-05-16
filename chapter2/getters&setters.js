/**
 * Created by nalantianyi on 2017/5/16.
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING} = Sequelize;
/**
 做为一个属性定义
 */
const Employee = sequelize.define('employee', {
    name: {
        type: STRING,
        allowNull: false,
        get: function () {
            const title = this.getDataValue('title');
            return this.getDataValue('name') + '(' + title + ')';
        }
    },
    title: {
        type: STRING,
        allowNull: false,
        set: function (val) {
            this.setDataValue('title', val.toUpperCase());
        }
    }
});
Employee.sync({force: true}).then(() => {
    Employee.create({name: 'John Deo', title: 'senior engineer'})
        .then((employee) => {
            console.log(employee.get('name'));
            console.log(employee.get('title'));

        });
});
