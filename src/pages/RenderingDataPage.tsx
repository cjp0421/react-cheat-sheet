import { Box, Typography, Fab } from '@mui/material';
import { useState } from 'react';
import ModalTemplate from '../components/Modal';
// import CustomDropdown from '../components/CustomDropdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

const mapSimpleEx: string = `
const crew = ['Leela', 'Fry', 'Bender'];
return (
    <ul>
        {crew.map((crewMember, index) => (
            <li key={index}>{crewMember}</li>
        ))}
    </ul>
);
`

const mapSimpleAndTypeScriptEx: string = `
const crewList: React.FC = () => {
    const crew: string[] = ['Leela', 'Fry', 'Bender']; 

    return (
        <ul>
            {crew.map((crewMember: string, index: number) => (
                <li key={index}>{crewMember}</li>
            ))}
        </ul>
    );
};

export default CrewList;
`

const mapObjectAndTypeScriptEx: string = `
interface Crew {
    id: number;
    name: string;
    isInjured: boolean;
    nearDeathExperiences: number;    
}

const crew: Crew[] = [
    { id: 1, name: 'Leela', isInjured: false, nearDeathExperiences: 0 },
    { id: 2, name: 'Fry', isInjured: false, nearDeathExperiences: 0 },
    { id: 3, name: 'Bender', isInjured: false, nearDeathExperiences: 0 },
];

const BotchedMission: React.FC = () => {
const updatedCrew: Crew[] = crew.map((crewMemeber: Crew) => {
    return {
    ...crew,
    isInjured: true,
    nearDeathExperiences: nearDeathExperiences + 1,
    };
});

return (
    <div>
        <h2>Post-Mission Crew Status</h2>
        <ul>
            {updatedCrew.map((crewMember: Crew) => (
            <ul>
                <li key={crew.id}>
                        Crew Member: {crewMember.name} <br/>
                        Injured: {crewMember.isInjured ? 'Yes' : 'No'} <br/>
                        # of Near Death Experiences: {crewMember.nearDeathExperiences} <br/>
                </li>
            <ul>
            ))}
        </ul>
    </div>
 );
};

export default BotchedMission;
`

const basicFilterAndMapEx: string = `
const DrEmployees = () => {
    const planetExpressEmployees = [
    'Dr. Hubert Farnsworth', 
    'Turanga Leela', 
    'Phillip J. Fry', 
    'Dr. Amy Wong', 
    'Hermes Conrad', 
    'Dr. John Zoidberg', 
    'Lord Nibbler'
    ];
    
    const employeesWithDoctorate = planetExpressEmployees.filter(
        employee => employee.startsWith('Dr.')
    );

    return (
        <div>
            <h2>Employees with a Doctorate</h2>
            <ul>
                {employeesWithDoctorate.map((employee, index) => (
                    <li key={index}>{employee}</li>
                ))}
            </ul>
        </div>
    );
}    

export default DrEmployees;
`

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
                    {mapSimpleEx}
                </SyntaxHighlighter>
            </Box>
            <Box>
                <Typography variant='subtitle1' sx={{ pt: 1 }}>
                    .map() in a component with TypeScript
                </Typography>
                <SyntaxHighlighter language="jsx" style={materialDark}>
                    {mapSimpleAndTypeScriptEx}
                </SyntaxHighlighter>
            </Box>
            <Typography variant='subtitle1' sx={{ pt: 1 }}>
                .map() over array of objects while updating properties on the object in a component with TypeScript
            </Typography>
            <SyntaxHighlighter language="jsx" style={materialDark}>
                {mapObjectAndTypeScriptEx}
            </SyntaxHighlighter>
            <Typography variant='subtitle1' sx={{ pt: 1 }}>
                .filter() and .map()
            </Typography>
            <SyntaxHighlighter language='jsx' style={materialDark}>
                {basicFilterAndMapEx}
            </SyntaxHighlighter>
        </Box >
    )
}

export default RenderingDataPage;