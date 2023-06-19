import { PropsWithChildren } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../config';
import { queryClient } from '../lib';
import { QueryClientProvider } from '@tanstack/react-query';
export const Providers = (props: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
			<ChakraProvider theme={theme}>{props.children}</ChakraProvider>
		</QueryClientProvider>
	);
};
