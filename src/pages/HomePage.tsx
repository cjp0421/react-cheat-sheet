import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import CustomModal from '../components/CustomModal'
// import CustomDropdown from '../components/CustomDropdown'

const HomePage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ p: 3, mt: 2 }}>
            <Typography variant='h1' gutterBottom sx={{ p: 2, fontSize: 48 }}>
                Welcome to my React + TypeScript Cheat Sheet!
            </Typography>
            <Typography variant='h4' gutterBottom sx={{ p: 2 }}>
                Learn About Event Handling!
            </Typography>
            <Button onClick={() => navigate('/event-handling')}>Go to Event Handling</Button>
            <Typography variant='h4' gutterBottom sx={{ p: 2 }}>
                Learn About Hooks!
            </Typography>
            <Button onClick={() => navigate('/hooks')}>Go to Hooks</Button>
            <Typography variant='h4' gutterBottom sx={{ p: 2 }}>
                Learn About State Management!
            </Typography>
            <Button onClick={() => navigate('/state-management')}>Go to State Management</Button>
        </Box>
    )
}

export default HomePage;