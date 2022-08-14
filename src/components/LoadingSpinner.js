import React from 'react';
import {
    Container,
    Spinner,
} from '@chakra-ui/react';

const LoadingSpinner = () => {
    return (
        <Container maxW={'7xl'} p='12' display={'flex'} justifyContent={'center'} >
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </Container>
    )
}

export default LoadingSpinner;
