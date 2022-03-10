import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter: it is an array of dependency. If the array is blank then useEffect only runs on inital render. If there is a dependency, then it will run in initial rendere, as well as when there is a change in value of dependency
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `New Messages(${value})`;
    }
    else if (value === 0) {
      document.title = `React App`;
    }
  }, [value]);

  useEffect(() => {
    console.log("Hello world");     // Will only run in the initial render
  }, [])

  return (
    <>
      <h1>{value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
      <button className='btn' onClick={() => setValue(0)}>
        Reset
      </button>
    </>
  );
};

export default UseEffectBasics;
