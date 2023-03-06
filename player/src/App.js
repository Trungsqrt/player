import React from "react";
import Homepage from "./pages/homepage/Homepage";

function App() {
   window.onbeforeunload = function () {
      localStorage.clear();
   };
   return (
      <div
         style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
         }}
      >
         <Homepage />
      </div>
   );
}

export default App;
