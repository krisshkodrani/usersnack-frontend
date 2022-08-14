import React, { useEffect, useState } from 'react';
import {
    VStack,
    Container,
    StackDivider,
} from '@chakra-ui/react';

import { getPizzas } from '../api';

import PizzaItem from '../components/PizzaListItem';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';

const PizzasOverview = () => {
    const [pizzas, setPizzas] = useState({
        loading: true,
        data: null,
    });

    useEffect(() => {
        getPizzas().then(data => {
            setPizzas({ loading: false, data: data })
        })
    }, []);

    if (pizzas.loading) {
        return <LoadingSpinner />;
    }

    return (
        <Container maxW='7xl' p='12'>
            <Header headerText='Pizza Service - Usersnack' />
            <VStack
                divider={<StackDivider borderColor='gray.200' />}
                spacing={4}
                align='stretch'
            >
                {pizzas.data.map((p) => (
                    <PizzaItem key={p.id} {...p} onClick={(title) => console.log(title)} />
                ))}

            </VStack>
        </Container>
    );
};

export default PizzasOverview;
