const Sequelize = require('sequelize')
const db = require('../db')

const Video = db.define('video', {
    path: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isUrl: true
        }
    },
    x_coord: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    y_coord: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tilt: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    size: {
        type: Sequelize.INTEGER,
        validate: {
            min: 5
        }
    },
    filter: {
        type: Sequelize.STRING
    }
})

module.exports = Video