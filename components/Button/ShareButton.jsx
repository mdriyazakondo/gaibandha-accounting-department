import React from "react";

const ShareButton = ({ text }) => {
  return (
    <button
      className="cursor-pointer px-8 py-2.5 rounded-full text-white font-bold text-sm shadow-md transition-all duration-300 hover:shadow-xl active:scale-95"
      style={{
        background:
          "linear-gradient(45deg, var(--color-primary), var(--color-accent))",
      }}
    >
      {text}
    </button>
  );
};

export default ShareButton;
