const Sequelize = require('sequelize')
const db = require('../db')

const Contributor = db.define('contributor', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate : {
      isEmail: true
    }
  }
})



module.exports = Contributor