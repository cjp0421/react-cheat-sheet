import { AppBar, Box, Drawer, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 200;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position='fixed' sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
                <Toolbar>
                    <Typography variant='h4'>
                        React + TypeScript
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant='permanent' sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' }
            }}>
                <Toolbar />
                <Box sx={{ width: drawerWidth, overflow: 'auto' }}>
                    <Typography><Link to="/">Home</Link></Typography>
                    <Typography><Link to="/event-handling">Event Handling</Link></Typography>
                    <Typography><Link to="/hooks">Hooks</Link></Typography>
                    <Typography><Link to="/state-management">State Management</Link></Typography>
                </Box>
            </Drawer>

            <Box component='main' sx={{ flexGrow: 1, width: `calc(100% - ${drawerWidth}px)` }}>
                {children || <Typography>Choose a topic to the left to learn more!</Typography>}
            </Box>

        </Box>
    )
}

export default Layout;