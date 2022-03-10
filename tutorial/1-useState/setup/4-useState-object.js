import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Anugrah",
    age: 24,
    message: "Random message"
  });

  // Another way is to create separate useState for each value:
  // const [name, setName] = useState('Grey');
  // const [age, setAge] = useState(25);
  // const [message, setMessage] = useState('Greetings human');

  const changeMessage = () => {
    setPerson({ ...person, message: 'hello world' });   // Use spread operator to parse over rest of the values
    // setMessage('hello world');
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>
        change message
      </button>
    </>
  )
};

export default UseStateObject;
