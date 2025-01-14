import React from "react";

const Button = ({ size = "md", color = "blue", disabled = false, title }) => {
  const baseClasses = "rounded px-4 py-2 font-semibold transition duration-200";
  const sizeClasses =
    size === "sm"
      ? "text-sm py-1"
      : size === "lg"
      ? "text-lg py-3"
      : "text-base py-2";

  const colorClasses =
    color === "red"
      ? "bg-red-500 text-white hover:bg-red-600"
      : color === "green"
      ? "bg-green-500 text-white hover:bg-green-600"
      : "bg-blue-500 text-white hover:bg-blue-600";

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed " : "";

  return (
    <button
      className={`${baseClasses} ${sizeClasses} ${colorClasses} ${disabledClasses}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
