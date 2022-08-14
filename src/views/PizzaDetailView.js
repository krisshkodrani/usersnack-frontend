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
import UsersnackModal from '../components/UsersnackModal';

const PizzaDetailView = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState({
        loading: true,
        data: null,
    });

    const [totalPrice, setTotalPrice] = useState();
    const [selectedExtraList, setSelectedExtraList] = useState([]);
    const [isOrderModalOpen, setOrderModalOpen] = useState(false);

    useEffect(() => {
        let total = 0
        if (!pizza.loading) {
            total += pizza.data.base_price
        }
        selectedExtraList.forEach(extra => {
            total += extra.price
        });
        setTotalPrice(total);
    }, [selectedExtraList, pizza]);

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
        const resData = await postPizzaOrder(data);
        console.log(resData);
        setOrderModalOpen(true);
    }

    return (
        <Container maxW='7xl' p='12'>
            <UsersnackModal isOpen={isOrderModalOpen} />
            <Header headerText={'Usersnack - ' + pizza.data.name} />
            <PizzaDetailSection pizza={pizza.data} totalPrice={totalPrice} />
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
