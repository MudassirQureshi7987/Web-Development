import React from 'react'

const Navbar = (props) => {

    function changeTheme(){
        if(props.theme == 'Light')
        props.setTheme('Dark')
        else
            props.setTheme('Light')
    }
    
  return (
    <div>
        <button onClick={changeTheme}>Change Theme</button>
    </div>
  )
}

export default Navbar