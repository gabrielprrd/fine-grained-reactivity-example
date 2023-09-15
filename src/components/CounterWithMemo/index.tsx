import { memo, useCallback, useState } from "react";
import UnrelatedElement from "@/components/UnrelatedElement";
import Button from "@/components/Button";

export default function CounterWithMemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div className="bg-green-900 p-2 rounded-md">
      <h2 className="text-xl text-white">Memo counter</h2>
      <p className="text-white">Counter: {count}</p>
      <Button onClick={increment}>increment</Button>
      <InnerCounter count={count} />
      <MemoUnrelatedElement />
    </div>
  );
}

type Props = {
  count: number;
};

function InnerCounter({ count }: Props) {
  return (
    <div className="bg-green-600 p-2 rounded-md my-2">
      <h2 className="text-xl text-white">Inner counter receiving prop</h2>
      <p className="text-white">Counter: {count}</p>
    </div>
  );
}

const MemoUnrelatedElement = memo(UnrelatedElement);
