const router = require('express').Router()
const {CanvasText} = require('../db/models')
module.exports = router

// router.get('/', async (req, res, next) => {
//     try {
//         const canvasTexts = await CanvasTexts.findAll();
//         res.json(canvasTexts);
//     } catch (error) {
//         next(error);
//     }
// })

// router.get('/:id', async (req, res, next) => {
//     try {
//         const id = req.params.id;
//         const canvasText = await CanvasTexts.findByPk(id);
//         res.json(canvasText);
//     } catch (error) {
//         next(error)
//     }
// })

router.post('/', async (req, res, next) => {
    try {
        const newCanvasText = await CanvasText.create({
            content: req.params.content,
            x_corrd: 200,
            y_corrd: 200
        })
        res.send(newCanvasText);
    } catch (error) {
        next(error);
    }
})

router.put('/:id/change-font', async (req, res, next) => {
    try {
        const {id, content} = req.params;
        const canvasText = await CanvasText.findByPk(id);
        const updatedCanvasText = await canvasText.update({ content });
        res.json(updatedCanvasText);
    } catch (error) {
        next(error);
    }
})

router.put('/:id/change-size', async (req, res, next) => {
    try {
        const {id, size} = req.params;
        const canvasText = await CanvasText.findByPk(id);
        const updatedCanvasText = await canvasText.update({ size });
        res.json(updatedCanvasText);
    } catch (error) {
        next(error);
    }
})

router.put('/:id/change-color', async (req, res, next) => {
    try {
        const {id, color} = req.params;
        const canvasText = await CanvasText.findByPk(id);
        const updatedCanvasText = await canvasText.update({ color });
        res.json(updatedCanvasText);
    } catch (error) {
        next(error);
    }
})

router.put('/:id/change-coords', async (req, res, next) => {
    try {
        const {id, x_corrd, y_corrd} = req.params;
        const canvasText = await CanvasText.findByPk(id);
        const updatedCanvasText = await canvasText.update({ x_corrd, y_corrd });
        res.json(updatedCanvasText);
    } catch (error) {
        next(error);
    }
})

router.put('/:id/change-tilt', async (req, res, next) => {
    try {
        const {id, tilt} = req.params;
        const canvasText = await CanvasText.findByPk(id);
        const updatedCanvasText = await canvasText.update({ tilt });
        res.json(updatedCanvasText);
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        const {id} = req.params;
        const canvasText = await CanvasText.findByPk(id);
        await canvasText.destroy();
    } catch (error) {
        next(error);
    }
})
