import { Image, Box, Heading } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Ingredients from './Ingredients';

function PizzaListItem({ id, name, base_price, ingredients, image }) {
    let navigate = useNavigate()

    return (
        <Box
            display='flex'
            justifyContent='space-between'
            shadow='md'
            borderWidth='1px'
            pl={10}
            py={5}
            _hover={{ bg: '#ebedf0' }}
            onClick={() => navigate(`/${id}/`)}
        >
            <Box flex='2' display='flex' flexDirection='column'>
                <Box flex='1' display='flex' flexDirection='column' alignItems='flex-start' justifyContent='center'>
                    <Heading color='gray.800' size='md' textTransform='capitalize'>{name}</Heading>
                    <Ingredients ingredients={ingredients} size='lg' colorScheme='orange' borderRadius='full' variant='solid' />
                </Box>
                <Box flex='1' as='span' color='gray.800' fontSize='md'>
                    {base_price.toFixed(2)} USD
                </Box>
            </Box>
            <Box flex='1' padding={5} sx={{ clear: 'right' }}>
                <Image
                    src={image}
                    alt={name}
                    float='right'
                />
            </Box>
        </Box>
    )
}

export default PizzaListItem;
