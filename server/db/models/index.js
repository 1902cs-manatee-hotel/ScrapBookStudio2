const User = require('./user')
const Contributor = require('./contributor')
const Media = require('./media')
const Page = require('./pages')
const Scrapbook = require('./scrapbook')
const CanvasText = require('./canvastext')
/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */
User.hasMany(Scrapbook)
Scrapbook.belongsTo(User)

Scrapbook.hasMany(Contributor)
Contributor.belongsTo(Scrapbook)

Scrapbook.hasMany(Page)
Page.belongsTo(Scrapbook)

Page.hasMany(CanvasText)
CanvasText.belongsTo(Page)

Scrapbook.hasMany(Media)
Media.belongsTo(Scrapbook)

Page.hasMany(Media)
Media.belongsTo(Page)

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Scrapbook,
  CanvasText,
  Media,
  Page,
  Contributor
}
