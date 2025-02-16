import React from "react";

type Props = {
  name: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  rows?: number;
};

function Textarea({
  name,
  placeholder = "",
  value,
  defaultValue,
  onChange,
  className = "",
  rows = 4,
}: Props) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      rows={rows}
      className={`text-xl w-full p-2 border-2 rounded-md transition-all text-gray-700 border-gray-300 focus:border-pastel-blue focus:ring-0 focus:ring-pastel-blue outline-none ${className}`}
      required
    />
  );
}

export default Textarea;
