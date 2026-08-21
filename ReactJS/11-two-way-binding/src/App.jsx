import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form Submitted by', title);

  }

  return (
    <div>

      <form onSubmit={submitHandler}>

        <input
          type="text"
          placeholder="Enter your name"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value)
          }}
        />

        <button type="submit">Submit</button>

      </form>

    </div>
  )
}

export default App