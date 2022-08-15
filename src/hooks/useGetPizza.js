import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPizza } from '../api';

const useGetPizza = () => {
    const { pizzaId } = useParams();
    const [pizza, setPizza] = useState({
        loading: true,
        data: null,
        error: false,
    });
    useEffect(() => {
        getPizza(pizzaId).then(res => {
            if (res.success) {
                setPizza({ loading: false, data: res.data, error: false })
            } else {
                setPizza({ loading: false, data: null, error: true })
            }
        })
    }, [pizzaId]);

    return pizza
}

export default useGetPizza;