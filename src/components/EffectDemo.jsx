import { useEffect } from "react";

function EffectDemo() {
  useEffect(() => {
    console.log("Component has rendered");
  }, []);
  return <p>check your console..</p>;
}

export default EffectDemo;
