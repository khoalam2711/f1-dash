import { List, ListItem, ListItemButton, ListItemText, AppBar, Box, Drawer, Toolbar, Typography } from '@mui/material';

function Nav() {
	return (
		<>
			<AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
				<Toolbar>
					<Typography variant="h6" component={'h1'} noWrap>
						F1 Dash
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				sx={{
					width: 240,
					flexShrink: 0,
					[`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
				}}
			>
				<Toolbar />
				<Box sx={{ overflow: 'auto' }}>
					<List>
						{['Latest results', 'Drivers', 'Teams'].map((text) => (
							<ListItem key={text}>
								<ListItemButton>
									<ListItemText primary={text} />
								</ListItemButton>
							</ListItem>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
}

export default Nav;
