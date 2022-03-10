import React, { useState } from 'react';

// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditionally

const UseStateBasics = () => {
  const [text, setText] = useState('random title');
  const handleClick = () => {
    if(text === 'random title') {
      setText('hello world');
    }
    else {
      setText('random text');
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
