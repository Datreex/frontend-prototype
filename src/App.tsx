import { RouterProvider } from 'react-router-dom';
import { Providers } from './providers';
import { router } from './routes';
import { Button } from '@chakra-ui/react';
function App() {
	return (
		<Providers>
			<RouterProvider router={router} />
			<Button>test 22</Button>
			<div></div>
		</Providers>
	);
}

export default App;
