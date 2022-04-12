import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const [account, setAccount] = useState("");

  return (
    <BrowserRouter>
      <Navbar props={(account, setAccount)} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Home props={(account, setAccount)} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/explore"
          element={<Explore props={(account, setAccount)} />}
        />
      </Routes>
      <Routes>
        <Route
          path="/create"
          element={<Create props={(account, setAccount)} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
