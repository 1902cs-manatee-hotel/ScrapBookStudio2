const router = require('express').Router()
const { Page, Media, CanvasText } = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
    try {
       const pageId = req.params.id
    const text = await CanvasText.findAll({where: {pageId}})
    const media = await Media.findAll({where: {pageId}})
            res.status(200).json({text, media})
    } catch (err) {
        next(err)
    }
})

router.post('/:id', async (req, res, next) => {
    try {
        const page = await Page.create({
          scrapbookId: req.params.id
        })
        res.status(200).send(page)
    } catch(err) {next(err)}
})

router.delete('/:id', async (req, res, next) => {
    try {
        const pageId = req.params.id
        await Page.destroy({where: {id: pageId}})
        res.status(200)
    } catch(err) {next(err)}
})
