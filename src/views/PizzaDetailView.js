import React, { useEffect, useState } from 'react';
import {
    Box,
    Container,
    Divider
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { postPizzaOrder } from '../api';
import orderModalStates from '../constants/orderModalStates';

import OrderForm from '../components/OrderForm';
import Header from '../components/Header';
import PizzaDetailSection from '../components/PizzaDetailSection';
import LoadingSpinner from '../components/LoadingSpinner';
import ExtraIngredientSelect from '../components/ExtraIngredientsSelect';
import UsersnackModal from '../components/UsersnackModal';

import useGetPizza from '../hooks/useGetPizza';
import useTotalPriceCalculation from '../hooks/useTotalPriceCalculation';


const PizzaDetailView = () => {
    let navigate = useNavigate();
    const pizza = useGetPizza();

    const [modal, setModal] = useState(orderModalStates.initial);
    const [orderRes, setOrderRes] = useState({
        sent: false,
        success: false,
        data: null,
        detail: null,
    });

    const [selectedExtraList, setSelectedExtraList] = useState([]);
    const totalPrice = useTotalPriceCalculation(pizza, selectedExtraList);

    useEffect(() => {
        if (orderRes.sent && orderRes.success) {
            setModal(orderModalStates.openSuccess);
        } else if (orderRes.sent && !orderRes.success) {
            setModal(orderModalStates.openFailBadRequest);
        }
    }, [orderRes]);

    const handleOrderPizza = async ({ customerName, customerAddress }) => {
        if (!customerName || !customerAddress) {
            setModal(orderModalStates.openFailMissingNameAndAddress);
        } else {
            const orderData = {
                customerName,
                customerAddress,
                pizzaId: pizza.data.id,
                extraIngredients: selectedExtraList
            }
            const res = await postPizzaOrder(orderData);
            setOrderRes({ sent: true, ...res });
        }
    }

    const handleModalOnClose = () => {
        setModal(orderModalStates.initial);
        if (orderRes.sent && orderRes.success) {
            navigate('/');
        }
    }


    if (pizza.loading) {
        return <LoadingSpinner />;
    }

    return (
        <Container maxW='6xl' p={10}>
            <UsersnackModal
                isOpen={modal.isOpen}
                onClose={handleModalOnClose}
                headerText={modal.headerText}
                bodyText={modal.bodyText}
            />
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
