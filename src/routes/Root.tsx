import { Box, Toolbar } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

function Root() {
	return (
		<Box sx={{ display: 'flex' }}>
			<Nav />
			<Box component="main" sx={{ flexGrow: 1 }}>
				<Toolbar />
				<Outlet />
			</Box>
		</Box>
	);
}

export default Root;
