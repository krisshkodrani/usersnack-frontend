import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Divider
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { getPizza, postPizzaOrder } from '../api';
import OrderForm from '../components/OrderForm';
import Header from '../components/Header';
import PizzaDetailSection from '../components/PizzaDetailSection';
import LoadingSpinner from '../components/LoadingSpinner';
import ExtraIngredientSelect from '../components/ExtraIngredientsSelect';

const PizzaDetailView = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState({
        loading: true,
        data: null,
    });

    const [selectedExtraList, setSelectedExtraList] = useState([]);

    useEffect(() => {
        getPizza(id).then(data => {
            setPizza({ loading: false, data })
        })
    }, [id]);

    if (pizza.loading) {
        return <LoadingSpinner />;
    }

    const handleOrderPizza = async ({ customerName, customerAddress }) => {
        const data = {
            customerName: customerName,
            customerAddress: customerAddress,
            pizzaId: pizza.data.id,
            extraIngredients: selectedExtraList
        }
        const responseData = await postPizzaOrder(data);

        console.log(responseData);
    }

    return (
        <Container maxW={'7xl'} p='12'>
            <Header headerText={'Usersnack - ' + pizza.data.name} />
            <PizzaDetailSection pizza={pizza.data} />
            <Divider my={10} />
            <ExtraIngredientSelect
                selectedExtraList={selectedExtraList}
                setSelectedExtraList={setSelectedExtraList}
            />
            <Divider my={10} />
            <Box
                marginTop={10}
                display='flex'
                justifyContent='flex-end'>
                <OrderForm onOrderButtonClick={handleOrderPizza} />
            </Box>
        </Container>
    );
};

export default PizzaDetailView;
