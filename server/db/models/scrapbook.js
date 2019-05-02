const Sequelize = require('sequelize')
const db = require('../db')

const ScrapBook = db.define('scrapbook', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },  
})

module.exports = ScrapBook