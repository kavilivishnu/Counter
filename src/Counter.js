import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  let sum = 1;
  let diff = 1;

  const handleAdd = () => {
    sum = sum * 3;
    setCount(count + sum);
  };

  const handleSubtract = () => {
    diff = count - 3;
    setCount(diff);
    if (count === 0) {
      setCount(0);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      <button
        style={{
          marginRight: "30px",
          height: "30px",
          width: "30px",
          marginTop: "5%",
        }}
        onClick={(e) => handleSubtract(e)}
      >
        -
      </button>
      <h1 style={{ marginRight: "30px", marginTop: "4.5%" }}>{count}</h1>
      <button
        style={{
          height: "30px",
          width: "30px",
          marginTop: "5%",
        }}
        onClick={(e) => handleAdd(e)}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
