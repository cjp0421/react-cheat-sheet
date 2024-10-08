import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import ModalTemplate from '../components/ModalTemplate'
// import CustomDropdown from '../components/CustomDropdown'

const EventHandlingPage: React.FC = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
    const simpleOnClickExample = `
    <button onClick={() => alert('Auto Destruct Activated!')}>
        Don't Click Me!
</button>
    `;

    const onClickExampleWithHandlerTypeScript = `
    const AutoDestruct: React.FC = () => {
        const handleDoomClick = (): void => {
            alert('Auto Destruct Activated!');
        }
    
        return (
            <button onClick={handleDoomClick}>
                Don't Click Me!
            </button>
        );
    };
    
    export default AutoDestruct;
    `;

    return (
        <Box sx={{
            p: 1,
            pt: 11,
            maxWidth: `${isSmallScreen ? '97vw' : '80vw'}`,
            display: 'flex',
            flexDirection: 'column',
            transition: 'max-width 0.3s'
        }}>
            <Box>
                <Typography variant='h4' gutterBottom>
                    Event Handling
                </Typography>
            </Box>
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