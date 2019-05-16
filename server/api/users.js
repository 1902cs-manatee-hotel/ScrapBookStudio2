const router = require('express').Router()
const {User, Scrapbook} = require('../db/models')
const sendScrapbookEmail = require('../utils')
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

router.post('/sendscrapbook', (req, res, next) => {
  console.log('REQUEST BODY:', req.body)
  try {
      const { scrapbookid, pageid, email } = req.body
      sendScrapbookEmail(email, req.user.firstName, req.user.lastName, scrapbookid, pageid)
      res.sendStatus(200)
    } catch(err){
        next(err)
    }
})
