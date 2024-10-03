import { Box, Typography } from '@mui/material';
// import CustomModal from '../components/CustomModal'
// import CustomDropdown from '../components/CustomDropdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const mapExample = `
const crew = ['Leela', 'Fry', 'Bender'];
return (
    <ul>
        {crew.map((crewMember, index) => (
            <li key={index}>{crewMember}</li>
        ))}
    </ul>
);
`

const RenderingDataPage: React.FC = () => {
    return (
        <Box sx={{ p: 1 }}>
            <Typography variant='h4' gutterBottom>
                Rendering Data
            </Typography>
            <Typography variant='subtitle1'>
                .map()
            </Typography>
            <SyntaxHighlighter language="jsx" style={materialDark}>
                {mapExample}
            </SyntaxHighlighter>
        </Box>
    )
}

export default RenderingDataPage;