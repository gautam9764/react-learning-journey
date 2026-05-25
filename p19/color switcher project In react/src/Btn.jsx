import React from "react";

const Btn = ({ fun, color, children }) => {
  function func() {
    fun(color);
  }

  return (
    <div>
      <button
        style={{
          backgroundColor: color,

        color : color === "Yellow" ? "black" : "white"
        }}
        onClick={func}
        className="pt-1 pl-2 pb-1 pr-2 rounded-2xl text-2xl border-2 text-white"
      >
        {children}
      </button>
    </div>
  );
};

export default Btn;
