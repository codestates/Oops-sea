import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
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