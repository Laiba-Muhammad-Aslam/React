import React from 'react'
import hamburger from '../assets/hamburger.jpg'
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <p id='user-name'>{props.name}</p>
      <img src={props.image} alt={props.name} id='user-img' /><img />
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
