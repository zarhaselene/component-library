import React from "react";

const Badge = ({ size = "md", color = "blue", icon, title }) => {
  const sizeClasses =
    size === "sm"
      ? "text-xs px-2 py-1"
      : size === "lg"
      ? "text-lg px-4 py-2"
      : "text-sm px-3 py-1.5";

  const colorClasses =
    color === "red"
      ? "bg-red-100 text-red-800"
      : color === "green"
      ? "bg-green-100 text-green-800"
      : "bg-blue-100 text-blue-800";
  return (
    <span
      className={`inline-flex items-center rounded ${sizeClasses} ${colorClasses}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {title}
    </span>
  );
};

export default Badge;
