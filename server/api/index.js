const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('/images', require('./image'))
router.use('/videos', require('./video'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
