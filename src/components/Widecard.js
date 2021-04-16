import React from 'react'

const Widecard = (props) => {
  const dateText = props.from ? `${props.from} - ${props.to}` : props.to;

  return (
    <div className="widecard">
      <div className="compdet">
        <h3>{props.title}</h3>
        <h4 className="secondtext">{props.where}</h4>
        <h4 className="secondtext">{dateText}</h4>
        {props.children}
      </div>
    </div>
  )
}

export default Widecard