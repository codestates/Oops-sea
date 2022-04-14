import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import Explore from "./Components/Explore";
import Create from "./Components/Create";
import Account from "./Components/Account";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
	const [account, setAccount] = useState("");

	return (
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route
					exact
					path="/"
					element={<Home/>}
				/>
			</Routes>
			<Routes>
				<Route
					path="/explore"
					element={<Explore/>}
				/>
			</Routes>
			<Routes>
				<Route
					path="/create"
					element={<Create />}
				/>
			</Routes>
			<Routes>
				<Route
					path="/account"
					element={<Account/>}
				/>
			</Routes>
		</BrowserRouter>
	);
};

export default App;