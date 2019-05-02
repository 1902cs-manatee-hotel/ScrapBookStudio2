const Sequelize = require('sequelize')
const db = require('../db')

const CanvasText = db.define('canvas-text', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
            notEmpty: true
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
    }
})

module.exports = CanvasText