/**
 * Created by nalantianyi on 2017/5/16.
 */

const {Sequelize,sequelize}=require('./connection');
const {STRING}=Sequelize;

const User=sequelize.define('user',{
    firstName:{
        type:STRING,
        field:'first_name'
    },
    lastName:{
        type:STRING
    }
},{freezeTableName:true});
User.sync({force:true}).then(()=>{
    return User.create({
        firstName:'John',
        lastName:'Hancock'
    });
});