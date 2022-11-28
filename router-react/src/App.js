import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import All from "./State/All";
import Add from "./State/Add";
import React, { useState, useContext } from "react";
import Edit from "./State/Edit";
export const context = React.createContext();
function App() {
  const [data, setdata] = useState([
    {
      email: "jo@gamil.com",
      name: "jothi",
      age: "20",
    },
    // {
    //   email: "jo@gamil.com",
    //   name: "jothi",
    //   age: "20",
    // },
  ]);
  return (
    <>
      <BrowserRouter>
        <ul>
          <Link to="/all">
            {" "}
            <li>all</li>
          </Link>
          <Link to="/add">
            {" "}
            <li>add</li>
          </Link>
        </ul>
        <context.Provider value={{ data, setdata }}>
          <Routes>
            <Route path="/all" element={<All />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </context.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
