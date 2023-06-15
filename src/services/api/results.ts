import apiClient from './apiClient';

export async function getLatestResult() {
	return await apiClient.get('/current/last/results.json');
}
