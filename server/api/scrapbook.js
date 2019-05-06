const router = require('express').Router()
const { ScrapBook } = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
    try {
        console.log('req.body', req.user)
        const id = req.user.dataValues.id
        const scrapbooks = await ScrapBook.findAll({
            where: { userId: id }
        })
        res.status(200).json(scrapbooks)
      } catch(err){
          next(err)
      }
})

router.get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id
      const scrapbook = await ScrapBook.findByPk(id)

      res.status(200).json(scrapbook)
    } catch (err) {
        next(err)
    }
});

router.put('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        const scrapbook = await Image.findByPk(id)

        const updatedScrapbook = await scrapbook.update(req.body)
        res.status(200).json(updatedScrapbook)
    } catch(err) {next(err)}
})

router.delete('/:id', async (req, res, next) => {
    try {
        const id = req.params.id
        await ScrapBook.destroy({where: {id}})
        res.status(200)
    } catch(err) {next(err)}
})