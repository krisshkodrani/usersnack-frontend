import {
  Box,
  Heading,
  Container,
  Button,
  Stack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';


export default function SomethingWentWrong({ hideBackToHomepageButton = false }) {
  let navigate = useNavigate();

  return (
    <Container maxW={'3xl'}>
      <Stack
        as={Box}
        textAlign={'center'}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}>
          Something went wrong.
        </Heading>
        {!hideBackToHomepageButton && (
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme='orange'
              bg={'orange.400'}
              rounded={'full'}
              onClick={() => navigate('/')}
              px={6}
              _hover={{
                bg: 'orange.500',
              }}>
              Back to Homepage
            </Button>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
