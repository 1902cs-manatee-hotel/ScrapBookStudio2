const router = require('express').Router()
const {Video} = require('../db/models')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const videos = await Video.findAll();
    res.status(200).json(videos)
  } catch (error) { next(error) }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const video = await Video.findByPk(id);
    res.status(200).json(video)
  } catch (error) { next(error) }
})

router.post('/', async (req, res, next) => {
    try {
        const video = await Video.create(req.body)
        res.status(200).json(video)
    } catch(err) {next(err)}
})

router.put('/:id', async (req, res, next) => {
    try {
        const video = await Video.findByPk(req.params.id)
        const updatedVideo = await video.update(req.body)
        res.status(200).json(updatedVideo)
    } catch(err) {next(err)}
})

router.delete('/:id', async (req, res, next) => {
    try {
        const videoId = req.params.id
        await Video.destroy({where: {id: videoId}})
        res.status(200)
    } catch(err) {next(err)}
})
