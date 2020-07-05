import React, { useState } from 'react';

function Counter(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return  (
    <div>
      <button onClick={() => setCount(count - 1)}>-</button>
        {count}
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
}

export default Counter;