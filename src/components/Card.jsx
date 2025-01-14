import React from "react";

const Card = ({ href, imgSrc, imgAlt, children }) => {
  return (
    <a
      href={href}
      className="block border rounded overflow-hidden shadow-lg hover:shadow-xl transition"
    >
      <img src={imgSrc} alt={imgAlt} className="w-full h-48 object-cover" />
      <div className="p-4">{children}</div>
    </a>
  );
};

export default Card;
