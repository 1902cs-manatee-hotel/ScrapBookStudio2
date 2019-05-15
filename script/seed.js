'use strict'

const db = require('../server/db')
const {
  User,
  Scrapbook,
  CanvasText,
  Media,
  Page,
  Contributor
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all([
    User.create({ firstName: 'Cody', lastName: 'Jones', email: 'cody@email.com', password: '123' }),
    User.create({ firstName: 'Murphy', lastName: 'Smith', email: 'murphy@email.com', password: '321' }),
    Scrapbook.create({name: 'EuroTrip', description: 'Good times!', image: 'https://i.ytimg.com/vi/VyaTwRK4qsU/maxresdefault.jpg',  password: '123'}),
    Scrapbook.create({name: 'Birthday', description: 'My Bday Party', image:'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_10x10_$&$product=PartyCity/749363', password: '123'}),
    Scrapbook.create({name: 'Bootcamp', description: 'Good times, right ?', image:'https://www.builtinnyc.com/sites/www.builtinnyc.com/files/fullstack_oct_21_2015-48.jpg', password: '123'}),
    Scrapbook.create({name: 'Testing!', description: 'Good times, right ?', image:'https://www.builtinnyc.com/sites/www.builtinnyc.com/files/fullstack_oct_21_2015-48.jpg', password: '123'}),
    Page.create({scrapbookId: 1}),
    Page.create({scrapbookId: 1}),
    Page.create({scrapbookId: 1}),
    Page.create({scrapbookId: 2}),
    Page.create({scrapbookId: 2}),
    Page.create({scrapbookId: 2}),
    Page.create({scrapbookId: 4}),
    Contributor.create({ firstName: 'Tod', lastName: 'Brown', email: 'email1@email.com', scrapbookId: 1}),
    Contributor.create({ firstName: 'Samantha', lastName: 'Grey', email: 'email@email2.com', scrapbookId: 2}),
    Media.create({ path: 'https://lumiere-a.akamaihd.net/v1/images/luke-skywalker-main_5a38c454_461eebf5.jpeg', xCoord: 65, yCoord: 65, rotation: 0, width: 0.1, height: 0.1, filter: 2, pageId: 1, scrapbookId: 1 }),
    Media.create({ path: 'https://cdn1.thr.com/sites/default/files/imagecache/1500x845/2017/11/larry2_-_h_2017.jpg', xCoord: 70, yCoord: 70, rotation: 0, width: 0.1, height: 0.1, filter: 2, pageId: 1, scrapbookId: 1 }),
    Media.create({ path: 'http://clipart-library.com/image_gallery/401245.png', xCoord: 75, yCoord: 65, rotation: 0, width: 0.1, height: 0.1, filter: 2, pageId: 2, scrapbookId: 1 }),
    Media.create({ path: 'https://pngheart.com/wp-content/uploads/2019/01/kids-cartoon-boy.png', xCoord: 75, yCoord: 60, rotation: 0, width: 0.1, height: 0.1, filter: 2, pageId: 2, scrapbookId: 1 }),
    // Media.create({ path: 'https://www.youtube.com/watch?v=tHbCkikFfDE', xCoord: 65, yCoord: 65, rotation: 0, width: 0, height: 0, filter: 2, pageId: 1, scrapbookId: 1 }),
    // Media.create({ path: 'https://www.youtube.com/watch?v=tHbCkikFfDEnpm', xCoord: 65, yCoord: 65, rotation: 0, width: 0, height: 0, filter: 2, pageId: 1, scrapbookId: 1 }),
    Media.create({ path: 'https://pngheart.com/wp-content/uploads/2019/01/kids-cartoon-girl.png', xCoord: 65, yCoord: 65, rotation: 0, width: 1, height: 1, filter: 2, pageId: 7, scrapbookId: 1 }),
    CanvasText.create({ content: 'Great Time!', xCoord: 50, yCoord: 50, rotation: 0, color: 'blue', size: 50, pageId: 1 }),
    CanvasText.create({ content: 'LOL', xCoord: 50, yCoord: 50, rotation: 0, width:.1, height: .1, color: 'red', size: 50, pageId: 1 }),
    CanvasText.create({ content: 'LOL', xCoord: 60, yCoord: 50, rotation: 0, width:.1, height: .1, color: 'red', size: 50, pageId: 2 }),
    CanvasText.create({ content: 'LOL', xCoord: 60, yCoord: 50, rotation: 0, width:.1, height: .1, color: 'red', size: 50, pageId: 4 })
])

// console.log(`seeded ${users.length} users`)
console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
