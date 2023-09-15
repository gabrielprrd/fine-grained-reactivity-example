import { useState } from "react";
import UnrelatedElement from "@/components/UnrelatedElement";
import Button from "@/components/Button";

export default function CounterPassingProp() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-green-900 p-2 rounded-md">
      <h2 className="text-xl text-white">Outer Counter passing prop</h2>
      <p className="text-white">Counter: {count}</p>
      <Button onClick={() => setCount(count + 1)}>increment</Button>

      <InnerCounter count={count} />
      <UnrelatedElement />
    </div>
  );
}

type Props = {
  count: number;
};

export function InnerCounter({ count }: Props) {
  return (
    <div className="bg-green-600 p-2 rounded-md my-2">
      <h2 className="text-xl text-white">Inner counter receiving prop</h2>
      <p className="text-white">Counter: {count}</p>
    </div>
  );
}
