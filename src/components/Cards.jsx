import React from 'react'
import "./Cards.css"

function Cards( props) {
  return (
    <div className='Cards'>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  )
}

export default Cards ;
