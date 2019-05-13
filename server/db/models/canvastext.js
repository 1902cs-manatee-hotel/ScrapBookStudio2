const Sequelize = require('sequelize')
const db = require('../db')

const CanvasText = db.define('canvas_text', {
    content: {
        type: Sequelize.TEXT,
        allowNull: false,
        defaultValue: 'Enter Text'
    },
    x_coord: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 50
    },
    y_coord: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 50
    },
    width: {
      type: Sequelize.FLOAT,
      defaultValue: 1
    },
    height: {
      type: Sequelize.FLOAT,
      defaultValue: 1
    },
    rotation: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    color: {
        type: Sequelize.STRING,
        defaultValue: 'black'
    },
    size: {
        type: Sequelize.INTEGER,
        validate: {
            min: 5
        },
        defaultValue: 12
    }
})

module.exports = CanvasText
