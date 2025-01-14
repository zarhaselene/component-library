import React from "react";

const Alert = ({ color = "blue", icon, title }) => {
  const colorClasses =
    color === "red"
      ? "bg-red-100 text-red-900"
      : color === "green"
      ? "bg-green-100 text-green-900"
      : "bg-blue-100 text-blue-900";

  return (
    <div className={`flex items-center p-4 rounded ${colorClasses}`}>
      {icon && <div className="mr-2">{icon}</div>}
      <div>{title}</div>
    </div>
  );
};

export default Alert;
