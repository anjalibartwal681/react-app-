import React, { useState, useCallback } from 'react';

function MyComponent() {
  const [count, setCount] = useState(5);

  // Define a function that increments the count
  const increment = () => {
    setCount(count + 1);
  };

  // Memoize the increment function using useCallback
  const memoizedIncrement = useCallback(() => {
    setCount(count + 1);
  }, [count]); // Dependency: count

  console.log('Component re-rendered');

  return (
    <div>
      <p>Count: {count}</p>
      {/* 
        Use the memoizedIncrement function in event handlers or callbacks
        to ensure that it remains the same reference between renders
      */}
      <button onClick={memoizedIncrement}>Increment Count (Memoized)</button>
    </div>
  );
}

export default MyComponent;
