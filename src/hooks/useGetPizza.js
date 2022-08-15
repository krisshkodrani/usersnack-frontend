import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPizza } from '../api';

const useGetPizza = () => {
    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({
        loading: true,
        data: null,
    });
    useEffect(() => {
        getPizza(pizzaId).then(data => {
            setPizza({ loading: false, data })
        })
    }, [pizzaId]);

    return pizza
}

export default useGetPizza;