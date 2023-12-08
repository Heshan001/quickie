import React from 'react'
import getUrl from '../utils/url'

function NewsCard({title,image="",content}) {
  return (
     <div className="newsItem">
              <h2>{title}</h2>
      {
        image?(<img src={getUrl(image)} alt="" />):null
              }
              <p>{content}</p>
            </div>
  )
}

export default NewsCard