const User = require('./user')
const Contributor = require('./contributor')
const Image = require('./image')
const Page = require('./pages')
const ScrapBook = require('./scrapbook')
const CanvasText = require('./canvastext')
const Video = require('./video')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
User.hasMany(ScrapBook)
ScrapBook.belongsTo(User)

ScrapBook.hasMany(Contributor)
Contributor.belongsTo(ScrapBook)

ScrapBook.hasMany(Page)
Page.belongsTo(ScrapBook)

Page.hasMany(CanvasText)
CanvasText.belongsTo(Page)

Page.hasMany(Image)
Image.belongsTo(Page)

Page.hasMany(Video)
Video.belongsTo(Page)
/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  ScrapBook,
  CanvasText,
  Image,
  Page,
  Video,
  Contributor
}
