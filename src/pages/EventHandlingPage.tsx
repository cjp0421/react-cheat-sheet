import { Box, Typography } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
// import ModalTemplate from '../components/ModalTemplate'
// import CustomDropdown from '../components/CustomDropdown'

const EventHandlingPage: React.FC = () => {

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
        <Box>
            <Box>
                <Typography variant='h4' gutterBottom>
                    Event Handling
                </Typography>
            </Box>
            <Box>
                <Typography variant='subtitle1'>
                    onClick event
                </Typography>
                <SyntaxHighlighter language='jsx' style={materialDark}>
                    {simpleOnClickExample.trim()}
                </SyntaxHighlighter>
                <SyntaxHighlighter language='jsx' style={materialDark}>
                    {onClickExampleWithHandlerTypeScript.trim()}
                </SyntaxHighlighter>
            </Box>
        </Box>

    )
}

export default EventHandlingPage;