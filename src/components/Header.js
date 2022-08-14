import React from 'react';
import {
    Heading,
    Stack,
} from '@chakra-ui/react';


const Header = ({ headerText }) => {
    return (
        <Stack
            spacing={5}
            py={5}
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
