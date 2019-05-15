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
  // console.log('HELLOO!!!!!!!!!')
  try {
    console.log('mediaAPI', req.body)
      // const arr = Object.keys(req.body)
      // const media = await Media.create(req.body)
      const media = await Media.create({path: req.body.path, scrapbookId: req.body.scrapbookId, pageId: req.body.pageId})
      console.log('mediaAPI - media', media)

      res.status(200).json(media)
    } catch(err) {next(err)}
})

router.post('/cloudinary', async (req, res, next) => {
    // console.log('HELLOO!!!!!!!!!')
    try {
      console.log('mediaAPICloud', req.body)
        
        // const media = await Media.create(req.body)
        const media = await Media.create({path: req.body.path, scrapbookId: req.body.scrapbookId, pageId: req.body.pageId})
        console.log('mediaAPI - media', media)
  
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
