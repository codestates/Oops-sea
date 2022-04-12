import React, { useState } from "react";
import "./App.css";
import Home from './pages/Home';
import Explore from "./Components/Explore";
import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [account, setAccount] = useState("");

	return (
		<BrowserRouter>
			<div className="App">
        <Navbar props={(account, setAccount)} />
				<Navbar />
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
