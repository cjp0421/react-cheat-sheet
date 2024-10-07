import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 200;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position='fixed' sx={{ transition: 'width 0.3s', width: isDrawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%', ml: `${drawerWidth}px` }}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant='h4'>
                        React + TypeScript
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant='persistent'
                open={isDrawerOpen}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                    transition: 'width 0.3s',
                }}>
                <Toolbar />
                <Box sx={{ width: drawerWidth, overflow: 'auto', pl: 1 }}>
                    <Typography><Link to="/">Home</Link></Typography>
                    <Typography><Link to="/rendering-data">Rendering Data</Link></Typography>
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