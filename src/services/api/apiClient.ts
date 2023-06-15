import axios from 'axios';

const axiosClient = axios.create({
	baseURL: 'http://ergast.com/api/f1',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

export default axiosClient