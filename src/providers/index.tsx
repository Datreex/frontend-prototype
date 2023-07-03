import { PropsWithChildren } from 'react';

import { queryClient } from '../libs';
import { QueryClientProvider } from '@tanstack/react-query';
export const Providers = (props: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
			{props.children}
		</QueryClientProvider>
	);
};
