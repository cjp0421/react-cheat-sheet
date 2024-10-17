import { Box, Typography, Fab, useMediaQuery, FormControl, InputLabel, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useState } from 'react';
import ModalTemplate from '../components/Modal';
// import CustomDropdown from '../components/CustomDropdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { map, filter, reduce } from './../data/renderingDataExamples.json'
// import { reduceExample } from '../data/eventHandlingExamples';

const RenderingDataPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState<string | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>('all');

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleOpen = (modal: string) => {
        setIsModalOpen(modal);
    }

    const handleClose = () => {
        setIsModalOpen(null);
    }

    const handleCategoryChange = (event: SelectChangeEvent<string>) => {
        setSelectedCategory(event.target.value)
    }

    const renderSelectedExamples = (): JSX.Element | null => {
        if (selectedCategory === 'all') {
            return (
                <>
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
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        .filter() and .map() with TypeScript
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {filter.typescriptFilterAndMapExample}
                    </SyntaxHighlighter>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        .reduce()
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {reduce.simpleExample}
                    </SyntaxHighlighter>
                </>
            )
        }
        if (selectedCategory === 'map') {
            return (
                <>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        .map() - Simple Example
                    </Typography>
                    <SyntaxHighlighter language="jsx" style={materialDark}>
                        {map.simpleExample}
                    </SyntaxHighlighter>

                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        .map() - TypeScript Example
                    </Typography>
                    <SyntaxHighlighter language="jsx" style={materialDark}>
                        {map.simpleAndTypeScriptExample}
                    </SyntaxHighlighter>

                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        .map() - Array of Objects with TypeScript
                    </Typography>
                    <SyntaxHighlighter language="jsx" style={materialDark}>
                        {map.objectAndTypeScriptExample}
                    </SyntaxHighlighter>
                </>
            );
        }
        if (selectedCategory === 'filter') {
            return (
                <>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        .filter() and .map() - Basic Example
                    </Typography>
                    <SyntaxHighlighter language="jsx" style={materialDark}>
                        {filter.basicFilterAndMapExample}
                    </SyntaxHighlighter>

                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        .filter() and .map() with TypeScript
                    </Typography>
                    <SyntaxHighlighter language="jsx" style={materialDark}>
                        {filter.typescriptFilterAndMapExample}
                    </SyntaxHighlighter>
                </>
            );
        }
        if (selectedCategory === 'reduce') {
            return (
                <>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        .reduce() - Example
                    </Typography>
                    <SyntaxHighlighter language="jsx" style={materialDark}>
                        {reduce.simpleExample}
                    </SyntaxHighlighter>
                </>
            );
        }
        return null;
    }
    console.log(isSmallScreen)
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
                <FormControl sx={{ minWidth: 200, marginRight: '5%' }}>
                    <InputLabel id="example-category-label">Select Type of Example to View</InputLabel>
                    <Select
                        labelId='example-category-label'
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        label="Select Type of Example to View"
                    >
                        <MenuItem value="all">All Examples</MenuItem>
                        <MenuItem value="map">.map()</MenuItem>
                        <MenuItem value="filter">.filter()</MenuItem>
                        <MenuItem value="reduce">.reduce()</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{ display: 'block' }}>
                    <Fab
                        variant='extended'
                        size="medium"
                        color='secondary'
                        sx={{
                            width: `${isSmallScreen ? '15vw' : '25vw'}`,
                            p: 3,
                            marginBottom: '10px',
                            fontSize: `${isSmallScreen ? 'small' : 'medium'}`,
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
                        sx={{
                            width: `${isSmallScreen ? '15vw' : '25vw'}`,
                            p: 3,
                            marginBottom: '10px',
                            fontSize: `${isSmallScreen ? 'small' : 'medium'}`
                        }}
                        onClick={() => handleOpen('filter')}
                    >
                        {isSmallScreen ? '.filter()' : 'Learn More About .filter()'}
                    </Fab>
                    <br />
                    <Fab
                        variant='extended'
                        size="medium"
                        color='primary'
                        sx={{
                            width: `${isSmallScreen ? '15vw' : '25vw'}`,
                            p: 3,
                            marginBottom: '10px',
                            fontSize: `${isSmallScreen ? 'small' : 'medium'}`
                        }}
                        onClick={() => handleOpen('reduce')}
                    >
                        {isSmallScreen ? '.reduce()' : 'Learn More About .reduce()'}
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
                    exisiting array, based on a provided condition or test, and then returning the selected elements as a new array.
                    The method takes a callback function, which is executed for each element in the array. The callback function should return a boolean.
                    It is commonly used to render a subset of data in the UI by filtering items that meet specific criteria.
                    The .filter() method is often combined with the .map() method to dynamically display filtered lists of components,
                    such as search results or filtered lists in tables or menus.
                </Typography>
            </ModalTemplate>
            <ModalTemplate onClose={handleClose} open={isModalOpen === 'reduce'} title=".reduce()">
                <Typography variant="body1">
                    The .reduce() method is used to iterate over all elements in an array and accumulate, or combine, them into a single value.
                    This is why it's called "reducing" the array: all the values in an array are reduced to one value. The .reduce() method takes a
                    callback function and an initial value as arguments. The callback function executes for each element in the array, and it accumulates
                    a result using the previous value and the current element. The final result is the accumulated value after the method has processed
                    all elements in the array.
                </Typography>
            </ModalTemplate>
            <Box>
                {renderSelectedExamples()}
            </Box>

        </Box >
    )
}

export default RenderingDataPage;