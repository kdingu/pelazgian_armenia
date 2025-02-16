import React from "react";

type Props = {
  type?: string;
  name: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

function Input({
  type = "text",
  name,
  placeholder = "",
  value,
  defaultValue,
  onChange,
  className = "",
}: Props) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      className={`text-xl w-full p-2 border-2 rounded-md transition-all text-gray-700 border-gray-300 focus:border-pastel-blue focus:ring-0 focus:ring-pastel-blue outline-none ${className}`}
      required
    />
  );
}

export default Input;
