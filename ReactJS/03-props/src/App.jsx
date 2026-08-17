import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className = "parent">
      <Card user = "Aman" age = {25} img = "https://randomuser.me/api/portraits/men/1.jpg"/>
      <Card user = 'Maddy' age = {21} img = "https://randomuser.me/api/portraits/women/1.jpg"/>
      
    </div>
  )
}

export default App
