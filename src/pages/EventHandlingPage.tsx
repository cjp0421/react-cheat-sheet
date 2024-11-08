import { Box, Fab, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import ModalTemplate from './../components/Modal'
// import CustomDropdown from '../components/CustomDropdown'
import { simpleOnClickExample, onClickExampleWithHandlerTypeScript, eventObjectTypes, simpleOnChangeExample, onChangeWithHandlerAndState } from './../data/eventHandlingExamples';
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
                        onClick Event - Simple
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
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        onChange Event - Simple
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {simpleOnChangeExample.trim()}
                    </SyntaxHighlighter>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        onChange Event in a component with event handler
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {onChangeWithHandlerAndState.trim()}
                    </SyntaxHighlighter>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        Event Object Types
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {eventObjectTypes.changeEvent}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {eventObjectTypes.formSubmitEvent}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {eventObjectTypes.keyboardEvent}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {eventObjectTypes.mouseEvent}
                    </SyntaxHighlighter>
                </>
            );
        }

        if (selectedCategory === 'onClick') {
            return (
                <>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        onClick Event - Simple
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {simpleOnClickExample.trim()}
                    </SyntaxHighlighter>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        onClick with Handler and Typescript in a component
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {onClickExampleWithHandlerTypeScript.trim()}
                    </SyntaxHighlighter>
                </>
            );
        }

        if (selectedCategory === 'onChange') {
            return (
                <>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        onChange Event - Simple
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {simpleOnChangeExample.trim()}
                    </SyntaxHighlighter>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        onChange Event in a component with event handler
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {onChangeWithHandlerAndState.trim()}
                    </SyntaxHighlighter>
                </>
            )
        }

        if (selectedCategory === 'eventObjectTypes') {
            return (
                <>
                    <Typography variant='subtitle1' sx={{ pt: 1 }}>
                        Event Object Types
                    </Typography>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {eventObjectTypes.changeEvent}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {eventObjectTypes.formSubmitEvent}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {eventObjectTypes.keyboardEvent}
                    </SyntaxHighlighter>
                    <SyntaxHighlighter language='jsx' style={materialDark}>
                        {eventObjectTypes.mouseEvent}
                    </SyntaxHighlighter>
                </>
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
                        <MenuItem value='eventObjectTypes'>Event Object Types</MenuItem>
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
                The event object is a special object in React that contains information about a user or system triggered
                event. Events include user actions such as clicks, key presses, or typing in an input field and system- or
                programmatically-triggered events. Non-user-triggered events include simulated events, load, error, or focus events,
                and timers and asynchronous operations. The event object allows the programmer to use details about the event, such as
                accessing the element that was clicked or getting the value from an input field. If a function doesn't need to access
                the properties on the event object then it does not need to be passed in as a parameter to your event handler.
            </ModalTemplate>
            <ModalTemplate onClose={handleClose} open={isModalOpen === 'onClick'} title='onClick'>
                The onClick property in React is an event handler that identifies a function to run when a user clicks on an element,
                such as a button or a link. The onClick property should contain a reference to a function, but it should not directly
                invoke the function. This means you should not include the parentheses when assigning the function to onClick. If additional
                arguments need to be passed to the function when using onClick, the function should be wrapped in a callback. The function
                passed to the onClick property automatically receives the event object as an argument.
            </ModalTemplate>
            <ModalTemplate onClose={handleClose} open={isModalOpen === 'onChange'} title='onChange'>
                The onChange property in React is an event handler that is used to track changes in input elements, such as text fields, checkboxes,
                or dropdowns. It runs a function whenever the value in the input field changes. This event handler captures what a user is typing or
                selecting and updates the component's state based on the changes. To use the onChange property, pass a function to it that handles what
                happens when the user interacts with the field. Like with the onClick property, the event object is automatically passed to the
                function as an argument. If additional arguments need to be passed to the function when using onChange, the function should be wrapped in a callback.
            </ModalTemplate>
            <Box sx={{ width: '100%' }}>
                {renderSelectedExamples()}
            </Box>
        </Box>

    )
}

export default EventHandlingPage;