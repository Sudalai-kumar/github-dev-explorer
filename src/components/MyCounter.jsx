import { useEffect, useState } from "react";

function MyCounter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(count);
  }, []);
  return (
    <>
      <h2>Count:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increace</button>
      <button onClick={() => setCount(count - 1)}>Decreace</button>
    </>
  );
}

export default MyCounter;
