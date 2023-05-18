import { createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom';

import React from 'react';

import "./styles/main.css";
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';

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
				path: "/profile/:id",
				element: <Profile />,
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