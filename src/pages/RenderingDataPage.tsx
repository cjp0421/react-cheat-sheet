import { Box, Typography, Fab } from '@mui/material';
import { useState } from 'react';
import ModalTemplate from '../components/Modal';
// import CustomDropdown from '../components/CustomDropdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { map, filter } from './../data/codeExamples.json'

const RenderingDataPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<string | null>(null);

    const handleOpen = (modal: string) => {
        setIsModalOpen(modal);
    }

    const handleClose = () => {
        setIsModalOpen(null)
    }

    return (
        <Box sx={{ p: 1, pt: 11, maxWidth: '70vw', display: 'flex', flexDirection: 'column', alignItems: "center" }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                <Typography variant='h4' gutterBottom sx={{ width: '45vw' }}>
                    Rendering Data
                </Typography>
                <Box>
                    <Fab variant='extended' size="medium" color='secondary' sx={{ width: '25vw', p: 1, marginBottom: '10px' }} onClick={() => handleOpen('map')}>Learn More About .map()</Fab>
                    <Fab variant='extended' size="medium" color='success' sx={{ width: '25vw', p: 1 }} onClick={() => handleOpen('filter')}>Learn More About .filter()</Fab>
                </Box>
            </Box>

            <ModalTemplate onClose={handleClose} open={isModalOpen === 'map'} title=".map()">
                <Typography variant="body1">
                    This modal contains information about the `.map()` function and how it is used in React to transform arrays into lists of elements.
                </Typography></ModalTemplate>
            <ModalTemplate onClose={handleClose} open={isModalOpen === 'filter'} title=".filter()">
                <Typography variant="body1">
                    This modal provides additional information regarding other JavaScript array methods that are useful in React, such as `.filter()` and `.reduce()`.
                </Typography></ModalTemplate>
            <Box>
                <Typography variant='subtitle1' sx={{ pt: 1 }} >
                    .map()
                </Typography>
                <SyntaxHighlighter language="jsx" style={materialDark}>
                    {map.simpleExample}
                </SyntaxHighlighter>
            </Box>
            <Box>
                <Typography variant='subtitle1' sx={{ pt: 1 }}>
                    .map() in a component with TypeScript
                </Typography>
                <SyntaxHighlighter language="jsx" style={materialDark}>
                    {map.simpleAndTypeScriptExample}
                </SyntaxHighlighter>
            </Box>
            <Typography variant='subtitle1' sx={{ pt: 1 }}>
                .map() over array of objects while updating properties on the object in a component with TypeScript
            </Typography>
            <SyntaxHighlighter language="jsx" style={materialDark}>
                {map.objectAndTypeScriptExample}
            </SyntaxHighlighter>
            <Typography variant='subtitle1' sx={{ pt: 1 }}>
                .filter() and .map()
            </Typography>
            <SyntaxHighlighter language='jsx' style={materialDark}>
                {filter.basicFilterAndMapExample}
            </SyntaxHighlighter>
        </Box >
    )
}

export default RenderingDataPage;