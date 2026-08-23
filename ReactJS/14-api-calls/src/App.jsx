import axios from 'axios'

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/3')
  const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/5')

  // console.log(response)  // will show Promise {<pending>}
  
  const data = await response.json();  // .json() is also asynchronous so that's why await
  const data1 = await response1.json();
  
  console.log(data);
  console.log(data1);
}
const App = () => {
  return (
    <div>
      <button onClick = {getData}>Get Data</button>
    </div>
  )
}

export default App
