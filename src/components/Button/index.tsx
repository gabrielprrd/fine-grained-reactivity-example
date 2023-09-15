import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
  return (
    <button
      {...props}
      className="border-1 rounded-md bg-blue-800 text-white p-2 uppercase"
    >
      {children ?? "Increment"}
    </button>
  );
}
