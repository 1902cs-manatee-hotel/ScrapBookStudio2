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
        validate: {
            isUrl: true
        } 
    },
    password: {
        type: Sequelize.STRING
    },  
})

module.exports = Scrapbook