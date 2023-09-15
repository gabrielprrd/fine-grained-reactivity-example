import { useRef } from "react";
import Button from "@/components/Button";

export default function CounterWithRef() {
  const count = useRef(0);

  return (
    <div className="bg-green-900 p-2 rounded-md">
      <h2 className="text-xl text-white">Counter using ref</h2>
      <p className="text-white">Counter: {count.current}</p>
      <Button onClick={() => count.current++}>increment</Button>
    </div>
  );
}
