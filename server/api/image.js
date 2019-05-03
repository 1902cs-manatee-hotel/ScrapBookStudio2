const router = require('express').Router()
const {Image} = require('../db/models')
module.exports = router

router.post('/', async (req, res, next) => {
    try {
        const image = await Image.create(req.body)
        res.status(200).json(image)
    } catch(err) {next(err)}
})

router.put('/:id/change-size', async (req, res, next) => {
    try {
        const image = await Image.findByPk(req.params.id)
        const updatedImage = await image.update(req.body)
        res.status(200).json(updatedImage)
    } catch(err) {next(err)}
})

router.put('/:id/change-coords', async (req, res, next) => {
    try {
        const image = await Image.findByPk(req.params.id)
        const updatedImage = await image.update(req.body)
        res.status(200).json(updatedImage)
    } catch(err) {next(err)}
})

router.put('/:id/change-tilt', async (req, res, next) => {
    try {
        const image = await Image.findByPk(req.params.id)
        const updatedImage = await image.update(req.body)
        res.status(200).json(updatedImage)
    } catch(err) {next(err)}
})

router.delete('/:id', async (req, res, next) => {
    try {
        const imageId = req.params.id
        await Image.destroy({where: {id: imageId}})
        res.status(200)
    } catch(err) {next(err)}
})
