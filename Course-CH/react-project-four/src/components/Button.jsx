import React from 'react'

export const Button = (props) => {
  return (
    <div>
        {props.children}
        <button onClick={props.counterIncrement}>
            {props.text}
        </button>
    </div>
  )
}
