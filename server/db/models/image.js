const Sequelize = require('sequelize')
const db = require('../db')

const Image = db.define('image', {
    path: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true,
            isUrl: true
        }
    },
    x_corrd: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    y_corrd: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tilt: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,     
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

module.exports = Image