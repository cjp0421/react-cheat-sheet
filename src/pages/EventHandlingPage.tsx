import { Box, Fab, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ModalTemplate from './../components/Modal'
// import CustomDropdown from '../components/CustomDropdown'
import { simpleOnClickExample, onClickExampleWithHandlerTypeScript } from './../data/eventHandlingExamples';
import { useState } from 'react';

const EventHandlingPage: React.FC = () => {
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
                </>
            );
        }

        if (selectedCategory === 'onClick') {
            return (
                <>
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
                </>
            );
        }

        if (selectedCategory === 'onChange') {
            return (
                <></>
            )
        }

        return null;
    }
    console.log(isSmallScreen)

    return (
        <Box sx={{
            p: 1,
            pt: 11,
            maxWidth: `${isSmallScreen ? '97vw' : '80vw'}`,
            width: '100%',
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
                }}
            >
                <Typography variant='h4' gutterBottom sx={{ width: '45vw' }}>
                    Event Handling
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
                        <MenuItem value="onClick">onClick()</MenuItem>
                        <MenuItem value='onChange'>onChange()</MenuItem>
                    </Select>
                </FormControl>
                <Box sx={{ display: 'block' }}>
                    <Fab
                        variant='extended'
                        color='success'
                        onClick={() => handleOpen('eventObject')}
                        sx={{
                            width: `${isSmallScreen ? '15vw' : '25vw'}`,
                            fontSize: `${isSmallScreen ? 'x-small' : 'medium'}`,
                            p: 3,
                            marginBottom: '10px'
                        }}
                    >
                        {isSmallScreen ? 'Event Object' : 'Learn More About the Event Object'}
                    </Fab>
                    <br />
                    <Fab
                        variant='extended'
                        color='secondary'
                        onClick={() => handleOpen('onClick')}
                        sx={{
                            width: `${isSmallScreen ? '15vw' : '25vw'}`,
                            fontSize: `${isSmallScreen ? 'x-small' : 'medium'}`,
                            p: 3,
                            marginBottom: '10px'
                        }}
                    >
                        {isSmallScreen ? 'onClick()' : 'Learn More About onClick()'}
                    </Fab>
                    <br />
                    <Fab
                        variant='extended'
                        color='primary'
                        onClick={() => handleOpen('onChange')}
                        sx={{
                            width: `${isSmallScreen ? '15vw' : '25vw'}`,
                            fontSize: `${isSmallScreen ? 'x-small' : 'medium'}`,
                            p: 3,
                            marginBottom: '10px'
                        }}
                    >
                        {isSmallScreen ? 'onChange()' : 'Learn More About onChange()'}
                    </Fab>
                </Box>
            </Box>

            <ModalTemplate onClose={handleClose} open={isModalOpen === 'eventObject'} title='The Event Object'>
                More about the event object:
                If your function doesn't need to access the properties on the event object then you
                don't need to pass the event object as a parameter to your event handler.
            </ModalTemplate>
            <ModalTemplate onClose={handleClose} open={isModalOpen === 'onClick'} title='onClick'>
                More about onClick
            </ModalTemplate>
            <ModalTemplate onClose={handleClose} open={isModalOpen === 'onChange'} title='onChange'>
                More about onChange
            </ModalTemplate>
            <Box sx={{ width: '100%' }}>
                {renderSelectedExamples()}
            </Box>
        </Box>

    )
}

export default EventHandlingPage;