import { useEffect, useState } from 'react';

const useTotalPriceCalculation = (pizza, selectedExtraList) => {
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        if (pizza.error) {
            return
        }

        let total = 0
        if (!pizza.loading) {
            total += pizza.data.base_price
        }
        selectedExtraList.forEach(extra => {
            total += extra.price
        });
        total = parseFloat(total).toFixed(2);
        setTotalPrice(total);
    }, [selectedExtraList, pizza]);

    return totalPrice
}

export default useTotalPriceCalculation;
