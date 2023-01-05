import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter: {count}</h1>
      <div>
        <button>INC</button>
        <button>DEC</button>
      </div>
    </div>
  );
};

export default Counter;
