import React from 'react'
import {
    Button,
} from '@chakra-ui/react';

const ActionButton = ({ text, onClick }) => {
    return (
        <Button
            size='md'
            height='48px'
            width='200px'
            colorScheme='orange'
            bg='orange.400'
            color='white'
            onClick={onClick}
            _hover={{ bg: 'orange.500' }}
        >
            {text}
        </Button>
    )
}

export default ActionButton;
