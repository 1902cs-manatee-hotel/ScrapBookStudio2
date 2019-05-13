const router = require('express').Router()
const {Media} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
      console.log('**************REQ.PARMAS',  req.params)
    const { id } = req.params;
    const media = await Media.findByPk(id);
    res.status(200).json(media)
  } catch (error) { next(error) }
})

router.post('/', async (req, res, next) => {
    try {
      const arr = Object.keys(req.body)
      const media = await Media.create({path: arr[0]})
      res.status(200).json(media)
    } catch(err) {next(err)}
})

router.put('/:id', async (req, res, next) => {
    try {
        const media = await Media.findByPk(req.params.id)
        console.log('media api', media);
        const updatedMedia = await media.update(req.body)
        console.log('updatedMedia', updatedMedia);
        res.status(200).json(updatedMedia)
    } catch(err) {next(err)}
})

router.delete('/:id', async (req, res, next) => {
    try {
        const mediaId = req.params.id
        await Media.destroy({where: {id: mediaId}})
        res.status(200)
    } catch(err) {next(err)}
})
