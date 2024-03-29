import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', checkSize)
    return () => {                                        // cleanup the even-listener on exiting the render, otherwise it can cause memory leak
      window.removeEventListener('resize', checkSize)
    }
  })
  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

export default UseEffectCleanup;
