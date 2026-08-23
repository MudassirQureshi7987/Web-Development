import React, { useState, useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(() => {
    console.log('useEffect is running...')
  }, [num])

  return (
    <div>

      <h1>num: {num}</h1>
      <h1>num2: {num2}</h1>

      <button
        onMouseEnter={() => {
          setNum(prev => prev + 1)
        }}
        onMouseLeave={() => {
          setNum2(prev => prev + 10)
        }}
      >
        Hover
      </button>

    </div>
  )
}

export default App


// import React, { useState, useEffect } from 'react'

// const App = () => {

//   const [a, setA] = useState(0)
//   const [b, setB] = useState(10)

//   function aChanging() {
//     console.log('A ki value change ho gayi')
//   }

//   function bChanging() {
//     console.log('B ki value change ho gayi')
//   }

//   useEffect(() => {
//     aChanging()
//   }, [a])

//   useEffect(() => {
//     bChanging()
//   }, [b])

//   return (
//     <div>

//       <h1>A is {a}</h1>
//       <h1>B is {b}</h1>

//       <button
//         onClick={() => {
//           setA(prev => prev + 1)
//         }}
//       >
//         Change A
//       </button>

//       <button
//         onClick={() => {
//           setB(prev => prev - 1)
//         }}
//       >
//         Change B
//       </button>

//     </div>
//   )
// }

// export default App