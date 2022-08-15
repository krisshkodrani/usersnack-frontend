import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react';
import ActionButton from './ActionButton';

function UsersnackModal({ isOpen, onClose, headerText, bodyText }) {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{headerText}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{bodyText}</ModalBody>
                    <ModalFooter>
                        <ActionButton text='Ok' onClick={onClose} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default UsersnackModal;
