import React from "react";

function Button({ src, onClick, disabled, backgroundColor = "bg-pink-300" }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`p-1 border-2 border-white rounded-lg cursor-pointer ${backgroundColor}`}
    >
      <img src={src} className="w-3 min-w-3" />
    </button>
  );
}

export default Button;
