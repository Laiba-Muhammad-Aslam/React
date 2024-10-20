import React from 'react'

export default function Card(props) {
  return (
    <div>
        <input type="text" onChange={(e) =>{props.setName(e.target.value)}}  />
        <p>Input value is, card title is {props.title} and its name is: {props.name}</p>
    </div>
  )
}
