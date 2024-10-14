import { AppBar, Box, Drawer, IconButton, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 200;

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'))

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen)
    }

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position='fixed' sx={{ transition: 'width 0.3s', width: isDrawerOpen ? `calc(100% - ${drawerWidth}px)` : '100%', ml: `${drawerWidth}px` }}>
                <Toolbar>
                    {isSmallScreen && isDrawerOpen ? null : <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>}
                    <Typography variant='h4'>
                        React + TypeScript
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                variant={isSmallScreen ? 'temporary' : 'persistent'}
                open={isDrawerOpen}
                onClose={handleDrawerToggle}
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
                    <Typography><Link to="/state-management">State Management</Link></Typography>
                    <Typography><Link to="/hooks">Hooks</Link></Typography>
                </Box>
            </Drawer>

            <Box component='main'
                sx={{
                    flexGrow: 1,
                    width: `calc(100% - ${drawerWidth}px)`
                }}>
                {children}
            </Box>

        </Box>
    )
}

export default Layout;