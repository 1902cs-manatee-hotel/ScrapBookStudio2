'use strict'

const db = require('../server/db')
const {
  User,
  Scrapbook,
  CanvasText,
  Image,
  Page,
  Video,
  Contributor
} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  await Promise.all([
    User.create({ firstName: 'Cody', lastName: 'Jones', email: 'cody@email.com', password: '123' }),
    User.create({ firstName: 'Murphy', lastName: 'Smith', email: 'murphy@email.com', password: '321' }),
    Scrapbook.create({name: 'EuroTrip', description: 'Good times!', image: 'https://i.ytimg.com/vi/VyaTwRK4qsU/maxresdefault.jpg',  password: '123'}),
    Scrapbook.create({name: 'Birthday', description: 'My Bday Party', image:'https://partycity6.scene7.com/is/image/PartyCity/_pdp_sq_?$_1000x1000_$&$product=PartyCity/749363', password: '123'}),
    Scrapbook.create({name: 'Bootcamp', description: 'Good times, right ?', image:'https://www.builtinnyc.com/sites/www.builtinnyc.com/files/fullstack_oct_21_2015-48.jpg', password: '123'}),
    Page.create({scrapbookId: 1}),
    Page.create({scrapbookId: 1}),
    Page.create({scrapbookId: 1}),
    Page.create({scrapbookId: 2}),
    Page.create({scrapbookId: 2}),
    Page.create({scrapbookId: 2}),
    Contributor.create({ firstName: 'Tod', lastName: 'Brown', email: 'email1@email.com', scrapbookId: 1}),
    Contributor.create({ firstName: 'Samantha', lastName: 'Grey', email: 'email@email2.com', scrapbookId: 2}),
    Image.create({ path: 'https://cdn.vox-cdn.com/thumbor/sGSzFCg3HO3kSxn0Pw-4StZ4XhE=/0x0:750x939/1820x1213/filters:focal(234x192:354x312):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62648422/Dt2jm_aVAAAiTrz.0.jpg', x_coord: 65, y_coord: 65, tilt: 0, size: 20, filter: 2, pageId: 1 }),
    Image.create({ path: 'https://cdn1.thr.com/sites/default/files/imagecache/1500x845/2017/11/larry2_-_h_2017.jpg', x_coord: 70, y_coord: 70, tilt: 0, size: 20, filter: 2, pageId: 1 }),
    Image.create({ path: 'https://cdn1.thr.com/sites/default/files/imagecache/1500x845/2017/11/larry2_-_h_2017.jpg', x_coord: 75, y_coord: 65, tilt: 0, size: 20, filter: 2, pageId: 2 }),
    Image.create({ path: 'https://cdn.vox-cdn.com/thumbor/sGSzFCg3HO3kSxn0Pw-4StZ4XhE=/0x0:750x939/1820x1213/filters:focal(234x192:354x312):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/62648422/Dt2jm_aVAAAiTrz.0.jpg', x_coord: 75, y_coord: 60, tilt: 0, size: 20, filter: 2, pageId: 2 }),
    Video.create({ path: 'https://www.youtube.com/watch?v=tHbCkikFfDE', x_coord: 65, y_coord: 65, tilt: 0, size: 20, filter: 2, pageId: 1 }),
    Video.create({ path: 'https://www.youtube.com/watch?v=tHbCkikFfDEnpm', x_coord: 65, y_coord: 65, tilt: 0, size: 20, filter: 2, pageId: 1 }),
    CanvasText.create({ content: 'Great Time!', x_coord: 50, y_coord: 50, tilt: 0, color: 'blue', size: 10, pageId: 1 }),
    CanvasText.create({ content: 'LOL', x_coord: 50, y_coord: 50, tilt: 0, color: 'red', size: 20, pageId: 1 }),
    CanvasText.create({ content: 'LOL', x_coord: 60, y_coord: 50, tilt: 0, color: 'red', size: 20, pageId: 2 })
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
