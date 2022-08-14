import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import ActionButton from './ActionButton';

function UsersnackModal({ isOpen }) {
    const { onClose } = useDisclosure()
    let navigate = useNavigate()

    const handleClose = () => {
        onClose();
        navigate('/');
    }

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Order Received!</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Your Pizza is on its way
                    </ModalBody>

                    <ModalFooter>
                        <ActionButton text={'Ok, great!'} onClick={handleClose} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UsersnackModal;
