import { Box, Typography, Fab, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import ModalTemplate from '../components/Modal';
// import CustomDropdown from '../components/CustomDropdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { map, filter } from './../data/renderingDataExamples.json'

const RenderingDataPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<string | null>(null);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpen = (modal: string) => {
        setIsModalOpen(modal);
    }

    const handleClose = () => {
        setIsModalOpen(null)
    }

    return (
        <Box
            sx={{
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
                    justifyContent: 'space-around',
                    width: '100%',
                    alignItems: 'center'
                }}>
                <Typography variant='h4' gutterBottom sx={{ width: '45vw' }}>
                    Rendering Data
                </Typography>
                <Box sx={{ display: 'block' }}>
                    <Fab
                        variant='extended'
                        size="medium"
                        color='secondary'
                        sx={{
                            width: `${isSmallScreen ? '15vw' : '25vw'}`,
                            p: 3,
                            marginBottom: '10px'
                        }}
                        onClick={() => handleOpen('map')}
                    >
                        {isSmallScreen ? '.map()' : 'Learn More About .map()'}
                    </Fab>
                    <br />
                    <Fab
                        variant='extended'
                        size="medium"
                        color='success'
                        sx={{ width: `${isSmallScreen ? '15vw' : '25vw'}`, p: 3 }}
                        onClick={() => handleOpen('filter')}
                    >
                        {isSmallScreen ? '.filter()' : 'Learn More About .filter()'}
                    </Fab>
                </Box>
            </Box>

            <ModalTemplate onClose={handleClose} open={isModalOpen === 'map'} title=".map()">
                <Typography variant="body1">
                    The .map() method is used to efficiently turn an array of data into an array of JSX components.
                    In other words, .map() is used to render a group of data in the UI.
                    It allows you to iterate over an array, apply a transformation, and return a new list of
                    components to display. It is also commonly used for rendering dynamic content such as
                    lists, tables, or menus.
                </Typography>
            </ModalTemplate>
            <ModalTemplate onClose={handleClose} open={isModalOpen === 'filter'} title=".filter()">
                <Typography variant="body1">
                    The .filter() method is used to create a new array by conditionally selecting elements from an
                    exisiting array, based on a provided condition or test. It is commonly used to render a subset of data
                    in the UI by filtering items that meet specific criteria. The .filter() method is often combined with
                    the .map() method to dynamically display filtered lists of components, such as search results
                    or filtered lists in tables or menus.
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
            <Typography>
                .filter() and .map() with TypeScript
            </Typography>
            <SyntaxHighlighter language='jsx' style={materialDark}>
                {filter.typescriptFilterAndMapExample}
            </SyntaxHighlighter>
        </Box >
    )
}

export default RenderingDataPage;