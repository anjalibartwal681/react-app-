import React, { useState, useEffect } from 'react';

const LifecycleComponent2 = () => {
  const [count, setCount] = useState(0);

  // Equivalent to componentDidMount
  useEffect(() => {
    console.log('Component Did Mount');
    
    // Cleanup function: Equivalent to componentWillUnmount
    return () => {
      console.log('Component Will Unmount');
    };
  }, []);

  // Equivalent to componentDidUpdate
  useEffect(() => {
    console.log('Component Did Update');
  }, [count]);

  const handleClick = () => {
    setCount(prevCount => prevCount + 1);
  }

  console.log('Render');

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default LifecycleComponent2;
