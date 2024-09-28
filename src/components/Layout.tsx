import { AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        React + TypeScript Cheat Sheet
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer variant="permanent" sx={{ width: 240 }}>
                <Toolbar>
                    <Box sx={{ overflow: 'auto' }}>
                        <List>
                            <ListItem button component={Link} to="/hooks">
                                <ListItemText primary="Hooks" />
                            </ListItem>
                            <ListItem button component={Link} to="/state-management">
                                <ListItemText primary="State Management" />
                            </ListItem>
                        </List>
                    </Box>
                </Toolbar>
            </Drawer>

            <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: 30 }}>
                <Toolbar />
                {children}
            </Box>

        </Box>
    )
}

export default Layout;