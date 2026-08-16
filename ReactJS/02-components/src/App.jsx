import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <div className = 'card'>
        <h1>Mohammad Mudassir</h1>
        <p>Hello My name is you know Mohammad Mudassir</p>
      </div>
      {Card()}
      <Card />
      <Navbar />
    </div>
  )
}

export default App
