import { Image, Box, Heading } from '@chakra-ui/react';
import Ingredients from './Ingredients';

function PizzaDetailSection({ pizza, totalPrice }) {
    const { name, ingredients, image } = pizza;

    return (
        <Box
            marginTop={5}
            bg='blackAlpha.100'
            borderRadius='lg'
            p={10}
            marginBottom={5}
            display='flex'
            flexDirection={{ base: 'column', md: 'row' }}
            justifyContent='space-between'>
            <Box
                display='flex'
                flex='2'
                flexDirection='column'
                justifyContent='space-around'
                marginTop={{ base: '3', sm: '0' }}>
                <Heading size='xl' marginTop='1'>{name}</Heading>
                <Heading size='lg'>{totalPrice} USD</Heading>
                <Ingredients ingredients={ingredients} variant='outline' colorScheme='orange' />
            </Box>
            <Box display='flex' flex='1'>
                <Image

                    src={image}
                    alt={name}
                    objectFit='contain'
                />
            </Box>
        </Box>
    )
}

export default PizzaDetailSection;
