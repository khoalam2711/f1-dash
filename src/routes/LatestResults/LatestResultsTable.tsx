import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
	{ field: 'position', headerName: 'Position', width: 90 },
	{ field: 'number', headerName: 'Number', width: 90 },
	{ field: 'lastName', headerName: 'Last name', width: 130 },
	{ field: 'firstName', headerName: 'First name', width: 130 },
	{
		field: 'team',
		headerName: 'Team',
		width: 130,
	},
	{
		field: 'time',
		headerName: 'Time',
		width: 130,
	},
	{
		field: 'points',
		headerName: 'Points',
		type: 'number',
		width: 90,
	},
];

const rows = [
	{ id: 1, position: 1, lastName: 'Verstappen', firstName: 'Max', team: 'Red Bull', time: '1:27:57.940', points: '26' },
	{ id: 2, position: 1, lastName: 'Verstappen', firstName: 'Max', team: 'Red Bull', time: '1:27:57.940', points: '26' },
	{ id: 3, position: 1, lastName: 'Verstappen', firstName: 'Max', team: 'Red Bull', time: '1:27:57.940', points: '26' },
	{ id: 4, position: 1, lastName: 'Verstappen', firstName: 'Max', team: 'Red Bull', time: '1:27:57.940', points: '26' },
	{ id: 5, position: 1, lastName: 'Verstappen', firstName: 'Max', team: 'Red Bull', time: '1:27:57.940', points: '26' },
	{ id: 6, position: 1, lastName: 'Verstappen', firstName: 'Max', team: 'Red Bull', time: '1:27:57.940', points: '26' },
	{ id: 7, position: 1, lastName: 'Verstappen', firstName: 'Max', team: 'Red Bull', time: '1:27:57.940', points: '26' },
];

export default function LatestResultsTable() {
	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: { page: 0, pageSize: 5 },
					},
				}}
			/>
		</div>
	);
}
