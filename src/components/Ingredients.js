import React from 'react';
import {
    Wrap,
    WrapItem,
    Tag,
    TagCloseButton
} from '@chakra-ui/react';

const Ingredients = ({ ingredients, onIngredientCloseButtonClick, size = 'lg', colorScheme, borderRadius, variant, hasCloseButton = false }) => {
    return (
        <Wrap spacing={2} my={2} marginRight={2}>
            {ingredients.map((ingredient) => {
                return (
                    <WrapItem key={ingredient.id}>
                        <Tag
                            size={size}
                            variant={variant}
                            borderRadius={borderRadius}
                            colorScheme={colorScheme}
                        >
                            {ingredient.name}
                            {hasCloseButton && <TagCloseButton onClick={() => onIngredientCloseButtonClick(ingredient.id)} />}
                        </Tag>
                    </WrapItem>
                );
            })}
        </Wrap>
    );
};


export default Ingredients;
