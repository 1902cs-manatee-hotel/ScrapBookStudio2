const Sequelize = require('sequelize')
const db = require('../db')

const Scrapbook = db.define('scrapbook', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    image: {
        type: Sequelize.STRING,
        defaultValue: 'http://www.hobbycraft.co.uk/supplyimages/620793_1000_1_800.jpg',
        validate: {
            isUrl: true
        } 
    },
    password: {
        type: Sequelize.STRING
    },
    // userId: {
    //     type: Sequelize.INTEGER,
    //     defaultValue: 1
    // }
})

module.exports = Scrapbook