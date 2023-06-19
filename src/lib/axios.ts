import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://some-domain.com/api/',
	timeout: 1000,
	headers: { 'X-Custom-Header': 'foobar' },
});

instance.interceptors.request.use((request) => {
	console.log('request sent', request);
	return request;
});

instance.interceptors.response.use((response) => {
	console.log('response arrived', response);
	return response;
});

export { instance };
