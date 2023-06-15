import { useEffect } from 'react';
import { getLatestResult } from '../../services/api/results';

function LatestResults() {
	useEffect(() => {
		const getData = async () => {
			console.log((await getLatestResult()).data);
		};

		getData();
	}, []);
	return <div>Latest results</div>;
}

export default LatestResults;
