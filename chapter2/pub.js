/**
 * Created by nalantianyi on 2017/5/16.
 */
const {Sequelize, sequelize} = require('../chapter1/connection');
const {STRING, INTEGER} = Sequelize;

const Pub = sequelize.define('pub', {
    name: {type: STRING},
    address: {type: STRING},
    latitude: {
        type: INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: {min: -90, max: 90}
    },
    longitude: {
        type: INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: {min: -180, max: 180}
    }
}, {
    validate: {
        bothCoordsOrNone: function () {
            if ((this.latitude === null) !== (this.longitude === null)) {
                throw new Error('Require either both latitude and longitude or neither');
            }
        }
    }
});
Pub.sync({force: true}).then(() => {
    Pub.create({name: 'John Deo', address: 'senior engineer',latitude:90})
        .then((pub) => {
            console.log(pub.toJSON());

        }).catch(function(e){
            console.log(e);
    });
});