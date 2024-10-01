import { Box, Typography } from '@mui/material';

const NotFound: React.FC = () => {
    return (
        <Box sx={{ ml: 20 }}>
            <Typography variant='h4' gutterBottom>
                Whatever you are looking for, it's not here.
            </Typography>
        </Box>
    )
}

export default NotFound;