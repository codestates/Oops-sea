import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
//import Footer from './components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';



function App() {


	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
					<Routes>
						<Route exact path="/" element={<Home />}>
						</Route>
					</Routes>
			</div>
		</BrowserRouter>
		
	);
}

export default App;