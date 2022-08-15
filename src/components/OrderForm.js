import React, { useState } from 'react';
import {
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    Textarea,
    VStack,
} from '@chakra-ui/react';
import ActionButton from './ActionButton';

const initialData = {
    customerName: '',
    customerAddress: '',
}

export default function OrderForm({ onOrderButtonClick }) {
    const [data, setData] = useState(initialData);

    const handleChangeData = (e, key) => {
        setData({ ...data, [key]: e.target.value })
    }

    const handleSubmitOrder = () => {
        onOrderButtonClick(data);
        setData(initialData);
    }


    return (
        <Box
            bg='blackAlpha.200'
            borderRadius='lg'
            width={{ md: '50%', sm: '100%' }}
            p={5}
            shadow='base'
        >
            <VStack spacing={5}>
                <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                        <Input
                            bg='white'
                            type='text'
                            name='name'
                            placeholder='Your Name'
                            value={data.customerName}
                            onChange={(e) => handleChangeData(e, 'customerName')}
                        />
                    </InputGroup>
                </FormControl>

                <FormControl isRequired>
                    <FormLabel>Address</FormLabel>

                    <Textarea
                        bg='white'
                        name='message'
                        placeholder='Your Address'
                        rows={3}
                        resize='none'
                        value={data.customerAddress}
                        onChange={(e) => handleChangeData(e, 'customerAddress')}
                    />
                </FormControl>
                <ActionButton text='Order' onClick={() => handleSubmitOrder()} />
            </VStack>
        </Box>
    );
}
