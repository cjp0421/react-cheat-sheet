import { Box, Modal, Typography, Button, IconButton } from '@mui/material';
import closeIcon from '@mui/icons-material/Close'

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const ModalStyles = {
    postion: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
} as const;

const ModalTemplate: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
    return children
}

export default ModalTemplate;