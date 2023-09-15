import { useState } from "react";
import Button from "@/components/Button";

export default function DefaultCounter() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-green-900 p-2 rounded-md">
      <h2 className="text-xl text-white">Default counter</h2>
      <p className="text-white">Counter: {count}</p>
      <Button onClick={() => setCount(count + 1)}>increment</Button>
    </div>
  );
}
