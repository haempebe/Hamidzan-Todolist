import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { TodoWrapper } from './Components/TodoWrapper';

function App() {
  return (
    <div>
      <Navbar />
      <TodoWrapper />
    </div>
  );
}

export default App;
