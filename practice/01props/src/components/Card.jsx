import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
        <img src={props.image} alt="" />
        <h3 id='card-title'>{props.title}</h3>
        <p id='card-desc'>{props.desc}</p>
        <button>Shop Now</button>
    </div>
  )
}

export default Card
