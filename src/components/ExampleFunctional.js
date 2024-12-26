import React, { useState } from "react";

export default function ExampleFunctional() {
  const [count, setCount] = useState(0);
  //array (ten cua state, cai gif do de cap nhap)
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <pre>Function componets</pre>
      <p>You click {count} times</p>
      <button onClick={handleClick}>Click me </button>
    </div>
  );
}
