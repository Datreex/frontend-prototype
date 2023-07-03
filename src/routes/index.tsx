import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
	{
		element:<></>, //layout+routing
		children: [
			{
				index: true,
				element: <>hello</>, //prototype dashboard
			},
		],
	},
]);
