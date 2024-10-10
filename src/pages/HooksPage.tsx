import { Box, Typography } from '@mui/material';
// import ModalTemplate from '../components/ModalTemplate'
// import CustomDropdown from '../components/CustomDropdown'

const HooksPage: React.FC = () => {
    return (
        <Box>
            <Typography variant='h4' gutterBottom>
                React Hooks
            </Typography>
            <ul>
                <li>useEffect</li>
                <li>useState</li>
                <li>useLocation</li>
                <li>useTheme</li>
                <li>useMediaQuery</li>
                <li>useRef</li>
                <li>useNavigate</li>
                <li>useContext</li>
                <li>useCallback</li>
                <li>useReducer</li>
                <li>useMemo</li>
            </ul>
            <a href='https://www.skillreactor.io/blog/top-10-most-useful-custom-hooks-in-react/' target='_blank' rel='noreferrer'>Top 10 Most Useful Custom Hooks in React</a>
            <a href='https://daily.dev/blog/react-hooks-explained-simply' target='_blank' rel='noreferrer'>React Hooks Explained Simply</a>
        </Box>
    )
}

export default HooksPage;