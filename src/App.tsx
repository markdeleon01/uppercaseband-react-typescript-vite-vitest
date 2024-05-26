import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageLayout from './components/PageLayout'
import Home from './pages/Home'

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
