import React from 'react';
import {
    Box,
    Heading,
    Stack,
} from '@chakra-ui/react';


const Header = ({ headerText }) => {
    return (
        <Stack
            as={Box}
            spacing={{ base: 8, md: 14 }}
            py={{ base: 10 }}
        >
            <Heading
                fontWeight={500}
                fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
                lineHeight={'110%'}>
                {headerText}
            </Heading>
        </Stack>
    )
}

export default Header;
