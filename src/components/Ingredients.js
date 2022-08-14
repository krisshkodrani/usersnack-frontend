import React from 'react';
import {
    HStack,
    Tag,
    TagCloseButton
} from '@chakra-ui/react';

const Ingredients = ({ ingredients, onIngredientCloseButtonClick, size = 'lg', colorScheme, borderRadius, variant, hasCloseButton = false }) => {
    return (
        <HStack spacing={2} my={2}>
            {ingredients.map((ingredient) => {
                return (
                    <Tag
                        size={size}
                        variant={variant}
                        borderRadius={borderRadius}
                        key={ingredient.id}
                        colorScheme={colorScheme}
                    >
                        {ingredient.name}
                        {hasCloseButton && <TagCloseButton onClick={() => onIngredientCloseButtonClick(ingredient.id)} />}
                    </Tag>
                );
            })}
        </HStack>
    );
};


export default Ingredients;
