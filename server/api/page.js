const router = require('express').Router()
const { Page, Media, CanvasText } = require('../db/models')
module.exports = router

router.get('/:id', async (req, res, next) => {
    try {
       const pageId = req.params.id
       const page = await Page.findByPk(pageId, {
           include: [{model: Media, where: {pageId}},
                    {model: CanvasText, where: {pageId}}
        ]
       })
       console.log(page)
    //    const page = await Page.findOne({where: {pageId}}, {
    //     include: [{model: Media, where: {pageId}},
    //              {model: CanvasText, where: {pageId}}
    //  ]
    // })
            res.status(200).json(page)
    } catch (err) {
        next(err)
    }
})

router.get('/newpage/:scrapbookid/:pageid', async (req, res, next) => {
  try {
      const { scrapbookid, pageid} = req.params
      res.redirect(`/canvas/${scrapbookid}/${pageid}`)
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
