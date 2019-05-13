const Sequelize = require('sequelize')
const db = require('../db')

const Media = db.define('media', {
    path: {
        type: Sequelize.TEXT,
        // allowNull: false,
        validate: {
            notEmpty: true,
            isUrl: true
        }
    },
    x_coord: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        defaultValue: 50
    },
    y_coord: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        defaultValue: 50
    },
    rotation: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        defaultValue: 0
    },
    width: {
        type: Sequelize.FLOAT,
        defaultValue: 1
    },
    height: {
        type: Sequelize.FLOAT,
        defaultValue: 1
    },
    filter: {
        type: Sequelize.STRING
    }
})

module.exports = Media