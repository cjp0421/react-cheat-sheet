import { Box, Typography } from '@mui/material';
// import ModalTemplate from '../components/ModalTemplate'
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

const RenderingDataPage: React.FC = () => {
    return (
        <Box sx={{ p: 1, pt: 11, maxWidth: '70vw', display: 'flex', flexDirection: 'column' }}>
            <Typography variant='h4' gutterBottom sx={{ width: '70vw' }}>
                Rendering Data
            </Typography>
            <Typography variant='subtitle1' sx={{ pt: 1, width: '70vw' }} >
                .map()
            </Typography>
            <SyntaxHighlighter language="jsx" style={materialDark}>
                {mapSimpleEx}
            </SyntaxHighlighter>
            <Typography variant='subtitle1' sx={{ pt: 1, width: '70vw' }}>
                .map() in a component with TypeScript
            </Typography>
            <SyntaxHighlighter language="jsx" style={materialDark}>
                {mapSimpleAndTypeScriptEx}
            </SyntaxHighlighter>
            <Typography variant='subtitle1' sx={{ pt: 1, width: '70vw' }}>
                .map() over array of objects while updating properties on the object in a component with TypeScript
            </Typography>
            <SyntaxHighlighter language="jsx" style={materialDark}>
                {mapObjectAndTypeScriptEx}
            </SyntaxHighlighter>

        </Box >
    )
}

export default RenderingDataPage;