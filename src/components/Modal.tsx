import { Box, Modal, IconButton, Card, CardContent, CardHeader } from '@mui/material';
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
    border: '1px solid #808080',
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
            <Card elevation={3}>
                <Box sx={ModalStyles}>
                    {title && (
                        <CardHeader
                            id="modal-title"
                            title={title}
                            action={
                                <IconButton onClick={onClose}>
                                    <CloseIcon />
                                </IconButton>
                            }
                        />
                    )}
                    <CardContent>
                        <Box sx={{ mt: 2 }}>
                            {children}
                        </Box>
                    </CardContent>
                </Box>
            </Card>
        </Modal>
    )
}

export default ModalTemplate;