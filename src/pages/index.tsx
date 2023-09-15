import React from "react";
import CounterPassingProp from "@/components/CounterPassingProp";
import CounterWithMemo from "@/components/CounterWithMemo";
import CounterWithRef from "@/components/CounterWithRef";
import DefaultCounter from "@/components/DefaultCounter";
import FineGrainedCounter from "@/components/FineGrainedCounter";
import DefaultFullName from "@/components/DefaultFullName";
import FineGrainedFullName from "@/components/FineGraindedFullName";

export default function App() {
  return (
    <main className="p-5 bg-black min-h-[100vh] flex flex-wrap gap-5 items-start">
      <DefaultCounter />

      <CounterPassingProp />

      <CounterWithRef />

      <CounterWithMemo />

      <FineGrainedCounter />

      <DefaultFullName />

      <FineGrainedFullName />
    </main>
  );
}
