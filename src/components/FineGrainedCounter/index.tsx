import { ObservablePrimitiveBaseFns } from "@legendapp/state";
import { useObservable, Memo } from "@legendapp/state/react";
import UnrelatedElement from "@/components/UnrelatedElement";
import Button from "@/components/Button";

export default function FineGrainedCounter() {
  const count$ = useObservable(0);

  return (
    <div className="bg-green-900 p-2 rounded-md">
      <h2 className="text-xl text-white">Legend Counter</h2>
      <p className="text-white">
        Counter: <Memo>{count$}</Memo>
      </p>
      <Button onClick={() => count$.set((prev) => prev + 1)}>increment</Button>

      <InnerCounter count$={count$} />
      <UnrelatedElement />
    </div>
  );
}

type Props = {
  count$: ObservablePrimitiveBaseFns<number>;
};

export function InnerCounter({ count$ }: Props) {
  return (
    <div className="bg-green-600 p-2 rounded-md my-2">
      <h2 className="text-xl text-white">Inner counter receiving prop</h2>
      <p className="text-white">
        Counter: <Memo>{count$}</Memo>
      </p>
    </div>
  );
}
