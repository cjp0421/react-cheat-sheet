import { Box, Fab, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ModalTemplate from './../components/Modal'
// import CustomDropdown from '../components/CustomDropdown'
import { simpleOnClickExample, onClickExampleWithHandlerTypeScript } from './../data/eventHandlingExamples';
import { useState } from 'react';

const EventHandlingPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{
            p: 1,
            pt: 11,
            maxWidth: `${isSmallScreen ? '97vw' : '80vw'}`,
            display: 'flex',
            flexDirection: 'column',
            transition: 'max-width 0.3s'
        }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around'
                }}
            >
                <Typography variant='h4' gutterBottom>
                    Event Handling
                </Typography>
                <Fab
                    variant='extended'
                    color='secondary'
                    onClick={() => setIsModalOpen(true)}
                >Learn About the Event Object</Fab>
            </Box>
            <ModalTemplate onClose={() => setIsModalOpen(false)} open={isModalOpen} title='The Event Object'>
                More about the event object:
                If your function doesn't need to access the properties on the event object then you
                don't need to pass the event object as a parameter to your event handler.
            </ModalTemplate>
            <Box>
                <Typography variant='subtitle1' sx={{ pt: 1 }}>
                    onClick event
                </Typography>
                <SyntaxHighlighter language='jsx' style={materialDark}>
                    {simpleOnClickExample.trim()}
                </SyntaxHighlighter>
                <Typography variant='subtitle1' sx={{ pt: 1 }}>
                    onClick with handler and Typescript in a component
                </Typography>
                <SyntaxHighlighter language='jsx' style={materialDark}>
                    {onClickExampleWithHandlerTypeScript.trim()}
                </SyntaxHighlighter>
            </Box>
        </Box>

    )
}

export default EventHandlingPage;