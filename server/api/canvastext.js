const router = require('express').Router()
const {CanvasText} = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const text = await CanvasText.findByPk(id);
    res.status(200).json(text)
  } catch (error) { next(error) }
})

router.post('/', async (req, res, next) => {
    try {
        const {pageId, content} = req.body
        const newCanvasText = await CanvasText.create({
            content,
            pageId
        })
        res.send(newCanvasText)
    } catch (error) {
        next(error)
    }
})

router.put('/increase/:id', async (req, res, next) => {
    try {
        // console.log('HELLO FROM ROUTES');
        // console.log('req from route', req.params);
        const canvasText = await CanvasText.findByPk(req.params.id)
        // console.log('ct from route', canvasText);
        const newSize = canvasText.size + 1
        // console.log('increase', newSize);
        const updatedCanvasText = await canvasText.update({size: newSize})
        // console.log('from route', updatedCanvasText);
        res.status(200).json(updatedCanvasText)
    } catch (error) {
        next(error)
    }
})

router.put('/decrease/:id', async (req, res, next) => {
    try {
        const canvasText = await CanvasText.findByPk(req.params.id)
        const newSize = canvasText.size - 1
        // console.log('decrease', newSize);
        const updatedCanvasText = await canvasText.update({size: newSize})
        res.status(200).json(updatedCanvasText)
    } catch (error) {
        next(error)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        const canvasText = await CanvasText.findByPk(req.params.id)
        const updatedCanvasText = await canvasText.update(req.body)
        res.status(200).json(updatedCanvasText)
    } catch (error) {
        next(error)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params
        await CanvasText.destroy({where: {id}})
        res.sendStatus(200)
    } catch (error) {
        next(error)
    }
})
