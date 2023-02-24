import type { ChangeEvent } from "react";

interface MyInputProps {
  label: string;
  value: string;

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function MyInput({ label, value, onChange }: MyInputProps) {
  return (
    <div className="shadow bg-gray-100 p-2 rounded-md">
      {/* <label htmlFor="my-input" className="block text-gray-700 font-bold mb-1">
        {label}
      </label> */}

      <input
        id="my-input"
        value={value}
        onChange={onChange}
        className="border border-gray-400 rounded-md p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        placeholder="Enter a number"
      />
    </div>
  );
}
