import { createBrowserRouter, RouterProvider, Outlet, Router} from 'react-router-dom';

import React from 'react';
import Navbar from './components/Navbar';
import "./styles/main.css";
import Home from './pages/Home/Home';
import About from './pages/About/About';


const Layaout = () => {
	return(
		<div>
			<h1>Navbar</h1>
			<Outlet></Outlet>
		</div>		
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layaout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about/:id",
				element: <About />,
			},
		],
	},
]);

function App() {
	return (
		<div>
			<RouterProvider router={router}></RouterProvider>
			<React.Fragment>
				<Navbar/>
			</React.Fragment>
		</div>
	);
}

export default App;