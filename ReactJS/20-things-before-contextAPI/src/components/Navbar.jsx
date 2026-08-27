import React from 'react'
import Nav2 from './Nav2'

const Navbar = (props) => {

  console.log()

  return (
    <div className='nav'>
      <h2>Sheryians</h2>

      {props.children[0]}
      {props.children[1]}

      <Nav2 theme={props.theme} />
    </div>
  )
}

export default Navbar