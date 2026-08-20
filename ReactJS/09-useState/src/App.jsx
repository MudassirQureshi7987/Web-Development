// import React from 'react'
// import {useState} from 'react'

// const App = () => {
  
//   const [count, setcount] = useState(0);

//   function counter() {
//     setcount(count+1);
//   }

//   return (
//     <div>
//       <h1>{count}</h1>
//       <button onClick = {counter}>Counter</button>
//     </div>
//   )
// }

// export default App

// 📌 Code 1 (Counter)

// import React, { useState } from 'react'

// const App = () => {

//   const [num, setNum] = useState(0)

//   function increaseNum() {
//     setNum(num + 1)
//   }

//   function decreaseNum() {
//     setNum(num - 1)
//   }

//   function jump5Num() {
//     setNum(num + 5)
//   }

//   return (
//     <div>
//       <h1>{num}</h1>

//       <button onClick={increaseNum}>
//         increase
//       </button>

//       <button onClick={decreaseNum}>
//         decrease
//       </button>

//       <button onClick={jump5Num}>
//         Increase by 5
//       </button>
//     </div>
//   )
// }

// export default App

// 📌 Code 2 (Multiple States)

import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [username, setUsername] = useState("Mudassir")
  const [users, setUsers] = useState([10, 20, 30])

  function changeNum() {
    setNum(20)
    setUsername("Aman")
    setUsers([30, 40, 50])
  }

  return (
    <div>
      <h1>
        Value of num is {num}
        <br />
        {users}
        <br />
        value of username is {username}
      </h1>

      <button onClick={changeNum}>
        Click
      </button>
    </div>
  )
}

export default App

