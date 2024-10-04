import { Box, Modal, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close'

interface ModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const ModalStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
} as const;

const ModalTemplate: React.FC<ModalProps> = ({ open, onClose, title, children }) => {
    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labeledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={ModalStyles}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    {title && (
                        <Typography id="modal-title" variant="h6" component="h2">{title}</Typography>
                    )}
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Box sx={{ mt: 2 }}>
                    {children}
                </Box>
            </Box>
        </Modal>
    )
}

export default ModalTemplate;