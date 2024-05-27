import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'
import About from './pages/About'
import Discography from './pages/Discography'
import Events from './pages/Events'

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <PageLayout />,
			children: [
				{
					path: '/',
					element: <Home />
				},
				{
					path: '/home',
					element: <Home />
				},
				{
					path: '/about',
					element: <About />
				},
				{
					path: '/discography',
					element: <Discography />
				},
				{
					path: '/events',
					element: <Events />
				}
			]
		}
	])

	return (
		<>
			<div data-testid='app' className='app'>
				<RouterProvider router={router} />
			</div>
		</>
	)
}

export default App
