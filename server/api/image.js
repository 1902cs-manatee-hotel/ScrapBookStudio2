const router = require('express').Router()
const {Image} = require('../db/models')
module.exports = router

router.get('/', async(req, res, next) => {
    try {
        const images = await Image.findAll()
        res.status(200).json(images)
    } catch(err) {next(err)}
})

router.get('/:id', async(req, res, next) => {
    try {
        const imageId = req.params.id
        const image = await Image.findByPk(imageId)
        res.status(200).json(image)
    } catch(err) {next(err)}
})

router.post('/', async (req, res, next) => {
    try {
        const image = await Image.create(req.body)
        res.status(200).json(image)
    } catch(err) {next(err)}
})

router.put('/:id', async (req, res, next) => {
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
