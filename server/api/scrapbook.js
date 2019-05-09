const router = require('express').Router()
const { Scrapbook, Media } = require('../db/models')
module.exports = router

router.get('/:id/media', async (req, res, next) => {
    try {
      const id = req.params.id
      const media = await Media.findAll({
          where: {scrapbookId: id }
        })
      res.status(200).json(media)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      const scrapbook = await Scrapbook.findByPk(id)

      res.status(200).json(scrapbook)
    } catch (err) {
        next(err)
    }
});


router.post('/', async (req, res, next) => {
  try {
      console.log('REQ.BODY', req.body)
      const scrapbook = await Scrapbook.create(req.body)
      res.status(200).json(scrapbook)
  } catch(err) {next(err)}
})

router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const scrapbook = await Scrapbook.findByPk(id)

        const updatedScrapbook = await scrapbook.update(req.body)
        res.status(200).json(updatedScrapbook)
    } catch(err) {next(err)}
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        await Scrapbook.destroy({where: {id}})
        res.status(200)
    } catch(err) {next(err)}
})
