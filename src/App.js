import { createBrowserRouter, RouterProvider, Outlet, Router} from 'react-router-dom';

import React from 'react';
import Navbar from './components/Navbar';
import "./styles/main.css";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import MyWork from './pages/MyWork/MyWork'
import Blog from './pages/Blog/Blog'

const Layaout = () => {
	return(
		<div>
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
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/mywork",
				element: <MyWork />,
			}
		],
	},
]);

function App() {
	return (
		<div>
			<React.Fragment>
				<Navbar/>
			</React.Fragment>
			<RouterProvider router={router}></RouterProvider>
		</div>
	);
}

export default App;