import React from 'react';

const App = () => {
  const user = {
    name: 'Mudassir',
    age: 22,
    city: 'Amravati'
  };

  // Store object
  localStorage.setItem('usera', JSON.stringify(user));

  // Get string using the key
  const userb = localStorage.getItem('usera');

  // Convert string back to object
  console.log(JSON.parse(userb));

  return (
    <div>
      App Dev
    </div>
  );
};

export default App;

//range(end,2)