const router = require('express').Router()
const {User, Scrapbook} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/:id/scrapbooks', async (req, res, next) => {
  try {
      const id = req.user.dataValues.id
      const scrapbooks = await Scrapbook.findAll({
          where: { userId: id }
      })
      res.status(200).json(scrapbooks)
    } catch(err){
        next(err)
    }
})
