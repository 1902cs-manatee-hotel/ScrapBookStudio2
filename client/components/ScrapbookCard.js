import React from 'react'

const ScrapbookCard = ({book}) => {
  const {name, image, description} = book
  // console.log('SCRAPBOOK CARD', book)
  return (
    <div className="has-text-centered">
      <div className='space space-button'>
        <h1 className="subtitle is-2">{name}</h1>
      </div>
      <div className='space space-button'>
        <img width="120px" height="120px" src={image} />
      </div>
      <div className='space space-button'>
        <h3 className="subtitle is-4">{description}</h3>
      </div>
    </div>
  )
}

export default ScrapbookCard
