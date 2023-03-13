import React from "react";

function Main({ children }) {
  return (
    <div id="main">
      {children}
      <p>main</p>
    </div>
  );
}

export default Main;
