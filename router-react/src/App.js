import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import All from "./State/All";
import Add from "./State/Add";
import { useState } from "react";
import Edit from "./State/Edit";
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
        <Routes>
          <Route path="/all" element={<All info={{ data, setdata }} />} />
          <Route path="/add" element={<Add info={{ data, setdata }} />} />
          <Route path="/edit/:id" element={<Edit info={{ data, setdata }} />} />

          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
