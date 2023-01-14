import React from "react";
import { Routes, Route } from "react-router-dom";
import Join from "./Components/Join";
import Chat from "./Components/Chat";

const App = () => {

  return(
    <Routes>
      <Route path="/" exact element={<Join/>} />
      <Route path="/chat" element={<Chat/>} />
   </Routes>
  );
}


export default App;
