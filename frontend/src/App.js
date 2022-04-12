import React, { useState } from "react";
import "./App.css";
import Home from './components/Home';
import Explore from "./components/Explore";
import Create from "./components/Create";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [account, setAccount] = useState("");

	return (
		<BrowserRouter>
			<div className="App">
        <Navbar props={(account, setAccount)} />
				<Routes>
					<Route exact path="/" element={<Home />}>
					</Route>
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
			</div>
		</BrowserRouter>

	);
}

export default App;
