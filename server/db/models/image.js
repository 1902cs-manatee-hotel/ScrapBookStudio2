const Sequelize = require('sequelize')
const db = require('../db')

const Image = db.define('image', {
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
    tilt: {
        type: Sequelize.INTEGER,
        // allowNull: false,
        defaultValue: 0
    },
    size: {
        type: Sequelize.INTEGER,
    },
    filter: {
        type: Sequelize.STRING
    }
})

module.exports = Image