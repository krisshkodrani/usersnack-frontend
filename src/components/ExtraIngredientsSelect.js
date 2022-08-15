import React, { useEffect, useState } from 'react';
import {
    Box,
    Select,
    Spacer,
    Text,
} from '@chakra-ui/react';

import { getExtraIngredients } from '../api';

import ActionButton from './ActionButton';
import LoadingSpinner from './LoadingSpinner';
import Ingredients from '../components/Ingredients';

const ExtraIngredientSelect = ({ selectedExtraList, setSelectedExtraList }) => {
    const [extraIngredients, setExtraIngredients] = useState({
        loading: true,
        data: [],
    });

    const [selectedExtra, setSelectedExtra] = useState();

    useEffect(() => {
        getExtraIngredients().then(data => {
            setExtraIngredients({ loading: false, data })
        })
    }, []);

    const handleSelectIngredient = ({ target: { value } }) => {
        console.log(value)
        const ingredient = extraIngredients.data.filter(i => i.id === parseInt(value))
        setSelectedExtra(ingredient[0])
    }

    const handleAddIngredient = () => {
        const onylUniqueItemsArray = [...new Set([...selectedExtraList, selectedExtra])]
        setSelectedExtraList(onylUniqueItemsArray)
    }

    const handleRemoveIngredient = (ingredientId) => {
        setSelectedExtraList(selectedExtraList.filter(i => i.id !== parseInt(ingredientId)))
    }

    if (extraIngredients.loading) {
        return <LoadingSpinner />;
    }


    return (
        <>
            <Box
                my={5}
                minH={120}
                display='flex'
                flexDirection={{ base: 'column', md: 'row' }}
                justifyContent='space-between'
                alignItems={'center'}
            >
                <Text flex='2' fontSize='lg'>Please select multiple extras:</Text>
                <Select
                    onChange={handleSelectIngredient}
                    flex='2'
                    placeholder='Choose extras'
                    maxW='40vw'
                >
                    {
                        extraIngredients.data.map(extra => {
                            return (
                                <option key={extra.id} value={extra.id}>{extra.name} +{extra.price.toFixed(2)} USD</option>
                            )
                        })
                    }
                </Select>
                <Spacer />
                <ActionButton text='Add' onClick={handleAddIngredient} />
            </Box>
            <Box
                minH={100}
                display='flex'
                justifyContent='flex-start'
                alignItems='flex-start'
            >
                <Ingredients ingredients={selectedExtraList}
                    onIngredientCloseButtonClick={handleRemoveIngredient}
                    colorScheme='orange'
                    borderRadius='full'
                    variant='solid'
                    hasCloseButton
                />
            </Box>
        </>
    )
}

export default ExtraIngredientSelect;
