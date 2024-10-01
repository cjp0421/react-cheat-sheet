import { AppBar, Box, Drawer, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 180;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position='fixed' sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar>
                    <Typography variant='h6'>
                        AppBar [Toolbar] [Typography]
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant='permanent'>
                <Toolbar />
                <Box sx={{ width: '180px', overflow: 'auto' }}>
                    <Typography><Link to="/">Home</Link></Typography>
                    <Typography><Link to="/event-handling">Event Handling</Link></Typography>
                    <Typography><Link to="/hooks">Hooks</Link></Typography>
                    <Typography><Link to="/state-management">State Management</Link></Typography>
                </Box>
            </Drawer>

            <Box component='main' sx={{ width: `calc(100% - ${drawerWidth}px)` }}>
                <Toolbar />
                {children || <Typography>Choose a topic to the left to learn more!</Typography>}
            </Box>

        </Box>
    )
}

export default Layout;