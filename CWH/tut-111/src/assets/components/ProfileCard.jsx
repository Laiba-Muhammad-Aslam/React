import React from 'react'
import "./ProfileCard.css"

function ProfileCard(props) {
  return (
    <div className='border-2 border-slate-50 my-2 mx-2 flex-1 profile-card'>
      <div className="profile-info">
        <img src={props.image} alt={props.title} />
        <h3>Title: {props.title}</h3>
        {/* <p>Description: {props.description}</p> */}
        <p>Price: {props.price}</p>
      </div>
    </div>
  )
}

export default ProfileCard
