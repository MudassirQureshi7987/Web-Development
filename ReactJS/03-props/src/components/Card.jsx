import React from 'react'

const Card = (props) => {
//   console.log(props.age, props.user);
  return (
    <div>
    <div className="card">
        <img src={props.img} alt="Profile" />
        <h1>{props.user},{props.age}</h1>
        <p>Software Engineer of the Century</p>
        <button>Follow</button>
    </div>
    </div>
  )
}

export default Card
