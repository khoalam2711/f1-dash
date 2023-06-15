import { useEffect } from 'react';
import { getLatestResult } from '../../services/api/results';
import { Box, Typography } from '@mui/material';
import LatestResultsTable from './LatestResultsTable';

function LatestResults() {
	useEffect(() => {
		const getData = async () => {
			console.log((await getLatestResult()).data);
		};

		// getData();
	}, []);
	return (
		<Box sx={{ p: '2rem 0 0 3rem' }}>
			<h1>Latest results</h1>
			<Typography sx={{ marginBottom: 0 }} variant="h2" >
				Spanish Grand Prix
			</Typography>
			<Typography mt={1} variant="body1">Round: 7 Season: 2023</Typography>
			<h2>Circuit Info</h2>
			<p>Name: Circuit de Barcelona-Catalunya</p>
			<p>Country: Spain</p>
			<h2>Race results</h2>
			<LatestResultsTable />
		</Box>
	);
}

export default LatestResults;
